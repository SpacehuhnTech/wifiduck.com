"use strict";(self.webpackChunkwifiduck_com=self.webpackChunkwifiduck_com||[]).push([[612],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3153:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Basics",description:"How BadUSB a script looks like.",sidebar_position:10},p=void 0,c={unversionedId:"scripting/basics",id:"scripting/basics",title:"Basics",description:"How BadUSB a script looks like.",source:"@site/docs/scripting/basics.md",sourceDirName:"scripting",slug:"/scripting/basics",permalink:"/docs/scripting/basics",draft:!1,editUrl:"https://github.com/spacehuhn/wifiduck.com/blob/main/docs/scripting/basics.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Basics",description:"How BadUSB a script looks like.",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Scripting",permalink:"/docs/category/scripting"},next:{title:"Functions",permalink:"/docs/scripting/functions"}},s={},d=[{value:"Basic rules:",id:"basic-rules",level:2},{value:"Example Script:",id:"example-script",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"WiFi Duck's script language is compatible with Ducky Script. However, some functions and keys were added or modified.\nYou can find a great Ducky Script quick reference ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hak5.org/usb-rubber-ducky-1/the-ducky-script-language/ducky-script-quick-reference"},"at docs.hak5.org"),".")),(0,i.kt)("h2",{id:"basic-rules"},"Basic rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A single space separates keys"),(0,i.kt)("li",{parentName:"ul"},"All keys as part of the same line get pressed and released simultaneously"),(0,i.kt)("li",{parentName:"ul"},"To write text, use the ",(0,i.kt)("inlineCode",{parentName:"li"},"STRING")," function"),(0,i.kt)("li",{parentName:"ul"},"Upper and lower case matters!")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Example"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"WINDOWS R")),(0,i.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING Hello World")),(0,i.kt)("td",{parentName:"tr",align:null},'Write "Hello World"')))),(0,i.kt)("h2",{id:"example-script"},"Example Script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"REM Hello World Example Script\nDEFAULTDELAY 200\nDELAY 2000\nGUI R\nSTRING notepad\nENTER\nSTRING Hello World!\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Line"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REM This is a comment")),(0,i.kt)("td",{parentName:"tr",align:null},"Comment something.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DEFAULTDELAY 200")),(0,i.kt)("td",{parentName:"tr",align:null},"Set the default delay between each line to 200 milliseconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DELAY 2000")),(0,i.kt)("td",{parentName:"tr",align:null},"Wait 2 seconds.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"GUI R")),(0,i.kt)("td",{parentName:"tr",align:null},"Press the Windows key and the R key simultaneously to open the run window.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING notepad")),(0,i.kt)("td",{parentName:"tr",align:null},'Type "notepad".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ENTER")),(0,i.kt)("td",{parentName:"tr",align:null},"Press enter key to launch the Windows Notepad application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING Hello World!")),(0,i.kt)("td",{parentName:"tr",align:null},'Type "Hello World!" into the newly opened notepad window.')))))}m.isMDXComponent=!0}}]);