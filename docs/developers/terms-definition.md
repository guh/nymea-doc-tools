---
id: terms-definition
title: Terms definition
---


### Params

Params are parameters that are needed to setup the device. Common params are IP address, port or device identification. Params are usually defined during the device setup, and are required to enable to reload the device after a reboot. Params are stored within other device information inisde the device.conf file.

### Settings

Settings are like params, with the exception that the user (and also the plugin developer) can change them at runtime. Settings should be used to change the behavior of a device. An example would be the refresh interval for polling a web server.

### States    

States basically represent a value of a Device, for example the temperature of a thermostat, the brightness of a bulb.
Sometimes actions and states needs to be combined, for example a brightness slider that needs a state to know where the slider 
is and needs an action to send the brightness to the bulb. For that there are _writable_ states, where nymea creates automatically
an action out of the state.

### Events

Events basically represent a signal, for example a button pressed, or motion detected. 
Like actions, events can have Params too, to give the possibility to pass information with the signal, another example: Email received, an event with a subject text line and a body text field.

### Actions

Actions represent basically a method for the Device which the user can execute. An example of an Action could be: Set temperature. 
An Action can have params to give the possibility to parameterize the action, like Send Email has the action param "subject", and "body" so you can add a subject line and text to the body before you can send it.

### Interfaces

Interface define the character of a device/service, and require certain actions, states and events so that device category is always the same. An example, an interface that defines a simple light bulb, needs to have at leas an on/off action - so in the app this device will be displayed as a light with a toggle button and if nymea is connected to voice assistants also recognice this device as a light.

### Vendor

Inside every device plug-in a vendor is defined that is the manufacturer of the device. So generic plug-ins that doesn't belong to a specific device have 'nymea' defined as vendor. 

### Experience Plug-In

Are extended plug-ins with access to all devices and the ability to extend the API. This plug-ins are usually only once in an installation and defines the character of the device. Experience plug-ins come usually with an user interface customized to that experince. 

### Virtual device

Is a 

### Scripts

With scripts you can define more advanced rules. Scripts are written in QML/JS and can be installed and written inside the nymea:app.

### Rules

With rules you can tell what nymea should do automatically. No coding skills required.

More about the [rule engine](/docs/about/rule-engine)

### Magic

The nymea:app calls rules "Magic" 

### Scenes

Scenes are rules that can be triggered manually.

### Daemon

In multitasking operating systems, a daemon is a computer program that runs as a background process.
