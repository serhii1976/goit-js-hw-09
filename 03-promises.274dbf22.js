!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc");function a(n){var t=n.position,o=n.delay,r=Math.random()>.3;new Promise((function(e,n){setTimeout((function(){r&&e({position:t,delay:o}),n({position:t,delay:o})}),o)})).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"),{position:"center-center"})})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"),{position:"center-center"})}))}({formEl:document.querySelector(".form")}).formEl.addEventListener("submit",(function(n){n.preventDefault();var t=n.currentTarget.elements,o=t.delay,r=t.step,l=t.amount;if(o.value<0||r.value<0||l.value<0)return e(i).Notify.failure("enter the correct values!",{position:"center-top"});for(var u=0;u<l.value;u+=1){a({position:u+1,delay:Number(n.currentTarget.delay.value)+Number(r.value)*u})}}))}();
//# sourceMappingURL=03-promises.274dbf22.js.map