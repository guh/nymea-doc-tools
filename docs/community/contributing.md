---
id: contribute
title: Contribute
---

First off, thanks for taking the time to contribute. We are happy that you are interested in contributing to nymea!


## Contribute

The main repositories of nymea are nymea:core, nymea:app and nymea:plugins.

**nymea:core**

nymea:core (the core) is an application written in Qt and contains the whole communication with the hardware, loads the supported plugins and devices and manages all devices and rules. The core provides a JSON-RPC API to allow clients to communicate with the core.

**nymea plugins**

Here’s our collection of readily available plugins for the nymea IoT server. Not finding your device? If you are a developer, get started with creating your plugin

**nymea:app**

The nymea:app is a front end nymea client built using Qt. For full description, please check our wiki.

**nymea-cli**

The nymea-cli (command line interface) is an admin tool written in python to communicate with the nymea JSON-RPC API and test functionality of nymea.

But make sure to also check out the others, like nymea-networkmanager, nymea-mqtt etc. You can find them in our organization's GitHub.

## License Agreement

We’re required to have a signed agreement with everyone who puts effort in the development. It’s the easiest way for you to give us permission to use your contributions. Technically, with this agreement, you’re giving us a licence, but you still own the copyright — so you still have the right to modify your code and use it as you see fit. When you are ready to contribute to nymea, please make sure to have filled in this document and you've sent it to us using developer@nymea.io
Download our license agreement https://nymea.io/download/CLA-Agreement.pdf

## Coding style

Since nymea was written in C++ framework Qt, the coding style was taken over from Qt. The coding style guidelines and instruction can be found here:

    http://qt-project.org/wiki/Qt_Coding_Style | Qt coding style
    http://qt-project.org/wiki/Coding-Conventions | Qt coding conventions