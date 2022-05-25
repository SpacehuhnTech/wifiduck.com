---
title: 'Project History'
description: 'How the WiFi Duck project evolved.'
sidebar_position: 21
---

## WiFi Ducky

In 2017 I released WiFI Ducky, the predecessor of this project.

It also is built with the Atmega32u4 and ESP8266 and has the same goal of making BadUSB scripting easier. 
But it had some limitations. For example, the STRING function had a maximum length, and it didn't have proper support for other keyboard layouts.

The web interface design wasn't the best of my work either.
![WiFi Ducky Web Interface](/img/ducky_webinterface.jpg)

I used an Arduino Leonardo and NodeMCU to build the first prototype.
![WiFi Ducky Prototype using Arduino Leonardo and NodeMCU](/img/ducky_prototype.jpg)

But it didn't take me long until I soldered together my own small BadUSB gadget.

![WiFi Duckify Soldered gadget](/img/ducky_soldered.jpg)

This inspired the Logo, which I still use for this project today:

<img src='/img/logo.png' alt='WiFi Duck Logo' width='400'/>
<br />

Seytonic even featured the project in a video back then:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Utq4C9S3-uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can still find the old project files on Github: https://github.com/spacehuhn/wifi_ducky

## WiFi Duck

In 2019 I decided to update the project. I designed a new web interface, added a terminal, fixed some performance issues, added support for multiple keyboard layouts, and documented it properly. It took me months to complete, but it was worth the effort.
Because I had rewritten the entire codebase from scratch, I decided to release it as a new project. 

So in November 2019 I finally released WiFi Duck:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sSJuGXd8QRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MalDuino W
About a year later, in 2020, I collaborated with Seytonic to bring you the MalDuino W. 
It's a more professional implementation of the WiFi Duck with Maltronics branding.
But if you purchase it, a small portion will go towards maintaining this and other open-source Spacehuhn projects.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qs9gERSV-bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Duckify & Online Course
In 2022 I released my first online course [learnbadusb.com](https://learnbadusb.com). It's about BadUSBs and is mainly aimed at beginners. It also includes tutorials for the WiFi Duck, but the knowledge can be applied to BadUSBs in general.
Together with the course, I also released [Duckify](https://duckify.huhn.me). Of course, it doesn't replace the WiFi Duck, but it's another great way to make BadUSBs easily.

## Future
I plan to make another WiFi BadUSB based on newer hardware to make it more accessible. Sadly, connecting two boards as required right now introduces a lot of problems. Unfortunately, the silicon shortage has made working on new hardware projects more difficult.