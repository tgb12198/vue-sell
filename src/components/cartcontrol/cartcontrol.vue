<template>
  <div class="cartControl">
    <transition name="fade">
      <div class="cart-decrease" v-show="food.count"
           @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="cart-increase icon-add_circle" @click.stop.prevent="addToCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';

export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addToCart (event) {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1);
      } else {
        this.food.count++;
      }
      this.$emit('cartAdd', event.target);// 子组件向父组件传递事件，父组件用@cartAdd接收
    },
    decreaseCart () {
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartControl
    font-size: 0

    .fade-enter, .fade-leave
      opacity: 0
      transform: translate3d(24px, 0, 0)

    .fade-enter-active, .fade-leave-active
      transition: all 0.5s linear

    .cart-decrease
      display: inline-block
      padding: 6px
      /*line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)*/
      opacity: 1
      transform: translate3d(0, 0, 0)

      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
        transform: rotate(0)

      &.fade.enter-active, &.fade-leave-active
        transition: all 0.4s linear

      &.fade-enter, &.fade-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)

        .inner
          transform: rotate(180deg)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      line-height: 24px
      padding: 6px
      text-align: center
      font-size: 14px
      color: rgb(147, 153, 159)

    .cart-increase
      display: inline-block
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)
</style>
