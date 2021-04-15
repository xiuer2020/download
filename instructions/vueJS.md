# 安装
# CDN引入
开发模式: https://cdn.jsdelivr.net/npm/vue/dist/vue.js
生产模式: https://cdn.jsdelivr.net/npm/vue@2.6.12
原生ES5 Modules:  https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js

# npm安装
npm install vue -S

# API
{{data}}
<!-- 声明式渲染 -->
# 条件渲染
<Dom v-if="data"></Dom>
<Dom v-else="data"></Dom>

<Dom v-for="data"></Dom>
<!-- 循环 -->
<Dom @event="eventHandle"></Dom>
<!-- 事件 -->
<Dom v-html="data"></Dom>
<!-- 输出真正的 HTML -->
<Dom :attr="data"></Dom>
<!-- 使用响应式数据 -->
<Dom>{{JSExpr}}</Dom>
<!-- 使用js表达式 expr: 表达式 -->
<Dom :[data]="data"></Dom>
<!-- 使用动态参数 -->


<Dom>slot</Dom>


data: Object/Function
<!-- 数据 -->
methods: Object
<!-- 方法 -->

# 生命周期
1)[beforeCreate] [无参数] [可以获取this]
<!-- 创建前 初始化事件和生命周期 -->
域名 https://blog.csdn.net/yangkaige111/article/details/84349333
2)created
<!-- 创建后 注入和反应性 -->
域名 https://blog.csdn.net/yangkaige111/article/details/84349333
3-1)
3-2)通知vm.$mount(el)
4-1)beforeMount
<!-- 被挂载前 编译模板进渲染函数 -->
4-2)beforeMount
<!-- 被挂载前 编译el作为模板 -->
5)mouted
<!-- 挂载后 用它创建实例并替代el -->
6-1)beforeUpdate
<!-- 数据更新前 -->
6-1-1)updated
<!-- 数据更新后 -->
6-2)beforeDestroy
<!-- 实例销毁前 -->
6-2-1)destroyed
<!-- 实例销毁 拆卸观察者 子组件 和 事件监听器 -->

#　路由
[1]前置钩子
[2]

# 组件内的守卫
[1]beforeRouteEnter([to[, from[, next]]])
[1-1]在渲染该组件的对应路由被 [confirm] 前调用
[1-2]不能获取[组件实例] `this` 因为当守卫执行前，组件实例还没被创建
[1-3]可以通过传一个回调给 [next]来访问组件实例
[2]beforeRouteUpdate (2.2 新增)
[3]beforeRouteLeave
[3-1]导航离开该组件的对应路由时调用
[3-2]能获取[组件实例]






# 组件
Vue.component(componentName, {
  template: '<Dom>content</Dom>'[,
  props: Array
  ]
})
<!-- 全局注册 -->

<Component></Component>



# api
[1][computed]的[set]方法的[参数1]为[当前组件的实例对象]
[2][computed]的[get]方法的[参数1], [参数2]分别为[computed属性]的[新值], [旧值]


# 源码
1：Vue的本质：
其实就是一个用[Function实现的Class]，通过它的原型[prototype]以及它本身[扩展]的一系列的[方法]和[属性]，所以一般我们会在[main.js]中会先[new Vue]一个实例对象出来，否则会报错warn('Vue is a constructor and should be called with the new keyword')

2：核心思想：[数据驱动]
所谓的数据驱动，是指[视图]是由[数据]驱动生成的，对视图的修改，[不再直接操作]DOM，而是通过[修改数据]。我们所关心的只是数据的修改，DOM变成了数据的映射。

3：[初始化]主要干的几件事情
[合并配置]，[初始化生命周期]，[初始化事件中心]，[初始化渲染]，[初始化 data、props、computed、watcher]

4：new Vue的时候做的事情
做了一层[initState()]的方法，给设置了[data]属性，会执行[getData()]方法，这里会先对data进行判断，是不是一个function，代码如下

export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  }
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
function initData (vm: Component) {
  let data = vm.$options.data
  // 这里判断data是不是一个function
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {}
  if (!isPlainObject(data)) {
    data = {}
    // 会报错给我们我们data未初始换成一个对象的错误
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    )
  }
注意：在循环遍历对象属性时，会对props和data进行一层判断，二者不能重名，因为最后都会挂载到vm对象上，然后对vm对象进行一层proxy代理，下面的代码很重要

 // proxy data on instance
  const keys = Object.keys(data)
  const props = vm.$options.props
  const methods = vm.$options.methods
  let i = keys.length
  while (i--) {
    const key = keys[i]
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          `Method "${key}" has already been defined as a data property.`,
          vm
        )
      }
    }
    if (props && hasOwn(props, key)) {
      //会报props和data重名一样的警告
      process.env.NODE_ENV !== 'production' && warn(
        `The data property "${key}" is already declared as a prop. ` +
        `Use prop default value instead.`,
        vm
      )
    } else if (!isReserved(key)) {
      // 进行数据代理操作
      proxy(vm, `_data`, key)
    }
  }
// 将vm对象用_data进行代理，收集和触发更新依赖
proxy(vm, `_data`, key)
export function proxy (target: Object, sourceKey: string, key: string) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  }
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}
这里的proxy,通过Object.defineProtery可以做到给原型去做代理，get()方法收集依赖、set()方法去触发更新，所以比如在mounted()时，例如打印一个console.log(this.messags)和console.log(this._data.message)是一样的结果，实际上访问的就是vm._data.message

接着el设置了之后，进行mount函数处理，即mount钩子函数

if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
    
5：Vue.prototype.$mount函数中，说明的几个点
Vue[不能挂载到body或html]这样的根节点上，一般都用div嵌套包括起来，会被覆盖，Vue2.0版本中，所有的vue组件渲染最终都需要rendr方法，不论写的是el或者template属性，最终都会转换陈render方法，即"在线编译的过程"

// 原型上添加$mount方法
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  // 若el挂载到body或者html上会报如下警告
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }
 const options = this.$options
  // resolve template/el and convert to render function
   // 如果是已经render()的话，不必再compile()
  if (!options.render) {
    let template = options.template
    if (template) {
        .....
    }
  }
 // 如果是template模板，需要进行compile解析
 if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile')
      }
  }
// 最后会创建DOM元素，在这里内容进行覆盖，这也是为什么外层一般要有一个父级div包裹它，而不是写在body或html上，实际上template会走一个compileToFunctions的过程
function getOuterHTML (el: Element): string {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    const container = document.createElement('div')
    container.appendChild(el.cloneNode(true))
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions
_render():Vue实例的一个私有方法，它用来把实例渲染成一个虚拟Node,用一个原生的JS对象去描述一个DOM节点，会比创建一个DOM的代价要小很多，这里和react的思想是一样的

onstructor (
    tag?: string, // vNode的标签，例如div、p等标签
    data?: VNodeData,         // vNode上的的data值，包括其所有的class、attribute属性、style属性已经绑定的时间
    children?: ?Array<VNode>, // vNode上的子节点
    text?: string,        // 文本
    elm?: Node,           // vNode上对应的真实dom元素
    context?: Component,  //vdom的上下文
    componentOptions?: VNodeComponentOptions
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.functionalContext = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
  }

  // DEPRECATED: alias for componentInstance for backwards compat.
  /* istanbul ignore next */
  get child (): Component | void {
    return this.componentInstance
  }
}
上面是VNode的初始化，然后Vue它是通过createElement方法创建的VNode

export function createElement (
  context: Component,
  tag: any,
  data: any,
  children: any,
  normalizationType: any,
  alwaysNormalize: boolean
): VNode | Array<VNode> {
// 注意：这里会先进行一层判断，进行属性值前移，该方法可以借鉴在实际项目中
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children
    children = data
    data = undefined
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE
  }
  // _createElement()是它的私有方法，创建成一个VNode,每个 VNode 有 children，children 每个元素也是一个 VNode，这样就形成了一个 VNode Tree
  return _createElement(context, tag, data, children, normalizationType)
}
6：Vue.prototype._update(重要重要)
目的是为了把vNode转换为真实的DOM,_update会再首次渲染和数据更新的时候去调用，核心方法其实是其中的_patch()方法

Vue.prototype._update = function (vnode: VNode, hydrating?: boolean) {
  const vm: Component = this
  const prevEl = vm.$el
  const prevVnode = vm._vnode
  const prevActiveInstance = activeInstance
  activeInstance = vm
  // 创建一个新的vNode
  vm._vnode = vnode
  // Vue.prototype.__patch__ is injected in entry points
  // based on the rendering backend used.
  if (!prevVnode) {
    // initial render
    vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */)
  } else {
    // updates
    // 和之前的vNode,进行diff，将需要更新的dom操作和已经patch的vNode大道需要更新的vNode,完成真实的dom操作
    vm.$el = vm.__patch__(prevVnode, vnode)
  }
  activeInstance = prevActiveInstance
  // update __vue__ reference
  if (prevEl) {
    prevEl.__vue__ = null
  }
  if (vm.$el) {
    vm.$el.__vue__ = vm
  }
  // if parent is an HOC, update its $el as well
  if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
    vm.$parent.$el = vm.$el
  }
  // updated hook is called by the scheduler to ensure that children are
  // updated in a parent's updated hook.
}
看一下_patch里面做了什么

// 定义了生命周期，这些钩子函数
const hooks = ['create', 'activate', 'update', 'remove', 'destroy']

export function createPatchFunction (backend) {
  let i, j
  const cbs = {}

  const { modules, nodeOps } = backend

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = []
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]])
      }
    }
  }

  // ...

  // oldVnode:旧的VNode节点or DOM对象
  // vnode: 执行了_render()之后范湖的VNode的节点
  // hydrating：是否是服务端渲染，因为patch是和平台相关的，在Web和Weex环境下，把VNode映射到平台DOM的方法也是不同(有它自己的nodeOps和modules)
  // removeOnly: 给transition-group用的
  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) invokeDestroyHook(oldVnode)
      return
    }

    let isInitialPatch = false
    const insertedVnodeQueue = []

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true
      // 创建新的节点
      createElm(vnode, insertedVnodeQueue)
    } else {
      const isRealElement = isDef(oldVnode.nodeType)
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        // oldVNode和vnode进行diff，并对oldVnode打patch
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR)
            hydrating = true
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true)
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              )
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode)
        }

        // replacing existing element
        const oldElm = oldVnode.elm
        const parentElm = nodeOps.parentNode(oldElm)

        // create new node
        // createElm的作用：通过传入的VNode去创建真是的DOM元素，并插图到它的父节点中，
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        )

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
         ...
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0)
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode)
        }
      }
    }
    //执行所有created的钩子并把vnodepush到insertedVnodeQueue 中
    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
    return vnode.elm
  }
}
其中对oldVNode和vnode类型判断中有一个sameVnode方法，这个方法很重要，是oldVNode和vnode需要进行diff和patch的前提

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}
注意：insert()方法把DOM插入到父节点中，进行了递归调用，子元素会优先调用 insert，所以整个 vnode 树节点的插入顺序是先子后父

insert(parentElm, vnode.elm, refElm)

function insert (parent, elm, ref) {
  if (isDef(parent)) {
    if (isDef(ref)) {
      if (ref.parentNode === parent) {
        nodeOps.insertBefore(parent, elm, ref)
      }
    } else {
      nodeOps.appendChild(parent, elm)
    }
  }
}
export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
  parentNode.insertBefore(newNode, referenceNode)
}

export function appendChild (node: Node, child: Node) {
  node.appendChild(child)
}
所以在patch的过程中，会有这个问题抛出来

 if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++
        }
        // 忘记注册组件的时候，会经常遇到如下报错，这个刚开始的时候遇到的情况很多
        if (isUnknownElement(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          )
        }
      }
    .....
}
可以看到最终返回的是一个patch()方法，赋值给vm.__patch__()方法
在createElm过程中，可以看到如果vnode节点不包含tag的话，它有可能是一个注释或者纯文本节点，可以直接插入到父元素中，递归创建一个完整的DOM并插入到body中。

总结
对数据渲染的过程有了更深的一层理解，从new Vue()开始，创建了一个vue是对象，会先进行init初始化——>$mount()——>compile(若已经是render则该过程不需要)——>render——>创建VNode——>patch过程——>生成真实的DOM

