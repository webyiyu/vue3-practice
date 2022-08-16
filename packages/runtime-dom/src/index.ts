console.log('runtime-dom')
import { nodeOps } from './nodeOps'
import { patchProps } from './patchProp'

const node = {patchProps, ...nodeOps}
console.log(node)