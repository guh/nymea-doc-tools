---
id: first-steps
title: First steps
---


At this point, a working installation of nymea:core should be set up on one device and nymea:app 
should be running on one or more devices such as smartphones or dektop PCs. Please refer to the 
previous sections if any of those isn't installed yet.

## Connecting to the network

The next step is to connect nymea:core to the local network. The recommended way to connect 
nymea:core to the network is by plugging in a LAN cable. However, if you installed nymea:core on a
device without LAN port, or just prefer to use WiFi, nymea offers an easy way to get nymea:core
connected to the network.

### Connecting via LAN cable

Connect the LAN cable to the system running nymea:core. It will automatically obtain the network
configuration via DHCP.

### Connecting via WiFi

Depending whether the system with nymea:core has a display or not, the WiFi can be set up directly
on the nymea:core system, or from another device by provisioning the WiFi credentials to nymea:core
via Bluetooth.

#### Local WiFi setup in nymea:app

If nymea:app is running on the same system as nymea:core, for example on a Raspberry Pi with touch 
screen, the network can be set up directly by entering the *Network settings* in the 
*System Settings* view.

![](/img/documentation/users/setup-wifi.gif)

#### Remote WiFi setup via Bluetooth

If nymea:core is running on a headless system, nymea:app can be used from another device, e.g. a smart phone
or Laptop to configure the WiFi of the nymea:core system by connecting via Bluetooth.

* In nymea:app, open the *Wireless setup* menu and wait for `BT WLAN Setup` to appear in the list.
* Connecto to nymea:core by selecting it from the list.
* Once connected, nymea:core will start scanning for WiFi networks and present the result to nymea:app.
* Select the preferred WiFi from the list and enter the password.
* If everything went well, the nymea:core system is now connected to the WiFi.

![](/img/documentation/users/bt-wifi-setup.gif)


## First setup

Now that nymea:core is connected to the network, it is time to create login credentials to keep the nymea
setup protected. When connecting to a nymea:core system for the first time, it will prompt for a username
and a password.

Enter your email address as username and pick a new password.

![](/img/documentation/users/user-setup.gif)
