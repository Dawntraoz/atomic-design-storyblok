<template>
  <header class="py-6">
    <nav class="container flex justify-between">
      <nuxt-link :to="availableLocaleLink">
        <Heading tag="h2" content="Blokim" />
      </nuxt-link>
      <LinkList
        class="
          flex flex-col
          md:flex-row
          items-end
          md:items-center
          py-2
          space-y-2
          md:space-y-0 md:space-x-12
        "
        :links="links"
      />
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    availableLocaleLink() {
      return this.$i18n.locales
        .filter((i) => i.code === this.$i18n.locale)
        .map((locale) => (locale.code === 'en' ? '/' : `/${locale.code}`))[0]
    },
    links() {
      return [
        {
          link: this.localePath({
            name: 'slug',
            params: { slug: this.$t('servicesUrl') },
          }),
          content: this.$t('services'),
        },
        {
          link: this.localePath({
            name: 'slug',
            params: { slug: this.$t('teamUrl') },
          }),
          content: this.$t('team'),
        },
      ]
    },
  },
}
</script>
