"use strict";(self.webpackChunkwifiduck_com=self.webpackChunkwifiduck_com||[]).push([[932],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5665:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Flash ESP8266",description:"How to flash esp_duck",sidebar_position:30},s=void 0,c={unversionedId:"software/esp8266",id:"software/esp8266",title:"Flash ESP8266",description:"How to flash esp_duck",source:"@site/docs/software/esp8266.md",sourceDirName:"software",slug:"/software/esp8266",permalink:"/docs/software/esp8266",draft:!1,editUrl:"https://github.com/spacehuhn/wifiduck.com/blob/main/docs/software/esp8266.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Flash ESP8266",description:"How to flash esp_duck",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Flash ATmega32u4",permalink:"/docs/software/atmega32u4"},next:{title:"Scripting",permalink:"/docs/category/scripting"}},p={},d=[{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Instructions",id:"instructions",level:2},{value:"LED Colors",id:"led-colors",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/VQAzxBefLZo?start=193",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"esp_duck/esp_duck.ino")," with the Arduino IDE"),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Board")," in the ",(0,i.kt)("inlineCode",{parentName:"li"},"WiFi Duck ESP8266")," section, select your board. For example ",(0,i.kt)("inlineCode",{parentName:"li"},"NodeMCU 1.0 (ESP-12E Module)"),"."),(0,i.kt)("li",{parentName:"ol"},"Connect the ESP8266 board via USB and select its port under ",(0,i.kt)("inlineCode",{parentName:"li"},"Tools")," > ",(0,i.kt)("inlineCode",{parentName:"li"},"Port")),(0,i.kt)("li",{parentName:"ol"},"Press Upload")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After the first installation, the ESP8266 has to format its memory. So it might take a minute until it's fully operational.  "))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to update the ESP8266 WiFi Duck, you can do that over the air!",(0,i.kt)("br",{parentName:"p"}),"\n","Connect to the ",(0,i.kt)("inlineCode",{parentName:"p"},"wifiduck")," network (the default password is ",(0,i.kt)("inlineCode",{parentName:"p"},"wifiduck"),"). Then in Arduino at ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Port"),", you should now see a network port. Select it and press ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload"),".  "))),(0,i.kt)("h2",{id:"led-colors"},"LED Colors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Blue LED = Connection working"),(0,i.kt)("li",{parentName:"ul"},"Green LED = Device ready")))}m.isMDXComponent=!0}}]);