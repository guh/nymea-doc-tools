---
id: scripting
title: Scripting
---

As of version 0.18 nymea supports scripting using JavaScript and QML. Scripting can be used to 
automate behaviors, similar to rules, but are aimed towards a more advanced usage of nymea. While 
scripting requires a basic understanding of the JavaScript programming language, it also features 
a much more powerful way to interact with nymea.

> It is recommended to install nymea:app on a PC in order to use the script editor.
    
The recommended way to create and edit scripts is the integrated script editor in nymea:app. It can 
be found in the mains screen's menu -> Magic using the script icon in the upper right corner.

<dl>
<img src="https://raw.githubusercontent.com/guh/nymea-wiki/master/docs/en/images/scripting-0.png" alt="deviceId completion" style="float: left; font-size: 9pt; text-align: center; width: 100%; margin-right: 1%; margin-bottom: 0.5em;">
<p style="clear: both;">
</dl>
<br />

## Introduction
nymea scripts follows the QML syntax. Please refer to the [QML Documentation](https://doc.qt.io/qt-5/qtqml-documents-topic.html)
for details on the QML language.
A script can be thought of like a small app running inside nymea core. As soon as a script has 
been deployed to nymea:core it will be loaded and execution starts. The script might then listen 
to state changes in the system, or use timer events to trigger execute actions in the system.

<br />

The nymea:app script editor will report console output for the script as well as errors in the script:

<dl>
<img src="https://raw.githubusercontent.com/guh/nymea-wiki/master/docs/en/images/scripting-1.png" alt="deviceId completion" style="float: left; font-size: 9pt; text-align: center; width: 100%; margin-right: 1%; margin-bottom: 0.5em;">
<p style="clear: both;">
</dl>
<br />



### Basic structure
An example of a simple nymea script looks like this

    import QtQuick 2.0
    import nymea 1.0

    Item {

    }

This example script will be functional, but it doesn't actually do anything. Depending on the 
purpose of the script, different content may be added inside the Item {} structure. Every script 
must have exactly one item, the so called root item. This root item might contain any number of
child items.

For example, in order to act on a motion sensor detecting presence, such a block can be added:

    import QtQuick 2.0
    import nymea 1.0

    Item {
        DeviceState {
            deviceId: "123456-1234-1234-123456"
            stateName: "isPresent"
            onValueChanged: {
                console.log("Presence detected:", value);
            }
        }
    }

This script will log the text "Presence detected: true" into the script's console when the 
motion sensor detects a person and "Presence detected: false" when the person has left again.


### IDs and names
Throughout the nymea scripting, there will be the need to provide values for properties like 
`deviceId`, `stateTypeId`, `stateName` or similar. Those refer to certain things set up in 
your nymea system and will be unique to a particular nymea system and for thus cannot be 
listed in the documentation. The nymea:app script editor provide code completion for an easy 
way to insert the appropriate ids for the particular nymea system. This document will use 
`<deviceId>`, `<stateName>` etc as placeholder values. Whenever such a script snippet is added 
to a nymea instance, those placeholders need to be replaced with the proper ids.

<br />

When placing the cursor after the text `deviceId: "` the script editor will pop up suggestions
for all the devices in the system.

<br />

<dl>
<img src="https://raw.githubusercontent.com/guh/nymea-wiki/master/docs/en/images/deviceid-completion-0.png" alt="deviceId completion" style="float: left; font-size: 9pt; text-align: center; width: 396px; margin-right: 1%; margin-bottom: 0.5em;">
<p style="clear: both;">
</dl>
<br />

Selecting an entry will cause the script editor to fill in the appropriate ID for this device.

<dl>
<img src="https://raw.githubusercontent.com/guh/nymea-wiki/master/docs/en/images/deviceid-completion-1.png" alt="deviceId completion" style="float: left; font-size: 9pt; text-align: center; width: 509px; margin-right: 1%; margin-bottom: 0.5em;">
<p style="clear: both;">
</dl>
<br />

The same is valid for `stateTypeId`, `stateName`, `eventTypeId`, `eventName`, `actionTypeId`, `actionName`.

## Available types
The script engine supports all the types as found in the [QML Documentation](https://doc.qt.io/qt-5/qtqml-documents-topic.html).
Thos most useful ones for nymea scripts will likely be
    * Timer
    * Repeater
    * ListModel
    * ListElement
    
In addition to those, a set of nymea specific types are supported. The most important ones being:
### DeviceState
A DeviceState is used to watch a certain device's state in the system, or, if the device state 
is writable to set it to a particular value. For instance, a light bulb can be turned on by setting 
its `value` property to `true`
Example:

    DeviceState {
        deviceId: "<deviceId>"
        stateName: "someState"
        value: true
    }

### DeviceEvent
A DeviceEvent is used to react on events in the system. For instance, a wall switch might have a 
`pressed` event. The following example script would write a log warning whenever the switch is 
pressed.

    DeviceEvent {
        deviceId: "<deviceId>"
        eventName: "pressed"
        onTriggered: console.warn("Button pressed!")
    }

### DeviceAction
A DeviceAction is used to execute an action on a particular device. For instance, a push notification
to a phone running nymea:app can be sent with this example script:

    DeviceAction {
        id: notificationAction
        deviceId: "<deviceId>"
        actionName: "notify"
    }
    ...
    notificationAction.execute({"title": "Hello", "body": "nymea rocks!"})

### Alarm
An Alarm is used to execute actions or set states at given times. For instance, an alarm that triggers 
Monday to Friday at 7:00 in the morning can be set up with this example:

    Alarm {
        time: "07:00"
        endTime: "08:00"
        weekDays: Alarm.Monday | Alarm.Tuesday | Alarm.Wednesday | Alarm.Thursday | Alarm.Friday
        onActiveChanged: {
            if (active) {
                console.log("Alarm active now!")
            } else {
                console.log("Alarm ended")
            }
        }
    }
    
## Adding more JavaScript
Anywhere in the script, standard JavaScript can be added. For instance we can count the number
of button presses. To execute an action when a button is pressed 5 times within 5 seconds, we can 
use such an example:

    Item {
        id: root
        
        property int counter: 0
        
        Timer {
            id: timer
            interval: 5000
            repeat: false
            running: root.counter > 0 // The timer only runs when the counter is > 0
            onTriggered: {
                root.counter = 0; // Reset the counter after 5 secs
            }
        }
        
        DeviceEvent {
            deviecId: "<deviceId>" // id of button device
            eventName: "pressed"
            onTriggered: {
                root.counter = root.counter + 1;
                if (root.counter >= 5) {
                    console.log("Button pressed 5 times within 5 seconds!")
                }
            }
        }
    }
    
## Putting things together
### Binding states
DeviceStates can be linked using a property binding. For instance, to turn on a light while a presence 
sensor reports presence, set the light's power state value to the sensor's presence state:

    DeviceState {
        id: presenseState
        deviceId: "<deviceId>" // id of presence sensor
        stateName: "isPresent"
    }
    DevieState {
        deviceId: "<deviceId>" // id of light device
        stateName: "power
        value: presenseState.value
    }
    
In this example, the light's power state value is set to the presence sensor's isPresent state's value. 
This way, whenever the value for isPresent changes, it will automatically be synced to the power state.

### Reacting on events
Devices that have events, e.g. a power wall switch that has a "pressed" event, can be used to execute 
an action in the system. Let's turn on a light when a button is pressed, but only if it's dark outside:

    DeviceEvent {
        deviceId: "<deviecId>" // id of button device
        eventName: "pressed"
        onTriggered: {
            if (daylightState.value == false) {
                lightPowerState.value = true;
            }
        }
    }
    DeviceState {
        id: daylightState
        deviceId: "<deviceId>" // id of daylight sensor
        stateName: "daylight"
    }
    DeviceState {
        id: lightPowerState
        deviceId: "<deviceId>" // id of light
        stateName: "power"
    }
    

