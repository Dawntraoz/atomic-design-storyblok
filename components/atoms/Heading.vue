<template>
  <component
    :is="tag"
    :class="classes[tag]"
    class="font-title font-bold text-gray-900 pb-4"
  >
    {{ content }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      classes: {
        h1: 'text-6xl',
        h2: 'text-4xl',
        h3: 'text-2xl',
        h4: 'text-xl',
        h5: 'text-lg',
        h6: 'text-base',
      },
    }
  },
}
</script>
