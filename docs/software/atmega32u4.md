---
title: 'Flash ATmega32u4'
description: 'How to flash atmega_duck'
sidebar_position: 20
---

## Video Tutorial

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VQAzxBefLZo?start=124" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Instructions

1. Open `atmegaduck/atmega_duck.ino` with the Arduino IDE
2. Under `Tools` > `Board` in the `WiFi Duck AVR` section, select your board. For example, `Sparkfun Pro Micro`.
3. Connect the Atmega32u4 board via USB and select its port under `Tools` > `Port`
4. (Optional: Under `Tools`, you can enable the LED and set its pin. You can also change the USB ID to make it appear as a certain type of keyboard.)
5. Press Upload

## Unbrick Atmega32u4

If you flashed your Atmega32u4 board with the wrong bootloader, it would no longer appear in the port selection after you connect it.  
To solve this, you need to:

1. Connect the reset pin `RST` to ground `GND`. Preferably with a jumper wire because you need to be able to disconnect it quickly.  
2. Open a sketch (`atmegaduck/atmega_duck.ino` or an empty sketch) **Make sure to have the correct board selected under `Tools` > `Board`!**
3. Connect the board with the wire still connected.
4. Press `Upload` and as soon as you see `Compiling...` turn to `Uploading...`, disconnect the wire.  

Now it should flash the sketch together with the correct bootloader.
