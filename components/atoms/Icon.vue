<template>
  <div
    class="rounded-medium flex flex-col items-center justify-center w-16 h-16 mb-6"
  >
    <img :src="iconSrc" :alt="iconAlt" class="w-10 h-10" />
  </div>
</template>

<script>
export default {
  props: {
    iconSrc: {
      type: String,
      required: true,
    },
    iconAlt: {
      type: String,
      required: true,
    },
  },
}
</script>
