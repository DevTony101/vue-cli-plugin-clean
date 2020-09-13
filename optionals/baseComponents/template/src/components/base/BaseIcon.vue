<template>
  <svg>
    <use v-bind="{ 'xlink:href': source }" />
  </svg>
</template>

<script>
  export default {
    name: "BaseIcon",
    props: {
      icon: {
        type: String,
        required: true,
      },
    },
    computed: {
      source: function() {
        return `/icons.svg#${this.icon}`;
      },
    },
  };
</script>