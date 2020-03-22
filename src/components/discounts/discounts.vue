<template>
  <div>
    <ul v-if="this.supports" class="supports">
      <li class="support-item" v-for="(item,index) in this.supports" :key="index">
        <span class="icon" :class="classMap[item.type]"></span>
        <span class="text">{{item.description}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    supports: {
      type: Array
    },
    size: {
      type: Number
    }
  },
  data () {
    return {
      iconDesc: ''
    };
  },
  computed: {
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin";
  .support
    .icon
      display: inline-block
      vertical-align: top
      width: 12px
      height: 12px
      margin: 5px 4px 0 0
      background-size: 12px 12px
      background-repeat: no-repeat

      &.decrease
        bg-image('decrease_1')

      &.discount
        bg-image('discount_1')

      &.guarantee
        bg-image('guarantee_1')

      &.invoice
        bg-image('invoice_1')

      &.special
        bg-image('special_1')

    .text
      line-height: 12px
      font-size: 10px

</style>
