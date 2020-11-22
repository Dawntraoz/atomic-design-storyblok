<template>
  <ul :class="classes">
    <li v-for="link in links" :key="link.content">
      <Link v-if="!link.external" :link="link.link" :content="link.content" />
      <ExternalLink
        v-else
        :link="link.link"
        :content="link.content"
        :alt="link.alt"
      />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
