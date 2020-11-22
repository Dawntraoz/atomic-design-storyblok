<template>
  <header v-editable="blok" class="flex flex-col items-center text-center">
    <Heading v-if="blok.subtitle" tag="h5" :content="blok.subtitle" />
    <Heading v-if="blok.title" tag="h2" :content="blok.title" />
    <Paragraph
      class="text-gray-600 md:text-lg max-w-2xl md:pt-2"
      :content="blok.intro"
    />
  </header>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
}
</script>
