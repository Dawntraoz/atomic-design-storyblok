<template>
  <nuxt-link class="hover:text-blue-600 text-gray-500" :to="link">
    {{ content }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
