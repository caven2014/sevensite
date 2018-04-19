"use strict";function arrayify(e){return Array.prototype.slice.call(e)}function chooseCap(e){var t=parseInt(e,10);return environment<t?environment:t}function forceOriginalDimensions(e){return e.hasAttribute("data-no-resize")||(0===e.offsetWidth&&0===e.offsetHeight?(e.setAttribute("width",e.naturalWidth),e.setAttribute("height",e.naturalHeight)):(e.setAttribute("width",e.offsetWidth),e.setAttribute("height",e.offsetHeight))),e}function setSourceIfAvailable(e,t){var r=e.nodeName.toLowerCase(),n=document.createElement("img");n.addEventListener("load",function(){"img"===r?forceOriginalDimensions(e).setAttribute("src",t):e.style.backgroundImage="url("+t+")"}),n.setAttribute("src",t),e.setAttribute(processedAttr,!0)}function dynamicSwapImage(e,t){var r=arguments.length<=2||void 0===arguments[2]?1:arguments[2],n=chooseCap(r);if(t&&n>1){setSourceIfAvailable(e,t.replace(srcReplace,"@"+n+"x$1"))}}function manualSwapImage(e,t,r){environment>1&&setSourceIfAvailable(e,r)}function getImages(e){return e?"function"==typeof e.forEach?e:arrayify(e):"undefined"!=typeof document?arrayify(document.querySelectorAll(selector)):[]}function cleanBgImg(e){return e.style.backgroundImage.replace(inlineReplace,"$2")}function retina(e){getImages(e).forEach(function(e){if(!e.getAttribute(processedAttr)){var t="img"===e.nodeName.toLowerCase(),r=t?e.getAttribute("src"):cleanBgImg(e),n=e.getAttribute("data-rjs");!isNaN(parseInt(n,10))?dynamicSwapImage(e,r,n):manualSwapImage(e,r,n)}})}Object.defineProperty(exports,"__esModule",{value:!0});var hasWindow="undefined"!=typeof window,environment=hasWindow?window.devicePixelRatio||1:1,srcReplace=/(\.[A-z]{3,4}\/?(\?.*)?)$/,inlineReplace=/url\(('|")?([^\)'"]+)('|")?\)/i,selector="[data-rjs]",processedAttr="data-rjs-processed";hasWindow&&(window.addEventListener("load",retina),window.retinajs=retina),exports.default=retina;