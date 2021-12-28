# 一、MVVM

Vue 的设计主要受到MVVM模型的启发，因此在官方文档中经常会使用 `vm` 这个变量名表示组件实例。

接下来给大家介绍一下MVVM，不过，在开始之前可以先给大家简单介绍下MVC设计模式，在MVC设计模式中：

- `M（Mode，模型）`：用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法，“ Model ” 有对数据直接访问的权力，例如对数据库的访问，“Model”不依赖“View”和“Controller”，也就是说， Model 不关心它会被如何显示或是如何被操作。但是 Model 中数据的变化一般会通过一种刷新机制被公布。为了实现这种机制，那些用于监视此 Model 的 View 必须事先在此 Model 上注册，从而，View 可以了解在数据 Model 上发生的改变。（比如：[观察者模式](https://zh.wikipedia.org/wiki/观察者模式)）

- `V（View，视图）`：能够实现数据有目的的显示（理论上，这不是必需的）。在 View 中一般没有程序上的逻辑。为了实现 View 上的刷新功能，View 需要访问它监视的数据模型（Model），因此应该事先在被它监视的数据那里注册。

- `C（Controller，控制器）`：负责转发请求，对请求进行处理。作为 “Modal” 和 “View”交互的桥梁，它处理事件并作出响应，“事件”包括用户的行为和数据 Model 上的改变。

简单理解就是，当数据发生变化，发送通知给控制层刷新视图，同理控制层监听用户操作，当需要修改数据时控制层会通知数据模型刷新数据，这里可以看出，视图层和数据层不直接交互，而是通过控制层实现对接的，那MVVM和MVC类似。

MVVM（ **Model-View-ViewModel** ） 为一种设计模式。

![](IMGS/mvvm.png)

其中：

Model 表示数据模型；

View 表示视图；

ViewModel 负责监听Model中的数据改变并且控制视图的更新，处理用户交互操作，类似于MVC设计模式中的控制器，其本质为一个Vue的实例。

> 提示：**Model** 和 **View** 并无直接关联，而是通过 **ViewModel** 来进行联系的，**Model** 和 **ViewModel** 之间有着双向数据绑定的联系。因此当 **Model** 中的数据改变时会触发 **View** 层的刷新，**View** 中由于用户交互操作而改变的数据也会在 **Model** 中同步。

这种模式实现了 **Model** 和 **View** 的数据自动同步，因此开发者只需要专注对数据的维护操作即可，而不需要自己操作 **DOM**。

# 三、Vue 响应式原理

Vue 数据双向绑定主要是指：**数据变化更新视图，视图变化更新数据**

## 1. @2.x

当一个Vue实例创建时，你可以把一个普通的JavaScript 对象传入 Vue 实例作为 data 选项，vue会遍历data选项的属性，并使用 **Object.defineProperty** 将它们全部转为 getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新。

![](./IMGS/response-yuanli.jpg)

深入理解：

- **监听器 Observer**：对数据对象进行遍历，包括子属性对象的属性，利用 `Object.defineProperty()` 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
- **解析器 Compile**：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
- **订阅者 Watcher**：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。每个组件实例都有相应的 watcher 实例对象，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 setter 被调用时，会通知 watcher 重新计算，从而致使它关联的组件得以更新——这是一个典型的观察者模式
- **订阅器 Dep**：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。

## 2. @3.x

Vue3.x 改用 `Proxy` 替代`Object.defineProperty`，因为Proxy可以直接监听对象和数组的变化，并且有多达13种拦截方法。并且作为新标准将受到浏览器厂商重点持续的性能优化。

**Proxy只会代理对象的第一层，Vue3是怎样处理这个问题的呢?**

判断当前Reflect.get的返回值是否为Object，如果是则再通过reactive方法做代理， 这样就实现了深度观测。

**监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？**

我们可以判断key是否为当前被代理对象target自身属性，也可以判断旧值与新值是否相等，只有满足以上两个条件之一时，才有可能执行trigger。

# 四、生命周期

每个 Vue 实例在被创建之前都要经过一系列的初始化过程，在这个过程中也会运行一些叫做**生命周期钩子**的函数，给予用户机会在一些特定的场景下添加他们自己的代码。

##　@2.ｘ

![](https://v3.vuejs.org/images/lifecycle.svg)

### \> beforeCreate

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

### \> created

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，`$el` 属性目前不可见。 可以在组件的这个期间 **请求数据**，如果是keep-alive组件会被缓存起来，生命周期不会再次触发，如果需要更新数据可以watch当前router变化，如果router是当前组件所在的router则请求数据。

### \> beforeMount

在挂载开始之前被调用：相关的 `render` 函数首次被调用。

### \> mounted

vm.$el 已挂载在文档内，对已有dom节点的操作可以在这期间进行。

### \> beforeUpdate

数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

### \> updated

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

### \> activated

keep-alive 组件激活时调用。

### \> deactivated

keep-alive 组件停用时调用。

### \> beforeDestroy

实例销毁之前调用。在这一步，实例仍然完全可用。

### \> destroyed

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

### \> errorCaptured

当捕获一个来自子孙组件的错误时被调用。

## @3. x

**被替换**

1. beforeCreate -> setup()
2. created -> setup()

**重命名**

1. beforeMount -> onBeforeMount
2. mounted -> onMounted
3. beforeUpdate -> onBeforeUpdate
4. updated -> onUpdated
5. beforeDestroy -> onBeforeUnmount
6. destroyed -> onUnmounted
7. errorCaptured -> onErrorCaptured

**新增的**

新增的以下2个方便调试 `debug` 的回调钩子：

1. onRenderTracked
2. onRenderTriggered



## @代码示例

```vue
<script>
import { 
    defineComponent, 
    onBeforeMount, 
    onBeforeUnmount, 
    onBeforeUpdate, 
    onErrorCaptured, 
    onMounted, 
    onUnmounted, 
    onUpdated 
} from "vue";
export default defineComponent({
  name: 'App',
  setup() {
    console.log('__setup__');
    // lifecircle
    onBeforeMount(() => {
      console.log('__onBeforeMount__');
    });
    onMounted(() => {
      console.log('__onMounted__');
    });
    onBeforeUpdate(() => {
      console.log('__onBeforeUpdate__');
    });
    onUpdated(() => {
      console.log('__onUpdated__');
    })
    onBeforeUnmount(() => {
      console.log('__onBeforeUnmount__');
    })
    onUnmounted(() => {
      console.log('__onUnmounted__');
    })
    onErrorCaptured(() => {
      console.log('__onErrorCaptured__');
    })
    return {}
  }
})
</script>
```









