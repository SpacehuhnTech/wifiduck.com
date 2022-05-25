---
title: 'How it works'
sidebar_position: 20
---

BadUSBs have a programmable chip onboard that can act as a USB keyboard. They abuse the computer's trust in USB keyboards to open a terminal and run commands that can hijack your computer in seconds. 

Keyboard input is trusted because it comes from humans, and humans have full access to the computer. The problem is that a computer doesn't know if the keystrokes it receives come from an actual human using a keyboard or just another computer (BadUSB).

## Keystroke Injection Attack ⌨️

![KeyStroke Injection Attack vizualised](/img/Keystroke-Injection-Attack.jpg)

BadUSBs are programmed to perform keystroke injection attacks by sending a sequence of keystrokes to the target computer. The computer, however, thinks a human typed those and will handle them as such, even though the BadUSB injects them at incredible speeds (over 9000 characters per second).

A BadUSB can install malware or exfiltrate private data depending on the keystroke sequence sent. It can do almost everything you can do on your computer right now.

## Programming

![WiFi Duck Editor](/img/editor.jpg)
BadUSBs are programmed using a simple scripting language to define the sequence of keystrokes you are sending to the target computer. What scripts you write and what they'll do to your computer is up to you. 

On the WiFi Duck, it's easy to test your scripts because you don't have to compile them or load them onto a micro SD card as with other BadUSBs. Instead, you edit and run them from within the web interface. 

You can find the reference to the WiFi Duck scripting language [here](categories/scripting/). 

## Limitations ⛔

While BadUSBs can be very scary, they are not all-powerful. 

They always require physical access to the target device (and their USB ports). For example, someone needs to have access to your computer to plug in a malicious USB device. Or the attacker has to make you plug it in for them. **This is why you should never just plug in an unknown USB device!**

In most cases, it is also required that the target computer is already running and unlocked. That's because most BadUSBs are 'dumb' and just blindly send keystrokes according to their programming. So they can not detect if they are stuck in a password prompt. **And this is why you should always lock your computer!**

## WiFi Duck Implementation 🦆

![DIY WiFi Duck Example](/img/diy_example.jpg)
The WiFi Duck project uses two chips:

* The ATmega32u4 to act as the USB keyboard
* The ESP8266 for providing a WiFi access point and hosting the web interface from which you can control the WiFi Duck.

So if you build a WiFi Duck yourself, you'll need both chips, program them, and connect them. 