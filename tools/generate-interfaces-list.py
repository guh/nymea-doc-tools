#!/usr/bin/python3

import re
import sys
import os
import json
import git

import docutils as Utils

def load_interfaces(sourcedir):
  interfaces = {}
  files = Utils.list_files(sourcedir, ".json")
  for file in files:
    ifaceName = file.split(".")[0]
    interface = Utils.read_json(os.path.join(sourcedir, file))
    interfaces[ifaceName] = interface
  return interfaces

def build_links(interface):
  ret = ""
  if "extends" in interface:
    extends = interface["extends"]
    if type(extends) is not list:
      extends = [extends]
    for extend in extends:
      if ret != "":
        ret += ", "
      ret += "[%s](#%s)" % (extend, extend)
  return ret

def build_markdown(interfaces):
  ret = ""
  for ifaceName in sorted(interfaces):
    interface = interfaces[ifaceName]
    ret += "## %s\n\n" % ifaceName
    if "description" in interface:
      ret += "%s\n\n" % interface["description"]
      del interface["description"]
    ret += Utils.build_codeblock(json.dumps(interface, indent=2), "json")
    ret += "\n\n"
    links = build_links(interface)
    if links != "":
      ret += "See also: %s\n\n" % links
  return ret

def insert_in_tree(tree, iface):
  if "childs" not in iface:
    iface["childs"] = []

  if "extends" not in iface:
    print("Adding to top level")
    tree.append(iface)
    tree.sort(key=lambda iface: iface["name"])
    return True

  if isinstance(iface["extends"], str):
    for tmp in tree:
#      print("1 looking for iface", iface["extends"], "in", tmp["name"])
      if tmp["name"] == iface["extends"]:
        if iface not in tmp["childs"]:
          tmp["childs"].append(iface)
          tmp["childs"].sort(key=lambda iface: iface["name"])
        return True
      if insert_in_tree(tmp["childs"], iface):
        return True
    return False

  found = 0
  for extend in iface["extends"]:
    for tmp in tree:
#      print("2 looking for iface", extend, "in", tmp["name"])
      if tmp["name"] == extend:
        if iface not in tmp["childs"]:
          tmp["childs"].append(iface)
          tmp["childs"].sort(key=lambda iface: iface["name"])
        found = found + 1
      if insert_in_tree(tmp["childs"], iface):
        found = found + 1
  if found is len(iface["extends"]):
    return True
  return False

def build_tree(interfaces):
  tree = []
  doAgain = True
  notInserted = {}
  i = 0
  while doAgain and i < 5:
    i = i + 1
    print("-------------")
    doAgain = False
    for ifaceName in interfaces:
      print("inserting %s" % ifaceName)

      iface = interfaces[ifaceName]
      iface["name"] = ifaceName
      inserted = insert_in_tree(tree, iface)
      if not inserted:
        print("NOT inserted")
        notInserted[ifaceName] = iface
      doAgain = doAgain or not inserted
    interfaces = notInserted
#    print("tree is now %i of %i" % (len(tree), len(interfaces)))
#    return tree
  return tree


def print_tree(tree, indent=0):
  ret = ""
  for iface in tree:
    str = ""
    for i in range(indent):
      str += "  "
    str += "* [" + iface["name"] + "](#" + iface["name"] + ")"
    print(str)
    ret += str + "\n\n"
    ret += print_tree(iface["childs"], indent + 1)
  return ret
### Main

branch = "master"
if len(sys.argv) > 1:
  branch = sys.argv[1]

config = Utils.read_json("interfaces-config.json")
Utils.clone_repo(config["srcdir"], branch)
targets = Utils.find_targets(config["keyword"], config["outputdir"])
print("Files to replace: %s" % targets)
interfaces = load_interfaces(os.path.join(config["srcdir"], "nymea/libnymea/interfaces"))
tree = build_tree(interfaces)
markdown = print_tree(tree)

interfaces = load_interfaces(os.path.join(config["srcdir"], "nymea/libnymea/interfaces"))
markdown += build_markdown(interfaces)
replacements = {}
replacements[config["keyword"]] = markdown
Utils.generate_output_file(targets, replacements)
