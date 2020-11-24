<template>
  <figure :class="colors[color]" class="mb-6 rounded-full bg-red-500 pt-4">
    <img
      :src="
        imageSrc.replace(
          '//a.storyblok.com',
          '//img2.storyblok.com/250x250/filters:format(jpg)'
        )
      "
      :alt="imageAlt"
      class="rounded-full object-cover"
      width="250"
      height="250"
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
        orange: 'bg-yellow-500',
        purple: 'bg-purple-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
      },
    }
  },
}
</script>
