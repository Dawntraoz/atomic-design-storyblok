<template>
  <article
    v-editable="blok"
    role="article"
    class="flex flex-col items-center justify-center"
  >
    <Picture
      :color="blok.color"
      :image-src="blok.picture.filename"
      :image-alt="blok.picture.alt"
    />
    <Heading tag="h4" :content="blok.name" class="font-text" />
    <Paragraph class="text-md text-gray-500" :content="blok.job_title" />
  </article>
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
