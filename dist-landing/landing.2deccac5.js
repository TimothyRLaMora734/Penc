parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"70rD":[function(require,module,exports) {

},{}],"sdHz":[function(require,module,exports) {
module.exports="move.b3dac9fb.mp4";
},{}],"am0W":[function(require,module,exports) {
module.exports="pinch.25b75264.mp4";
},{}],"CHco":[function(require,module,exports) {
module.exports="swipe.ad957e32.mp4";
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=i(require("fs")),n=i(require("./assets/move.mp4")),t=i(require("./assets/pinch.mp4")),s=i(require("./assets/swipe.mp4"));function i(e){return e&&e.__esModule?e:{default:e}}var d='{\n  "name": "Penc",\n  "version": "0.4.1",\n  "description": "Trackpad oriented window manager for macOS",\n  "main": "",\n  "scripts": {\n    "build:dmg": "appdmg appdmg/appdmg.json build/Penc-$npm_package_version.dmg",\n    "build:landing": "rm -rf dist-landing && parcel build landing/index.html --public-url ./ --out-dir dist-landing && inline-assets dist-landing/index.html dist-landing/index.html",\n    "start:landing": "rm -rf dist-landing && parcel landing/index.html --out-dir dist-landing",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/dgurkaynak/Penc.git"\n  },\n  "author": "Deniz Gurkaynak <dgurkaynak@gmail.com>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/dgurkaynak/Penc/issues"\n  },\n  "homepage": "https://github.com/dgurkaynak/Penc#readme",\n  "dependencies": {\n    "appdmg": "^0.6.0",\n    "browserslist": "^4.7.0",\n    "inline-assets": "^1.4.1",\n    "parcel-bundler": "^1.12.3"\n  }\n}\n',r=JSON.parse(d+""),a={move:n.default,pinch:t.default,swipe:s.default},o=document.getElementById("download-button");o.setAttribute("href","https://github.com/dgurkaynak/Penc/releases/download/"+r.version+"/Penc-"+r.version+".dmg"),o.textContent="Download Penc "+r.version;var c=null,l=!1,u=document.getElementById("showcase-move"),m=document.getElementById("showcase-pinch"),p=document.getElementById("showcase-swipe"),g=document.getElementById("video");function h(e){switch(e){case"move":return u;case"pinch":return m;case"swipe":return p}}function v(e){switch(e){case"move":return"pinch";case"pinch":return"swipe";case"swipe":return"move"}}function w(e){e!=c&&(u.classList.remove("selected"),m.classList.remove("selected"),p.classList.remove("selected"),h(e).classList.add("selected"),c=e,g.src=a[e])}function b(e){w(e),l=!0}function f(){l?g.play():w(v(c))}u.addEventListener("mouseover",b.bind(null,"move")),m.addEventListener("mouseover",b.bind(null,"pinch")),p.addEventListener("mouseover",b.bind(null,"swipe")),g.addEventListener("ended",f),w("move");
},{"fs":"70rD","./assets/move.mp4":"sdHz","./assets/pinch.mp4":"am0W","./assets/swipe.mp4":"CHco"}]},{},["Focm"], null)
//# sourceMappingURL=landing.2deccac5.js.map