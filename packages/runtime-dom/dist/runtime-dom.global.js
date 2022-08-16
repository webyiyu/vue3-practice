var VueRuntimeDom = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };

  // packages/runtime-dom/src/nodeOps.ts
  var nodeOps = {
    createElement(element) {
      return document.createElement(element);
    },
    createText(text) {
      return document.createTextNode(text);
    }
  };

  // packages/runtime-dom/src/patchProp.ts
  var patchProps = {};

  // packages/runtime-dom/src/index.ts
  console.log("runtime-dom");
  var node = __spreadValues({ patchProps }, nodeOps);
  console.log(node);
})();
//# sourceMappingURL=runtime-dom.global.js.map
