<template>
  <div>
    <button
      :style="{ width: wh + 'px', height: ht + 'px' }"
      v-on="$listeners"
      class="button"
      v-bind="$attrs"
    >
      <slot> Submit </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "base",
  inheritAttrs: false,
  props: {
    wh: {
      type: String,
      default: "150",
    },
    ht: {
      type: String,
      default: "25",
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  transition: all 0.2s linear;
}

.button:hover {
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
  box-shadow: 0 2px 12px -5px rgba(0, 0, 0, 0.75);
}

.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}

.button:focus {
  outline: 0;
}
</style>
