---
id: changelog
title: Changelog
---

## nymea Changelog

### V 0.18.0
```text
nymea-zigbee (0.0.4)
   Add assign operator for zigbee security configuration
nymea-mqtt (0.1.3)
   Fix build dependencies
nymea-remoteproxy (0.1.9)
   Fix building in sbuild
   Update copyright
nymea-gpio (1.0.1)
   Update copyright
libnymea-networkmanager (0.2.2)
   Reinitialize nm if the initial properties cannot be loaded during
nymea-networkmanager (0.5.1)
   Update documentation
   Fix building in sbuild
nymea (0.18.0)
   Scriptengine
   Add basic docker files for running nymea in debian
   Add System Time API
   Add discovery mode to userandpassword mock device
   Update company name
   Improve log DB housekeeping performance
   Support units in interfaces
   Update device names when changed by the plugin
   Subscribe to the entire device namespace in nymea:cloud MQTT
   Use a more unique nonce for the remote connection
   Update year and copyright
   Generate a version.h file
   Disconnect all slots of nymea:core on shutdown
   Add Bluetooth media icon
   Qt versions
   Fix crash when removing a connected transport interface
nymea-plugins (0.18.0)
   New Plugin: Tuya cloud
   Boblight: Fix behavior if color is changed very fast
   New plugin: Tado
   New Plugin: Nanoleaf
   HttpCommander: Build with more strict compiler settings
   New Plug-In: OpenUV
   New Plugin: tp-link Kasa
   TexasInstruments: Fix pressure unit for sensortag
   Kodi: Skip link-local IPv6 addresses
   New Plugin: UniFi network controller
   New plugin: Nuki
   New plugin: USB relay
   All Plugins: Fix building in sbuild
   EQ-3: Fix connection to MAX! cube
   Bose SoundTouch: Fix actions and add source browsing
nymea-plugins-simulation (0.5)
   Fix building in sbuild
nymea-plugin-modbuscommander (0.1.2)
   Fix building in sbuild
nymea-plugin-unipi (0.1.2)
   fixed slave address
   Fix building in sbuild
```

### V 0.17.0
```text
nymea-remoteproxy (0.1.7)
   Add option to disable tests during builds
libnymea-networkmanager (0.2.1)
   Set wireless accesspoint to WPA2 and set reconnect forever
   Fix wireless protected flag and add open network connection support
nymea (0.17.0)
   Allow more fine grained notification options
   More complete setup
   Drop old REST server
   Experience plugins
   Add a barcodescanner interface
   Don't load devices if the plugin dropped support for it
   Don't emit EventEmitted for invalid devices
   Threaded log database
   Weaken password requirements a bit
nymea-plugins (0.17.0)
   New Plugin: Tuya cloud
   FlowerCare: Add a refresh rate setting
   Packaging: Fix dpkg clean target
   Simulation: Add a simulated barcode scanner device
   Http commander: Add http server
   DaylightSensor: Update README.md
   dweet.io: Update README
   Kodi: Automatically redetect Kodi when its IP address changes
   Various Plugins: Spelling fixes in README files
nymea-plugins-simulation (0.4)
  No change rebuild
nymea-plugin-modbuscommander (0.1.1)
   Update build dep to min 0.16
nymea-plugin-unipi (0.1.1)
   Fixed neuron extension inputs
   Maintenance update (build with nymea 0.17 and Qt 5.13)
nymea-qtcreator-wizards (0.0.5)
   Update plugin api
```

### V 0.16.0
```text
nymea-mqtt (0.1.2)
    Fix a crash in topic matching.

libnymea-networkmanager (0.1.2)
    Update pkgconfig and include dir path
    Bluetooth LE server

nymea-networkmanager (0.4.1)
    Update pkg-config include for libnymea-networkmanager

nymea-gpio (1.0.0)
    Initial version

nymea (0.16.0)
    Add account interface
    Rework devicemanager and plugin api
    Fix wrong wording of Hertz
    Improve json parse errors
    MQTT hardware resource api updates

nymea-plugins (0.16.0)
    All Plugins: Devicemanager api rework
    Tuya
    Fix hertz wording
    New plugin: Shelly- nymea-plugins-simulation (0.3)
    Update to new devicemanager api- nymea-plugin-modbuscommander (0.1.1)
    New plugin: modbuscommander
    Update to new plugin api- nymea-plugin-unipi (0.1.1)
    Hotfix home path- nymea-zigbee-plugin (0.0.3)
    Temp old path
    Add alertsound
    Update to new plugin api
```

### V 0.15.1

```text
libnymea-networkmanager (0.1.1)
    Add access point functionality
    Update pkgconfig and include dir path

nymea-networkmanager (0.4.1)
    Update pkg-config include for libnymea-networkmanager

nymea-gpio (1.0.0)
    Initial version

nymea (0.15.1)
    Add a powerswitch interface
    Add a doorbell interface
    Add an alert interface
    Fix a debug print to avoid spamming the log- nymea-plugins (0.15.2)
    Denon Plug-In: Add heos devices
    Tasmota: Add support for 3ch devices
    TcpCommander: Fixed input and output device class
    New plug-in: systemmonitor
    PhilipsHue: Make use of the new alert interface
    New plugin: One-Wire
    GPIO Plug-In: add counter device
    Senic: Fixed device clean up on a failed device setup
    Remove Plugin: UniPi- nymea-plugin-modbuscommander (0.1.0)
    New plugin: modbuscommander- nymea-plugin-unipi (0.1.0)
    New Plugin: UniPi- nymea-update-plugin-packagekit (0.3)
    Add support for Debian Buster
```
### V 0.14.0

```text
nymea (0.14.0)
    Bump minimum required TLS version to 1.2
    Add support for device settings
    Move devicemanager implementation out of nymea into libnymea
    Add nymea-plugininfocompiler to replace nymea-generateplugininfo
    Update ZeroConf names when the server is renamed

nymea-plugins (0.15.0)
    All Plugins: Update docs mechanism
    NetworkDetector: Change grace period to be a setting instead of a
    Philips Hue: Add support for the hue indoor motion sensor
    All Plugins: Update according to new DeviceManager API
    Use the new nymea-plugininfocompiler for building
    GenericElements: Fix toggle button writable state

nymea-update-plugin-packagekit (0.2)
    Fix the distro parsing mechanism
    Fix an issue where the Testing repo might appear multiple times.

nymea-system-plugin-systemd (0.2)
    Fix configuration to be a plugin, not a lib

nymea-qtcreator-wizards (0.0.4)
    Update to new plugin info compiler and update plugin.pri file
```

### V 0.13.0

```text
nymea (0.13.0)
    Add navigation pad interfaces
    Fix make lupdate
    Don't rely on NetworkManager to determine the online status
    Fix include installs
    Don't use namespaces in headers in an inheritative way.
    System manager
    Update readme
    Fix loading/saving of params using typeId
    Add new interface closablesensor
    Rename vendor
    Move nymeatestbase into a nymea-testlib to speed up building
    Abstract ZeroConf into a platform plugin
    Add filterByDeviceClass to Devices
    Rename the target in the plugin.pri so plugin devs don't have to do
    Flush client buffers before terminating a connection
    
nymea-plugins
    Removed plugins: Orderbutton, Plantcare and ws2812
    Renamed HTTP commander vendor, fixed segfault on device removed
    Fix serialportcommander
    OpenWeatherMap: Add daylightsensor and allow loading custom API keys
    Update mail notifications plugin
    Depend on pkg-config
    Kodi, AvahiMonitor: Update to new ZeroConf API

nymea-plugins-simulation
    Celsi°s: Add a simulation plugin for the Celsi°s experience

nymea-update-plugin-packagekit
    Initial release.
    Fixes

nymea-system-plugin-systemd
    Initial release.
    Add license
nymea-zeroconf-plugin-avahi
    Initial release.
    First implementation of a avahi platform plugin
```

### V 0.12.0

```text
nymea (0.12.0)
    New Release Mechanism
    Presence Interface
    Crash Report
    KNX Support
    Bulk Notification (cloud UI to send notifications to the consumer)
    Release of nymea in the public Snap Store
    Raspberry Pi Image
    Encryption and Authentication
    Remote Connection
    Push Button Pairing
    Update/Snap Management
    Memory Leak DetectionUser Tags (Location ...)
    Security Configuration
    Push-Notification
    Hardware Plug-Ins
    Clean up plugin JSON-File 

nymea-plugins
    Plug-in template generator   

nymea:app
    Release NYMEA:APP for iOS and Android
    Upload Nymea:App to Android and iOS stores
    Rule templates
    App templates for Philips hue + Color picker
Documentation
    Update developer documentation
```

### V 0.8.0

```text
nymea (0.8.0)
    Tag system
    User authentication
    ZeroConf support
    Remote access
    Basic system settings
```

### V 0.7.0

```text
Add OAuth 2.0
Add parent/child device relation
Add "possible values" for stateType
Add device remove policy (parent/child)
Add DisplayPin mock device
Add more tests
Add more plugins 
CoAP Support
```

### V 0.6.0

```text
Add web socket server
Add UPnP discovery
Add more tests
Add more plugins
Make debug categories dynamic
Add error reporting to REST-API
Add "How to write plugins" documentation
Add execute rule action methods
Add snappy packaging support
Many small bug fixes
```

### V 0.5.0
```text
    Update documentation style
    Add Webserver
    Add REST-API
    Add SSL support
    Add Bluetooth LE support
    Add log filter methods
    Add more plugins
    Many small bug fixes
    Add units
    Add debug categories
    Add CORS support to webserver
```

### V 0.4.0
```text
    Add "Edit" devices method
    Add "Edit" rules method
    Add LogEngine
    Create GuhSettings
    Introduce guhserver namespace
    Improve rule engine
    Add input types
    Add more plugins
    Many small bug fixes
    Add support for "writeable" states in plugin meta data
```

### V 0.3.0
```text
    Add UPnP resource
    Add NetworkAccessManager resource
    Add more plugins
    Add DisplayPin setup method
    Add generateplugininfo precompiler
    Add man page
    Add command line parser
    Many small bug fixes
```

### V 0.2.0
```text
    Load plugins dynamic
    Add more tests
    Add Brennenstuhl support
    Create plugin meta data parser
    Port plugins to JSON description
    Add init script
    Add QtService lib
    Expand mock device
    Add GPIO support
    API notification enable/disable
    Many small bug fixes
    Add documentation
    Add more plugins
```

### V 0.1.0
```text
    Create project structure
    Add debian scripts
    Add server structure
    Add JSON-RPC interface
    Create device manager
    Create rule engine
    Static plugin implementation
    Add RF 433 MHz hardware resource
    Add tests for JSON-RPC
    Add setup methods
    Add create methods
    Add test scripts (bash)
    Add license check
```

### Project start 01.09.2013
