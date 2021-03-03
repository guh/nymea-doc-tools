---
id: interfaces
title: Interfaces
---


When creating ThingClasses, the interfaces field can be used to specify a list of interfaces this ThingClass implements.


When implementing an interface, the ThingClass must follow the interface specification for the according interface. This 
means the ThingClass needs to have at least all the states, actions and events the given interface requires. A ThingClass 
may add custom states, actions or events, or even implement multiple interfaces.


The main purpose of interfaces is to provide for a better user experience. Using interfaces, a plugin developer can suggest 
the ui to be used for this ThingClass. For example, having a plugin that can control a dimmable light would likely have a 
state named "powered" of type boolean and one named "brightness" of type int, ranging from 0 to 100%. Having just this 
information, the ui would create a generic switch component to flip the bool state and a generic slider component to 
allow adjusting the brightness because it can't know what the actual switch or slider do. For a better user experience though, 
the plugin developer could just add the interface "dimmedlight" to this deviceclass and this way tell the ui that this actually 
is a dimmed light. The ui can use this information to paint a pretty brightness slider, and implicitly flip the power switch off 
when the brightness slider is moved to the lower end.

Another purpose of interfaces is to help the ui grouping and managing things. For example the gateway interface does 
not require to implement any properties, however, it tells the ui that this is a gateway and thus not relevant to show to the 
user in the main control entity. Instead, gateways might be listed in the configuration section of the client application.

In general it is a good idea to follow as many interfaces as precicely as possible in order to provide for the best user experience.

A interface can extend another interface. For example, the light interface only requires one state called powered of type bool. 
A dimmablelight extends this type and adds a brightness property to it. This means, if a ThingClass implements dimmablelight, 
it also needs to cater for the light interface's states.

## accesscontrol

```json
{
  "events": [
    {
      "name": "accessGranted"
    },
    {
      "name": "accessDenied"
    }
  ]
}
```

## account

This is used to flag a thing that manages user a user account. It is similar to the gateway interface. For example, if there is a remote API that requires logging in but doesn't really offer any more functionality than that, this account shall be used. It inherits "connectable" which is used to flag if the remote server is unreachable. In addition, the "loggedIn" state indicates if the login fails. While logged in, the "userDisplayName" state should give the user's name in a pretty printed form. A client may reconfigure the device then to login again. Such device classes usually will cause auto-devices implementing the actual features as child devices.

```json
{
  "extends": "connectable",
  "states": [
    {
      "name": "loggedIn",
      "type": "bool"
    },
    {
      "name": "userDisplayName",
      "type": "QString"
    }
  ]
}
```

See also: [connectable](#connectable)

## alert

Used for things that have some sort of alert. For instance, light bulbs may be able to blink on alert actions, or speaker might be able to play an alert sound. ZigBee devices for example oftion provide alert actions to identify themselves.

```json
{
  "actions": [
    {
      "name": "alert"
    }
  ]
}
```

## awning

```json
{
  "extends": "closable"
}
```

See also: [closable](#closable)

## barcodescanner

```json
{
  "events": [
    {
      "name": "codeScanned",
      "params": [
        {
          "name": "content",
          "type": "QString"
        }
      ]
    }
  ]
}
```

## battery

```json
{
  "states": [
    {
      "name": "batteryCritical",
      "type": "bool"
    }
  ]
}
```

## batterylevel

```json
{
  "extends": "battery",
  "states": [
    {
      "name": "batteryLevel",
      "type": "int",
      "minValue": 0,
      "maxValue": 100
    }
  ]
}
```

See also: [battery](#battery)

## blind

```json
{
  "extends": "closable"
}
```

See also: [closable](#closable)

## button

The base for all buttons that emit a pressed event.

```json
{
  "events": [
    {
      "name": "pressed"
    }
  ]
}
```

## closable

```json
{
  "extends": "simpleclosable",
  "actions": [
    {
      "name": "stop"
    }
  ]
}
```

See also: [simpleclosable](#simpleclosable)

## closablesensor

This interface can be used for i.e. magnetic window/door sensors

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "closed",
      "type": "bool"
    }
  ]
}
```

See also: [sensor](#sensor)

## co2sensor

CO2 sensors. Measures co2 in parts per million.

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "co2",
      "type": "double",
      "unit": "PartsPerMillion"
    }
  ]
}
```

See also: [sensor](#sensor)

## colorlight

```json
{
  "extends": "colortemperaturelight",
  "states": [
    {
      "name": "color",
      "type": "QColor",
      "writable": true
    }
  ]
}
```

See also: [colortemperaturelight](#colortemperaturelight)

## colortemperaturelight

```json
{
  "extends": "dimmablelight",
  "states": [
    {
      "name": "colorTemperature",
      "type": "int",
      "minimumValue": "any",
      "maximumValue": "any",
      "writable": true
    }
  ]
}
```

See also: [dimmablelight](#dimmablelight)

## conductivitysensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "conductivity",
      "type": "double",
      "unit": "MicroSiemensPerCentimeter"
    }
  ]
}
```

See also: [sensor](#sensor)

## connectable

```json
{
  "states": [
    {
      "name": "connected",
      "type": "bool",
      "defaultValue": false
    }
  ]
}
```

## daylightsensor

Devices implementing the daylight sensor interface have a boolean state indicating if currently is daylight. Additionally the current times for sunrise and sunset are provided.

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "daylight",
      "type": "bool"
    },
    {
      "name": "sunriseTime",
      "unit": "UnixTime",
      "type": "int"
    },
    {
      "name": "sunsetTime",
      "unit": "UnixTime",
      "type": "int"
    }
  ]
}
```

See also: [sensor](#sensor)

## dimmablelight

```json
{
  "extends": "light",
  "states": [
    {
      "name": "brightness",
      "type": "int",
      "minimumValue": 0,
      "maximumValue": 100,
      "writable": true
    }
  ]
}
```

See also: [light](#light)

## doorbell

An interface for doorbells. Emits "doorbellPressed" when the doorbell is pressed.

```json
{
  "events": [
    {
      "name": "doorbellPressed"
    }
  ]
}
```

## evcharger

An EV-charger. Extends the power interface for charging/not charging an electric vehicle.

```json
{
  "extends": "power"
}
```

See also: [power](#power)

## extendedawning

```json
{
  "extends": [
    "awning",
    "extendedclosable"
  ]
}
```

See also: [awning](#awning), [extendedclosable](#extendedclosable)

## extendedblind

```json
{
  "extends": [
    "blind",
    "extendedclosable"
  ]
}
```

See also: [blind](#blind), [extendedclosable](#extendedclosable)

## extendedclosable

```json
{
  "extends": "closable",
  "states": [
    {
      "name": "moving",
      "type": "bool"
    },
    {
      "name": "percentage",
      "type": "int",
      "minimumValue": 0,
      "maximumValue": 100
    }
  ]
}
```

See also: [closable](#closable)

## extendedevcharger

An extended version of the EV-charger interface. Supports regulation of percentage in addition ot be powered on or off.

```json
{
  "extends": "evcharger",
  "states": [
    {
      "name": "maxChargingCurrent",
      "type": "uint",
      "writable": true,
      "unit": "MilliAmpere"
    }
  ]
}
```

See also: [evcharger](#evcharger)

## extendedheating

The extendedheating interface defines heating appliances which can also be controlled with a percentage range. When implementing such a device class, do not set power to true when the percentage is set.

```json
{
  "extends": "heating",
  "states": [
    {
      "name": "percentage",
      "type": "int",
      "min": 0,
      "max": 100,
      "unit": "Percentage",
      "writable": true
    }
  ]
}
```

See also: [heating](#heating)

## extendedmediacontroller

A more advanced media controller interface, supporting fast forward and rewind

```json
{
  "extends": "mediacontroller",
  "actions": [
    {
      "name": "fastRewind"
    },
    {
      "name": "fastForward"
    }
  ]
}
```

See also: [mediacontroller](#mediacontroller)

## extendednavigationpad

The extended media interface offers also the info and menu button of media devices.

```json
{
  "extends": "navigationpad",
  "actions": [
    {
      "name": "navigate",
      "params": [
        {
          "name": "to",
          "type": "QString",
          "allowedValues": [
            "up",
            "down",
            "left",
            "right",
            "enter",
            "back",
            "menu",
            "info",
            "home"
          ]
        }
      ]
    }
  ]
}
```

See also: [navigationpad](#navigationpad)

## extendedshutter

```json
{
  "extends": [
    "shutter",
    "extendedclosable"
  ]
}
```

See also: [shutter](#shutter), [extendedclosable](#extendedclosable)

## extendedsmartmeterconsumer

Like smartmeterconsumer, but instead of only providing total consumed energy, this also supports retrieving the current power demand rate. Note that currentPower is negative for consumers but might also be positive if a device implements consumer and producer and currently produces more than it consumes.

```json
{
  "extends": "smartmeterconsumer",
  "states": [
    {
      "name": "currentPower",
      "type": "double",
      "unit": "Watt"
    }
  ]
}
```

See also: [smartmeterconsumer](#smartmeterconsumer)

## extendedsmartmeterproducer

Like smartmeterproducer, but instead of only providing total produced energy, this also supports retrieving the current power supply rate. Note that currentPower is positive for producers but might also be negative if a device implements consumer and producer and currently consumes more than it produces.

```json
{
  "extends": "smartmeterproducer",
  "states": [
    {
      "name": "currentPower",
      "type": "double"
    }
  ]
}
```

See also: [smartmeterproducer](#smartmeterproducer)

## extendedvolumecontroller

```json
{
  "extends": "media",
  "states": [
    {
      "name": "mute",
      "type": "bool",
      "writable": true
    },
    {
      "name": "volume",
      "type": "int",
      "minValue": 0,
      "maxValue": 100,
      "writable": true
    }
  ]
}
```

See also: [media](#media)

## fingerprintreader

```json
{
  "extends": "useraccesscontrol",
  "events": [
    {
      "name": "accessGranted",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        },
        {
          "name": "finger",
          "type": "QString",
          "allowedValues": [
            "ThumbLeft",
            "IndexFingerLeft",
            "MiddleFingerLeft",
            "RingFingerLeft",
            "PinkyLeft",
            "ThumbRight",
            "IndexFingerRight",
            "MiddleFingerRight",
            "RingFingerRight",
            "PinkyRight"
          ]
        }
      ]
    }
  ],
  "actions": [
    {
      "name": "addUser",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        },
        {
          "name": "finger",
          "type": "QString",
          "allowedValues": [
            "ThumbLeft",
            "IndexFingerLeft",
            "MiddleFingerLeft",
            "RingFingerLeft",
            "PinkyLeft",
            "ThumbRight",
            "IndexFingerRight",
            "MiddleFingerRight",
            "RingFingerRight",
            "PinkyRight"
          ]
        }
      ]
    },
    {
      "name": "removeUser",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        }
      ]
    }
  ]
}
```

See also: [useraccesscontrol](#useraccesscontrol)

## garagegate

```json
{
  "extends": "closable",
  "states": [
    {
      "name": "state",
      "type": "QString",
      "allowedValues": [
        "open",
        "closed",
        "opening",
        "closing"
      ]
    },
    {
      "name": "intermediatePosition",
      "type": "bool"
    }
  ]
}
```

See also: [closable](#closable)

## gateway

The gateway interface is used for gateway devices like bridges to other networks. For instance Ethernet to ZigBee bridges, Ethernet to RF bridges or similar. Typically such device classes implement the actual functionality in child devices that will auto-appear after successful connection to the gateway/bridge.

```json
{
  "extends": "connectable"
}
```

See also: [connectable](#connectable)

## heating

The heating interface defines basic heating appliances.

```json
{
  "extends": "power"
}
```

See also: [power](#power)

## humiditysensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "humidity",
      "type": "double",
      "minValue": 0,
      "maxValue": 100
    }
  ]
}
```

See also: [sensor](#sensor)

## inputtrigger

```json
{
  "events": [
    {
      "name": "triggered"
    }
  ]
}
```

## light

```json
{
  "extends": "power"
}
```

See also: [power](#power)

## lightsensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "lightIntensity",
      "type": "double",
      "unit": "Lux"
    }
  ]
}
```

See also: [sensor](#sensor)

## longpressbutton

A button that emits different events, pressed and longpressed, depending on how long the user presses it. Note that the button should only emit one of them at a time. I.e. don't emit pressed on botton down and later longPressed if the user keeps on holding the button. Such a longpress should only emit longPressed. Common practice is to emit pressed if a release event is received before a timeout expires, else emit longpress when the timeout expires.

```json
{
  "extends": "button",
  "events": [
    {
      "name": "longPressed"
    }
  ]
}
```

See also: [button](#button)

## longpressmultibutton

A remote control with multiple buttons that can distinguish between short and long presses. Note that the button should only emit one of them at a time. I.e. don't emit pressed on botton down and later longPressed if the user keeps on holding the button. Such a longpress should only emit longPressed. Common practice is to emit pressed if a release event is received before a timeout expires, else emit longpress when the timeout expires.

```json
{
  "extends": "simplemultibutton",
  "events": [
    {
      "name": "longPressed",
      "params": [
        {
          "name": "buttonName",
          "type": "QString"
        }
      ]
    }
  ]
}
```

See also: [simplemultibutton](#simplemultibutton)

## media

The base for all media interfaces. Client applications might use this to group/filter things supporting media playback/control. When implementing a plugin use mediaplayer or mediacontroller for actual devices.

```json
{}
```

## mediacontroller

The mediacontroller interface contains basic actions to control media streams. If a device supports fast forward and rewind, use extendedmediacontroller instead.

```json
{
  "extends": "media",
  "actions": [
    {
      "name": "skipBack"
    },
    {
      "name": "stop"
    },
    {
      "name": "play"
    },
    {
      "name": "pause"
    },
    {
      "name": "skipNext"
    }
  ]
}
```

See also: [media](#media)

## mediametadataprovider

Provide media information, meant to be used in combination with mediaplayer. For music players, use collection to provide the album/compilation, for video players fill in the series name or a movie collection name there. Artwork can be a URL to a artwork image.

```json
{
  "extends": "media",
  "states": [
    {
      "name": "title",
      "type": "QString"
    },
    {
      "name": "artist",
      "type": "QString"
    },
    {
      "name": "collection",
      "type": "QString"
    },
    {
      "name": "artwork",
      "type": "QString"
    }
  ]
}
```

See also: [media](#media)

## mediaplayer

Media player interface. Used by devices/services which can play back media.

```json
{
  "extends": "media",
  "states": [
    {
      "name": "playbackStatus",
      "type": "QString",
      "allowedValues": [
        "Playing",
        "Paused",
        "Stopped"
      ]
    },
    {
      "name": "playerType",
      "type": "QString",
      "allowedValues": [
        "audio",
        "video"
      ]
    }
  ]
}
```

See also: [media](#media)

## moisturesensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "moisture",
      "type": "double"
    }
  ]
}
```

See also: [sensor](#sensor)

## multibutton

A remote control with multiple buttons. Emits pressed(buttonName) on button presses.

```json
{
  "extends": "button",
  "events": [
    {
      "name": "pressed",
      "params": [
        {
          "name": "buttonName",
          "type": "QString"
        }
      ]
    }
  ]
}
```

See also: [button](#button)

## navigationpad

Many media devices have a navigation pad for browsing a library or a menu. This interface represents a basic navigation pad.

```json
{
  "extends": "media",
  "actions": [
    {
      "name": "navigate",
      "params": [
        {
          "name": "to",
          "type": "QString",
          "allowedValues": [
            "up",
            "down",
            "left",
            "right",
            "enter",
            "back"
          ]
        }
      ]
    }
  ]
}
```

See also: [media](#media)

## noisesensor

A sensor interface for noise sensors. Should deliver a median noise level in regular intervals. This is meant for overall noise level monitoring (e.g. in buildings) and not real time audio processing.

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "noise",
      "type": "double",
      "unit": "Dezibel"
    }
  ]
}
```

See also: [sensor](#sensor)

## notifications

```json
{
  "actions": [
    {
      "name": "notify",
      "params": [
        {
          "name": "title",
          "type": "QString"
        },
        {
          "name": "body",
          "type": "QString"
        }
      ]
    }
  ]
}
```

## outputtrigger

```json
{
  "actions": [
    {
      "name": "trigger"
    }
  ]
}
```

## power

```json
{
  "states": [
    {
      "name": "power",
      "type": "bool",
      "writable": true
    }
  ]
}
```

## powersocket

The powersocket interface is used for smart power sockets and just extends the simple power interface.

```json
{
  "extends": "power"
}
```

See also: [power](#power)

## powerswitch

The powerswitch interface is used for smart power switches and just extends the simple button interface. Use this for switches that can be on or off.

```json
{
  "extends": "button",
  "states": [
    {
      "name": "power",
      "type": "bool"
    }
  ]
}
```

See also: [button](#button)

## presencesensor

The presence sensor interface provides information whether a certain thing, for instance a human person, a tracked animal, a tracked mobile phone or smart watch is currently present. Additionally it gives information about the last time the tracked thing has been seen.

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "isPresent",
      "type": "bool"
    },
    {
      "name": "lastSeenTime",
      "type": "int",
      "unit": "UnixTime"
    }
  ]
}
```

See also: [sensor](#sensor)

## pressuresensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "pressure",
      "type": "double",
      "unit": "MilliBar"
    }
  ]
}
```

See also: [sensor](#sensor)

## sensor

```json
{}
```

## shufflerepeat

Devices/services supporting this interface can control reproduction flow. E.g. a media controller, but could also be used by light scenes or other workflows

```json
{
  "states": [
    {
      "name": "shuffle",
      "type": "bool",
      "writable": true
    },
    {
      "name": "repeat",
      "type": "QString",
      "allowedValues": [
        "None",
        "One",
        "All"
      ],
      "writable": true
    }
  ]
}
```

## shutter

```json
{
  "extends": "simpleclosable"
}
```

See also: [simpleclosable](#simpleclosable)

## simplebutton

Deprecated - Use button instead.

```json
{
  "extends": "button"
}
```

See also: [button](#button)

## simpleclosable

```json
{
  "actions": [
    {
      "name": "open"
    },
    {
      "name": "close"
    }
  ]
}
```

## simplemultibutton

Deprecated - Use multibutton instead

```json
{
  "extends": "multibutton"
}
```

See also: [multibutton](#multibutton)

## smartlock

The smartlock interface is used for locks which can be opened digitally. The simplest form is a door opener which just unlatches the door lock for a few seconds so a person can enter. Implement the unlatch action and set the state to "unlatching" while opening. Set the state back to "locked" when done. More advanced devices might also allow keeping a door unlatched or distinguish between locked and unlocked. Fully electric doors might even support opening and closing the entire door by combining this interface with the "simpleclosable" interface.

```json
{
  "states": [
    {
      "name": "state",
      "type": "QString",
      "allowedValues": [
        "locked",
        "locking",
        "unlocked",
        "unlocking",
        "unlatched",
        "unlatching"
      ]
    }
  ],
  "actions": [
    {
      "name": "unlatch"
    }
  ]
}
```

## smartmeter

This interface is used for things that can monitor energy consumption/production. This interface is the base for smartmeter things. Actual things will most likely want to use one of the extending interfaces like smartmeterconsumer and/or smartmeterproducer instead.

```json
{}
```

## smartmeterconsumer

A smartmeterproducer can monitor total energy consumed by this thing.

```json
{
  "extends": "smartmeter",
  "states": [
    {
      "name": "totalEnergyConsumed",
      "type": "double",
      "unit": "KiloWattHour"
    }
  ]
}
```

See also: [smartmeter](#smartmeter)

## smartmeterproducer

A smartmeterproducer can monitor total energy produced by this thing.

```json
{
  "extends": "smartmeter",
  "states": [
    {
      "name": "totalEnergyProduced",
      "type": "double"
    }
  ]
}
```

See also: [smartmeter](#smartmeter)

## system

This interface is used to mark device classes as system-internal. The user interface will likely hide it.

```json
{}
```

## temperaturesensor

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "temperature",
      "type": "double"
    }
  ]
}
```

See also: [sensor](#sensor)

## thermostat

The thermostat interface describes devices which have a target temperature value and regulate themselves to match that target temperature. Often combined with the power and temperaturesensor interfaces.

```json
{
  "states": [
    {
      "name": "targetTemperature",
      "type": "double",
      "unit": "DegreeCelsius",
      "minValue": "any",
      "maxValue": "any"
    }
  ]
}
```

## useraccesscontrol

```json
{
  "extends": "accesscontrol",
  "states": [
    {
      "name": "users",
      "type": "QStringList"
    }
  ],
  "events": [
    {
      "name": "accessGranted",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        }
      ]
    }
  ],
  "actions": [
    {
      "name": "addUser",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        }
      ]
    },
    {
      "name": "removeUser",
      "params": [
        {
          "name": "userId",
          "type": "QString"
        }
      ]
    }
  ]
}
```

See also: [accesscontrol](#accesscontrol)

## volumecontroller

```json
{
  "extends": "media",
  "actions": [
    {
      "name": "increaseVolume",
      "params": [
        {
          "name": "step",
          "type": "int"
        }
      ]
    },
    {
      "name": "decreaseVolume",
      "params": [
        {
          "name": "step",
          "type": "int"
        }
      ]
    },
    {
      "name": "setMute",
      "params": [
        {
          "name": "mute",
          "type": "bool"
        }
      ]
    }
  ]
}
```

See also: [media](#media)

## weather

```json
{
  "states": [
    {
      "name": "weatherDescription",
      "type": "QString"
    },
    {
      "name": "weatherCondition",
      "type": "QString",
      "allowedValues": [
        "clear-day",
        "clear-night",
        "few-clouds-day",
        "few-clouds-night",
        "clouds",
        "overcast",
        "light-rain",
        "shower-rain",
        "thunderstorm",
        "snow",
        "fog"
      ]
    },
    {
      "name": "temperature",
      "type": "double"
    },
    {
      "name": "humidity",
      "type": "int"
    },
    {
      "name": "pressure",
      "type": "double"
    },
    {
      "name": "windSpeed",
      "type": "double"
    },
    {
      "name": "windDirection",
      "type": "int"
    }
  ]
}
```

## windspeedsensor

This interface represents a wind sensor measurment and has the unit [m/s].

```json
{
  "extends": "sensor",
  "states": [
    {
      "name": "windSpeed",
      "type": "double",
      "unit": "MeterPerSecond"
    }
  ]
}
```

See also: [sensor](#sensor)

## wirelessconnectable

This interface should be used for device which have the signal strength available. If the signal is to weak, the thing is not connected any more.

```json
{
  "extends": "connectable",
  "states": [
    {
      "name": "signalStrength",
      "type": "uint",
      "unit": "Percentage",
      "minValue": 0,
      "maxValue": 100,
      "defaultValue": 0
    }
  ]
}
```

See also: [connectable](#connectable)


