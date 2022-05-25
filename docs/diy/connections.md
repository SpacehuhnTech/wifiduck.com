---
title: 'Connections'
sidebar_position: 20
---

### Connections

A map of pins that need to be connected.  

| ESP8266 | Atmega32u4 |
| ------- | ---------- |
| `D1` alias `GPIO 5` | `3` alias `SCL` |
| `D2` alias `GPIO 4` | `2` alias `SDA` |
| `GND` | `GND` |

Ideally, you want the Atmega32u4 to power the ESP8266, so it can run on **one** USB connection, instead of having to always plug in both.  
To share power between both chips, you need a voltage regulator that takes 5V and turns it into 3.3V.  
That's because USB runs on 5V, but the ESP8266 only takes 3.3V. Luckily most development boards have such a regulator on board.  
**DO NOT CONNECT ESP8266 VCC to the ATMEGA32u4 VCC**, it will kill the ESP826. Instead look for the `5V` or `VIN` pin on your dev board, as those will be connected to the regulator.  

| ESP8266 Dev Board |      Atmega32u4      |
| ----------------- | -------------------- |
| `5V` or `VIN`     | `RAW`, `5V` or `VIN` |

To add a Neopixel (WS2812b) LED:  

| Atmega32u4 | Neopixel LED |
| ---------- | ------------ |
| `7`* | `DI` alias `Data`, `In` |
| `5V` alias `VCC` | `5V` alias `VCC` |
| `GND` | `GND` |

\* The Data pin can be changed later on in the software, pin 7 is just an example.  

![Example of a DIY build using a Wemos d1 mini, a Pro Micro and a Neopixel LED](/img/diy_example.jpg)
