// 元素节点的api操作
// 创建元素 创建文本 元素的增删改查 获取父子关系等
export const nodeOps = {
  createElement(element) {
    return document.createElement(element)
  },
  createText(text) {
    return document.createTextNode(text)
  }
}