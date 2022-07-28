console.log('reactivity')
// 单个属性的简易版本
let price = 10, quantity = 2, total = 0;
const dep = new Set(); //存储需要执行的副作用（处理逻辑函数）
const effect = ()=> {
  total = price * quantity
}
// track 用于收集副作用
const track = ()=> {
  dep.add(effect)
}
// trigger 用于触发 执行副作用
const trigger = () => {
  dep.forEach(effect => effect() )
}

track()
console.log(`total1: ${total}`)
trigger()
console.log(`total2: ${total}`)
price = 20
trigger()
console.log(`total3: ${total}`)

