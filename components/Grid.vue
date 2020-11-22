<template>
  <ul v-editable="blok" class="flex py-8 mb-6">
    <li
      v-for="column in blok.columns"
      :key="column._uid"
      class="flex-auto px-6"
    >
      <component :is="column.component" :blok="column" />
    </li>
  </ul>
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
