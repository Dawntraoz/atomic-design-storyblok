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
        { link: '/en/blog', content: 'Blog' },
        { link: '/en/our-services', content: 'Our services' },
      ]
    },
  },
}
</script>
