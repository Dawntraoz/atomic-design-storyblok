<template>
  <nuxt-link :class="{ 'link-gray': !white, 'link-white': white }" :to="link">
    {{ content }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    white: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.link-gray {
  @apply hover:text-blue-600 text-gray-500;
}
.link-white {
  @apply hover:text-gray-100 text-white;
}
</style>
