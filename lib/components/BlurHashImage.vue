<template>
  <div
    style="position: relative"
    :style="[{ paddingBottom: computedRatio }, cssVars]"
  >
    <transition-group
      mode="in-out"
      name="fade"
      style="
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      "
    >
      <BlurHash
        v-show="!imageLoaded"
        key="canvas"
        :hash="hash"
        :width="width"
        :height="height"
        :punch="punch"
        style="
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        "
      />
      <img
        v-show="imageLoaded"
        key="image"
        :src="src"
        v-bind="$attrs"
        style="
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        "
        @load="onLoaded"
      >
    </transition-group>
  </div>
</template>

<script>
import BlurHash from './BlurHash.vue'
import { parseNumber, percentRatio } from './utils'
export default {
  components: {
    BlurHash
  },
  props: {
    hash: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 128
    },
    height: {
      type: [Number, String],
      default: 128
    },
    punch: {
      type: Number,
      default: 1
    },
    src: {
      type: String,
      required: true
    },
    transitionDuration: {
      type: Number,
      default: 500
    }
  },
  data () {
    return {
      imageLoaded: false
    }
  },
  computed: {
    computedRatio: {
      get () {
        return percentRatio(parseNumber(this.height), parseNumber(this.width))
      }
    },
    cssVars: {
      get () {
        return {
          '--transition-duration':
            this.transitionDuration > 0
              ? `${this.transitionDuration / 1000}s`
              : 'none'
        }
      }
    }
  },
  methods: {
    onLoaded () {
      this.imageLoaded = true
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-duration);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
