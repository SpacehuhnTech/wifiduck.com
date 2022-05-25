---
title: 'Arduino Setup'
description: 'How to install the Arduino board packages.'
sidebar_position: 10
---

## Video Tutorial
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VQAzxBefLZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prepare Arduino IDE

1. Download and install the [Arduino IDE](https://www.arduino.cc/en/main/software)
2. Start the Arduino IDE and open `File` > `Preferences`
3. At "Additional Board Manager ULRs" add this URL:  
`https://raw.githubusercontent.com/SpacehuhnTech/arduino/main/package_spacehuhn_index.json`
4. Go to `Tools` > `Board` > `Board Manager`, search for `wifi duck` and install `WiFi Duck AVR Boards` and `WiFi Duck ESP8266 Boards`
5. [Download](https://github.com/spacehuhn/WiFiDuck/archive/master.zip) and extract this repository

## Drivers
If your computer isn't detecting the ESP8266, you're probably missing the drivers. 
Try installing these:  
- :floppy_disk: [CP2102](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
- :floppy_disk: [CH340](https://sparks.gogo.co.nz/ch340.html)