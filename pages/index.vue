<template>
  <div>
    <div class="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-800">
      <Header @showShareModal="showShareModal" />
      <Links @showShareModal="showShareModal" />
      <Footer />
      <ShareModal :show="showModal" @hideShareModal="hideShareModal" :url="url" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data(){
    return {
      showModal: false,
      url: ''
    }
  },
  methods: {
    showShareModal (url = '') {
      this.showModal = true
      this.url = url
    },
    hideShareModal(){
      this.showModal = false
    }
  }
})
</script>
