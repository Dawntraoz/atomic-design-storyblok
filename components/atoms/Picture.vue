<template>
  <figure class="pb-6">
    <img
      :src="imageSrc"
      :alt="imageAlt"
      :class="colors[color]"
      class="rounded-full border-t-16 w-64 h-64 object-cover rounded-full"
    />
  </figure>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      colors: {
        orange: 'border-yellow-500',
        purple: 'border-purple-500',
        blue: 'border-blue-500',
        green: 'border-green-500',
      },
    }
  },
}
</script>
