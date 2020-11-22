<template>
  <footer class="bg-white">
    <div class="container pt-32 pb-12 flex flex-wrap text-gray-500">
      <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 pb-6">
        <Heading tag="h2" content="Blokim" />
        <Paragraph
          content="Nuxt.js lets you define the CSS files/modules/libraries you want to
          set set globally (included in every page)."
        />
      </div>
      <LinkSection title="Support" :links="links.support" />
      <LinkSection title="Links" :links="links.links" />
      <LinkSection title="Contact" :links="links.contact" />
    </div>
    <div class="py-6 bg-gradient-to-tr from-blue-700 to-blue-800 text-white">
      <div class="container flex flex-wrap justify-between">
        <Paragraph
          :content="`© Blokim - ${new Date().getFullYear()} All Rights Reserved`"
          class="pr-4"
        />
        <LinkList
          class="order-first md:order-none flex space-x-3"
          :links="languages"
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: {
        support: [{ link: '/en/our-services', content: 'Our Services' }],
        links: [
          {
            link: 'https://twitter.com/dawntraoz/',
            content: 'Twitter',
            external: true,
            alt: 'Dawntraoz Twitter',
          },
          {
            link: 'https://www.linkedin.com/in/dawntraoz/',
            content: 'LinkedIn',
            external: true,
            alt: 'Dawntraoz LinkedIn',
          },
          {
            link: 'https://github.com/Dawntraoz/',
            content: 'Github',
            external: true,
            alt: 'Dawntraoz Github',
          },
          {
            link: 'https://www.dawntraoz.com/',
            content: 'Website',
            external: true,
            alt: 'Dawntraoz Website',
          },
        ],
        contact: [
          {
            link: 'tel: 123 456 789 555',
            content: '123 456 789 555',
            external: true,
            alt: 'Call me at 123 456 789 555',
          },
          {
            link: 'mailto: info@xxxx.xxx',
            content: 'info@dawntraoz.com',
            external: true,
            alt: 'Send me an email to info@dawntraoz.com',
          },
          {
            link:
              'https://www.google.com/maps?q=amsterdam&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjnoNmnipTtAhVEqaQKHTIqCbAQ_AUoAnoECC4QBA',
            content: 'Amsterdam, The Netherlands',
            external: true,
            alt: 'Find me at Amsterdam, The Netherlands',
          },
        ],
      },
      languages: [
        { link: '/', content: 'EN', white: true },
        { link: '/es', content: 'ES', white: true },
      ],
    }
  },
}
</script>
