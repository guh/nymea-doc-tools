---
id: features
title: Features
---

## Supported platforms

### nymea:core platform support

* Ubuntu Core (Snappy)
    * Vendor can control updates to the users for improved reliability and predictability
* Debian/Ubuntu based systems (e.g. Raspberry Pi, BeagleBone black)
    * Recommended for community edition (tinkerers) and developer workstations
* Yocto
    * Recommended for products

### nymea:app platform support

* nymea:app is written in Qt and supports all platforms supported by Qt natively (better performance than WebApps, more fluid UX).
   * Continuous integration releasing updates to:
      *   iOS
      *   Android
      *   Windows
      *   macOS
      *   Linux Desktop
      *   Ubuntu Phone
*   Other proven setups (experimental/tech previews)
      *   Kiosk: Native application suited for wall-mounted panels, kiosks and similar.

## nymea:cloud integration

* Remote connection
* Push-notifications
    * Available on Android and iOS
* Alexa, Google Assistant, IFTTT coming soon ...
* IoT device services
    * Integrated webserver
        * Serves nymea-internal services (e.g. debug interface, see below)
        * Can host one or more 3rd Party websites (e.g. vendor related web services, user defined websites)
    * Integrated MQTT Broker
        * Can act as a MQTT server/broker
        * Can join other MQTT broker networks as a client
    * Network Discovery 
        * ZeroConf supported
        * UPnP supported

* Network connectivity
    * Ethernet
        * Autoconfiguring via DHCP
    * WiFi Setup
        * Integration of BerryLan for end-user friendly WiFi configuration over Bluetooth

### Connection interfaces

*  API available on interfaces
        * TCP/JSONRPC
        * WebSockets/JSONRPC
* Encryption
        * Plaintext connection supported
    * SSL: Every channel supports encryption and host verification using SSL
* Authentication modes
    * No authentication: nymea can be configured to be openly available in the local network
    * User/Password: Username and password authentication can be enabled
    * Push-Button: For better user experience clients can authenticate via PushButton (Hardware support required)
* Remote connection
    * nymea:core accessible from anywhere with end-user friendly setup powered by nymea:cloud.
    * No Port forwarding setup in firewall required.

### Supported device categories

* Extended support for known device classes
    * Access control (fingerprint readers, keycards etc)
    * Awnings, blinds, shutters
    * Battery powered devices (support for battery alert states)
    * Buttons/switches
    * Lights (simple, dimmable, color)
    * Power sockets
    * Smart meters
    * Doors, gates (garage gates etc)
    * Sensors (humidity, temperature, moisutre, pressure, light, ...)
    * Media (controlling media devices)
    * Alerts/notifications (send alerts e.g. low battery, intruder detection)
    * Weather services
    * Operating system (allows nymea controlling the system it runs on e.g. trigger updates)
    * Any other device/service can be integrated with flexible and generic states/events/actions

### Rules

* Rules can be defined to add smart behavior to devices/services
    * Rules are triggered by state changes and events
       * By a single device/service (e.g. sensor X reports value Y)
       * By a category (e.g. Any of my devices runs out of battery)
       * Rules evaluate further state in the system
       * Rules change device states or trigger actions on devices
       * On a single or on multiple selected device/service (e.g. turn on light 1 and light 3)
       * On a category of devices/services (e.g. close all gates)
       * Rules can be marked as scenes
       * Scenes can be triggered 
       * Create a scene by making a rule executable so it can be triggered by a client

* Examples:
    * Event based Actions - On sunrise open the blinds
    * Actions triggered on State changes - Whenever the doorlock state changes send a notification
    * Action triggered by a certain state value - When door lock is closed activate the alarm  
    * Exit actions - When door lock is not locked any more, deactivate the alarm.
    * Time triggered Actions - Every Tuesday and Thursday turn on the hot tub heating at 4p.m and turn it off at 8 p.m
    * Device type based actions - On button pressed turn all lights off
    * Value takeover - If message received send a push-notification with the content in the text body.
    * Example Nuimo turning knob turning status linked to the hue brightness
    * Various combination - Combine time frames with state values and events to trigger multiple actions.
    * Rule Active/Inactive - For example a irrigation rule doesn't have to be deleted rather set inactive when not needed

### Tags 

* Tags can be added to all things and rules 
    * Group devices by rooms, buildings etc...
    * Tag devices/services as favorites

### Debugging/troubleshooting:

* An optional debug webinterface for easy troubleshooting, debugging and filing support requests
    * Allows to get all information, configuration and logs of the system
    * Sophisticated debug log system (Turn on/off debugging of individual parts of the system)

### Developer support

* SDK
    * Qt SDK (QtCreator, QDoc)
    * nymea QtCreator Wizard integration for easy plugin development
    * All standard C++ development/debugging/profiling tools are supported
* Fully documented
    * [https://doc.nymea.io](https://doc.nymea.io)
    * [https://forum.nymea.io](https://forum.nymea.io)
    * Supported hardware layers
    * Hardware/Protocol abstraction layers for easy plugin development available
       * Bluetooth
       * NFC 
       * CoaP
       * 443 Mhz radio
       * WiFi/Ethernet/Internet connected devices/services (e.g. HTTP REST APIs usable with minimal code effort)
       * ZigBee (WIP)
       * MQTT
       * Any other transport protocols can be used hand-crafted in a plugin
       * All libraries available in Linux available to use
* Plartforms
    * nymea:core development supported on Linux (Linux VM on other systems can be used)
    * nymea:app development supported on all Platforms supported by Qt.

### Log Database
 
* Every state, action and event is logged wihtin a database that is setup automatically with the nymea isntallation.
* State initialization - on restart of nymea the states can be configured to load the latest state before shutdown
* Database exchangeable - mySQL ....
* Filter for device types
* Filter for a certain amount of entries
* Filter for entries in a given timeframe
* Filter for a dedicated device

