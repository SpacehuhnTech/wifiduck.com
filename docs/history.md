---
title: 'History'
description: 'How the WiFi Duck project evolved.'
sidebar_position: 21
---

## WiFi Ducky

In 2017 I released WiFI Ducky. ItÄs the precessor of this project.
It also is built on an Atmega32u4 and ESP8266 with the same goal of making BadUSB scripting easier. 
But it had some limitations. For example the STRING function had a maximum length and it didn't have proper support for other keyboard layouts.

The web interface design wasn't the best of my work either.
![WiFi Ducky Web Interface](/img/ducky_webinterface.jpg)

I used an Arduino Leonardo and NodeMCU to build the first prototype.
![WiFi Ducky Prototype using Arduino Leonardo and NodeMCU](/img/ducky_prototype.jpg)

But it didn't took me long until I soldered together my own small BadUSB gadget.

![WiFi Duckify Soldered gadget](/img/ducky_soldered.jpg)

This inspired the Logo, which I still use for this project today:

<img src='/img/logo.png' alt='WiFi Duck Logo' width='400'/>
<br />

Seytonic even featured the project in a video back then:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Utq4C9S3-uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can still find the old project files on Github: https://github.com/spacehuhn/wifi_ducky

## WiFi Duck

In 2019 I decided to update the project. I gave it a new web interface, added a terminal, fixed some performance issues, added support for multiple keyboard layouts and documented it properly. This project took me months to complete.
And because I had rewritten the entire codebase from scratch, and it had some breaking changes in the way the 2 microcontrollers connect to each other, I decided to release it as a new project. I wanted to ditch the "ducky" name anyway.

So in November 2019 I finally released WiFi Duck:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/sSJuGXd8QRk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MalDuino W
In 2020 I collaborated with Seytonic to bring you the MalDuino W. 
It's a more professionally implementation of the WiFi Duck with Maltronics branding.
But if you purchase it, a small portion will go to me, so I can continue maintaining this and other open-source products.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/qs9gERSV-bY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Duckify & Online Course
Then in 2022 I released my first online course. It's about BadUSBs and mainly aimed at beginners. It also includes tutorials for the WiFi Duck, but the knowledge can be applied to BadUSBs in general.
Together with the course, I also released Duckify. It doesn't replace the WiFi Duck, but it's another great way to make BadUSBs easily. In this case using a Digispark.

[Link to course](https://learnbadusb.com)

[Link to duckify](https://duckify.huhn.me)

## Future
I want to make a new implementation of WiFi Duck using newer hardware that will allow the project to be more accessible. Connecting 2 boards together as it's required right now introduces a lot of problems sadly.