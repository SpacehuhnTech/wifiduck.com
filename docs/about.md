---
sidebar_position: 1
title: 'About'
---

# About

<!-- Logo -->
<img src='/img/logo.png' width='200' alt='WiFi Duck Logo' />
<br />
<br />

<!-- Text -->
WiFi Duck is an open-source tool to test keystroke injection attacks and learn about BadUSBs.  

* Easy to use and DIY-able (with ATmega32u4 & ESP8266)
* Connect via WiFi
* Save and run BadUSB scripts through a simple web interface
* No need to compile your scripts or copy them onto a micro SD card
* Great for quickly developing new scripts and testing them.

<!-- Buttons -->
<a href='https://ko-fi.com/G2G75FA4V' target='_blank'>
  <img height='36' style={{border:0,height:'36px'}} src='/img/kofi_button.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>
&nbsp;
<a href='https://discord.com/invite/238wu8g'>
  <img height='36' style={{border:0,height:'36px'}} src='/img/discord_button.png' alt='Discord Server button'/>
</a>

<br />

## Usage

![Using WiFi Duck Usage Showcase](/img/showcase.gif)

1. Plug WiFi Duck into the target computer
2. Connect to WiFi (SSID: `wifiduck`, Password: `wifiduck`)
3. Open web interface (URL: `192.168.4.1`)
4. Create, edit, and run your BadUSB scripts

## Hardware

### MalDuino W
<img src='/img/malw.png' width='300' alt='MalDuino W' />

Encased and inconspicuous looking BadUSB by Maltronics.  
Based on the WiFi Duck firmware and works plug and play.

<a href='https://maltronics.com/collections/malduinos/products/malduino-w' target='_blank'>
  <img height='36' style={{border:0,height:'36px'}} src='/img/buy_button.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>

### DSTIKE WiFi Duck
<img src='/img/dstike.png' width='300' alt='DSTIKE WiFi Duck' />

A development board designed for WiFi Duck by Travis Lin.

<a href='https://dstike.com/collections/frontpage/products/dstike-wifi-duck' target='_blank'>
  <img height='36' style={{border:0,height:'36px'}} src='/img/buy_button.png' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>

### DIY
<img src='/img/pcbs_soldered.jpg' alt='DIY WiFi Duck' />

You can also build a WiFi Duck yourself!  
You will need an ATmega32u4 and ESP8266 development board. 
The ATmega acts as a USB keyboard, and the ESP8266 hosts the web interface.  


## Web Interface
![Screenshot of WiFi Duck Web Interface](/img/webinterface.jpg)

![Screenshot of WiFi Duck Editor](/img/editor.jpg)
