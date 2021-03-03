#!/usr/bin/python3

import docutils as Utils
import json
import os

inputfile = "../src/menu-order.json"
outputfile = "../src/_components/menu/_order.js"


def validate_entry(entry, path=""):
#  print("have object", json.dumps(entry))
#  print("entry is:", entry["filename"])
#  print("path is", path)
  filename = entry["filename"]
  filepath = os.path.join(path, entry["filename"])
  if os.path.isdir(filepath) or os.path.isfile(filepath + ".md") or os.path.isfile(filepath + ".svelte"):
    print("%s: OK" % filepath);
  else:
    print("%s NOT OK" % filepath)
    exit(1)
  if "children" in entry:
    children = entry["children"]
    for child in children:
      validate_entry(child, os.path.join(path, filename))
#    print("Validating entry %s" % json.dumps(entry))

menu = Utils.read_json(inputfile)
for entry in menu:
  validate_entry(entry, "../src/pages/")


outputstring = "export const menuOrder = "
outputstring += json.dumps(menu, indent=2)
outputstring += ";"

Utils.write_text(outputfile, outputstring)
