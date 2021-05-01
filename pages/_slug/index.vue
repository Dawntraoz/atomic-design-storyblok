<template>
  <section>
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </section>
</template>

<script>
import { translatedSlug } from '~/helpers/translatedSlug'

export default {
  async asyncData(context) {
    const version =
      context.query._storyblok || context.isDev ? 'draft' : 'published'
    const language = context.app.i18n.locale
    const slug = context.params.slug

    try {
      const response = await context.app.$storyapi.get(`cdn/stories/${slug}`, {
        language,
        version,
      })

      await context.store.dispatch(
        'i18n/setRouteParams',
        translatedSlug(response.data.story)
      )

      return { story: response.data.story }
    } catch (e) {
      if (!e.response) {
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        context.error({
          statusCode: e.response.status,
          message: e.response.data,
        })
      }
    }
  },
  data() {
    return {
      story: { content: {} },
    }
  },
  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new window.StoryblokBridge()
      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })
      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
}
</script>
