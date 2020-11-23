<template>
  <header class="py-6">
    <nav class="container flex justify-between">
      <nuxt-link to="/">
        <Heading tag="h2" content="Blokim" />
      </nuxt-link>
      <LinkList class="flex py-2 space-x-12" :links="links" />
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    links() {
      return [
        {
          link: this.localePath({
            name: 'slug',
            params: { slug: 'our-services' },
          }),
          content: this.$t('services'),
        },
        {
          link: this.localePath({
            name: 'slug',
            params: { slug: 'our-team' },
          }),
          content: this.$t('team'),
        },
      ]
    },
  },
}
</script>
