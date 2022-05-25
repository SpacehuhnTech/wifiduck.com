---
title: 'DSTIKE WiFi Duck'
description: 'A custom-designed development board by Travis Lin.'
image: 'img/dstike.png'
sidebar_position: 20
---

import LinkButton from '../../components/LinkButton'

<img alt="DSTIKE WiFi Duck" src="/img/dstike.png" width="400" />


A custom-designed development board by [Travis Lin](https://dstike.com).  

➕ Can be flashed over the air and manually using the dip switches.  
⚠️ Might require you to install the latest firmware to make it work.  
❤️ Every purchase supports this project and other open-source Spacehuhn projects!

<LinkButton 
  text='Buy Now'
  link='https://dstike.com/collections/frontpage/products/dstike-wifi-duck'
/>

## Additional Documentation

:::info
Watch the "How to Update Tutorial" here: https://youtu.be/e3-nsOjclsY
:::

The 8-bit DIP switch makes it easy for you to access the Atmega32u4 or ESP8266 independently if you ever need to reflash them.  

| Mode | Atmega32u4 | ESP8266 | DIP-switch | Image |
| --- | --- | --- | --- | --- |
| Default Operating Mode | USB | On | 10101101 | <img alt="dstike wifi duck work mode" src="/img/dstike_normal.jpg" height="50px" /> |
| Atmega32u4 Flash Mode | USB | Off |10101010 | <img alt="dstike wifi duck atmega mode" src="/img/dstike_atmega.jpg" height="50px" /> |
| ESP8266 Flash Mode | Off | USB | 01011101 | <img alt="dstike wifi duck esp8266 mode" src="/img/dstike_esp8266.jpg" height="50px" /> |