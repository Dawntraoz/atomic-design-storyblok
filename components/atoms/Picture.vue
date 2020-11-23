<template>
  <figure class="pb-6">
    <img
      :src="
        imageSrc.replace(
          '//a.storyblok.com',
          '//img2.storyblok.com/250x250/filters:format(jpg)'
        )
      "
      :alt="imageAlt"
      :class="colors[color]"
      class="rounded-full border-t-16 object-cover rounded-full"
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
        orange: 'border-yellow-500',
        purple: 'border-purple-500',
        blue: 'border-blue-500',
        green: 'border-green-500',
      },
    }
  },
}
</script>
