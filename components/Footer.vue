<template>
  <footer class="bg-white">
    <div class="container pt-32 pb-20 flex flex-wrap text-gray-500">
      <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <Paragraph
          content="Nuxt.js lets you define the CSS files/modules/libraries you want to
          set set globally (included in every page). In the nuxt.config you can
          easily add your styles using the CSS Property."
        />
      </div>
    </div>
    <div class="py-6 bg-gradient-to-tr from-blue-700 to-blue-800 text-white">
      <div class="container">
        <Paragraph
          :content="`© Blokim - ${new Date().getFullYear()} All Rights Reserved`"
        />
      </div>
    </div>
  </footer>
</template>
