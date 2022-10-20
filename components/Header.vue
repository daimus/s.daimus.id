<template>
  <header class="container flex flex-col text-center mx-auto py-10">
    <div class="w-full md:w-4/6 lg:w-4/6 mx-auto mx-auto">
      <div class="flex justify-between">
        <div>
          <button type="button" @click="$emit('showShareModal', 'https://s.daimus.id')" class="w-12 h-12 rounded-full p-2 text-center items-center hover:bg-gray-700 hover:fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="dark:fill-white"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg>
          </button>
        </div>
        <div class="flex justify-end items-center gap-3">
          <div class="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-language dark:stroke-white" width="24" height="24"
                 viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                 stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 5h7"></path>
              <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
              <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4"></path>
              <path d="M12 20l4 -9l4 9"></path>
              <path d="M19.1 18h-6.2"></path>
            </svg>
            <select class="bg-transparent" v-on:change="handleLanguageChange" :value="$i18n.locale">
              <option v-for="lang in $i18n.locales" :value="lang.code">{{ lang.icon }}</option>
            </select>
          </div>
          <div class="inline-flex items-center">
            <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
              <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" v-on:change="handleThemeChange">
              <div class="hidden"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255,255,255);"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="md:w-4/6 mx-auto">
      <img :src="'/images/profile_'+theme+'.jpeg'" alt="Muhammad Daimus Suudi"
           class="h-32 rounded-full mx-auto mb-5">
      <h1 class="font-bold dark:text-gray-50">Muhammad Daimus Suudi</h1>
      <p class="dark:text-gray-50">Full Stack Developer</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      theme : 'light'
    }
  },
  methods: {
    handleLanguageChange(e) {
      this.$router.replace(this.switchLocalePath(e.target.value));
    },
    handleThemeChange(e = null) {
      if (e){
        if (e.target.checked){
          localStorage.theme = 'dark'
        } else {
          localStorage.theme = 'light'
        }
      }
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        this.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark')
        this.theme = 'light'
      }
    }
  },
  mounted() {
    this.theme = (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    this.handleThemeChange()
  }
}
</script>

<style scoped>

</style>
