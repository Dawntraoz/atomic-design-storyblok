<template>
  <div v-editable="blok" class="px-6">
    <component
      :is="blok.component"
      v-for="body in blok.body"
      :key="body._uid"
      :blok="body"
    />
  </div>
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
