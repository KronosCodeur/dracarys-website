<!-- Logo.vue -->
<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: "auto",
    },
    height: {
      type: [String, Number],
      default: "auto",
    },
  },
};
</script>

<!-- Logo.vue -->
<template>
  <img :src="imageUrl" :width="width" :height="height" alt="Logo">
</template>

<style scoped>

</style>
