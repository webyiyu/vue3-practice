var VueReactivity = (() => {
  // packages/reactivity/src/index.ts
  console.log("reactivity");
  var price = 10;
  var quantity = 2;
  var total = 0;
  var dep = /* @__PURE__ */ new Set();
  var effect = () => {
    total = price * quantity;
  };
  var track = () => {
    dep.add(effect);
  };
  var trigger = () => {
    dep.forEach((effect2) => effect2());
  };
  track();
  console.log(`total1: ${total}`);
  trigger();
  console.log(`total2: ${total}`);
  price = 20;
  trigger();
  console.log(`total3: ${total}`);
})();
//# sourceMappingURL=reactivity.global.js.map
