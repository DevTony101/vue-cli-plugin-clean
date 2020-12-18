<template>
  <div>
    <button v-on="$listeners" class="button" v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: "base",
  inheritAttrs: false,
};
</script>

<style scoped>
.button {
  height: 25px;
  width: 75px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
