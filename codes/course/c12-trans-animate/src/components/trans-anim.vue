<template>
    <div class="content">
        <!-- 示例1 -->
        <p><button type="button" @click="isVisible = !isVisible">CLICK ME</button></p>
        <transition name="slide"
                    @before-enter="beforeEnter">
            <h1 v-show="isVisible">HELLO, WORLD!</h1>
        </transition>

        <!-- 示例2 -->
        <p><button type="button" @click="isShow = !isShow">CLICK ME</button></p>
        <transition name="anim">
            <h1 v-show="isShow">HELLO, WORLD!</h1>
        </transition>

        <!-- 示例3 -->
        <p><button type="button" @click="flag = !flag">CLICK ME</button></p>
        <transition name="custom-classes-transition"
                    enter-active-class="animated jello"
                    leave-active-class="animated hinge">      
            <h1 v-show="flag">HELLO, WORLD!</h1>
        </transition> 

        <!-- 示例4 -->
        <p><input v-model.number="number" type="number" step="100"></p>
        <p>{{animatedNumber}}</p>

        <!-- 示例5 -->
        <!-- <div class="btn-wrap">
            <transition name="slideX" mode="in-out"> 
                <button :key="isEditing" @click="btnClick">
                    {{ isEditing ? 'save' : 'edit'}}
                </button>
            </transition>
        </div> -->
        <!-- 示例6 -->
        <div id="list-demo" class="demo">
            <button @click="shuffle">Shuffle</button>
            <button @click="add">Add</button>
            <button @click="remove">Remove</button>
            <transition-group name="list" tag="p">
                <span v-for="item in items" v-bind:key="item" class="list-item">
                {{ item }}
                </span>
            </transition-group>
        </div>
    </div>
</template>

<script>
// import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
export default {
    name:'TransAnim',
    data(){
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10,
            isEditing: true,
            number: 0,
            tweenedNumber: 0,
            isVisible: true,
            isShow: true,
            flag: true
        }
    },
    methods: {
        shuffle() {
            this.items = _.shuffle(this.items)
        },
        // 随机下标
        randomIndex() {
            return Math.floor(Math.random() * this.items.length);
        },
        add() {
            this.items.push(this.nextNum++);
        },
        remove() {
            this.items.splice(this.randomIndex(), 1);
        },
        btnClick() {
            this.isEditing = !this.isEditing;
        },
        beforeEnter() {
            console.log('过渡进入之前！');
        }
    },
    watch: {
        number(newVal) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newVal });
        }
    },
    computed: {
        animatedNumber() {
            return this.tweenedNumber.toFixed(0);
        }
    }

}
</script>

<style scoped>
.list-move {
  transition: transform 1s;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}


.btn-wrap {
    position: relative;
}
.btn-wrap > button {
    position: absolute;
    left: 50%;
}

.slideX-enter-active,
.slideX-leave-active {
    transition: all .5s linear;
}
.slideX-enter {
    opacity: 0;
    transform: translateX(100px);
}
.slideX-leave-active {
    opacity: 0;
    transform: translateX(-100px)
}


/*动画*/
@keyframes flip {
    from {
        transform: rotateY(0)
    }
    to {
        transform: rotateY(360deg)
    }
}
.anim-enter-active {
    animation: flip .75s linear;
}
.anim-leave-active {
    animation: flip .75s linear reverse;
}

/*CSS*/
.slide-enter-active,
.slide-leave-active {
    transition: all .5s linear;   
}
.slide-leave,
.slide-enter-to {
    transform: translate(0);
    color: #000;
}
.slide-leave-to,
.slide-enter {
    transform: translate(200px);
    color: blue;
}


</style>
