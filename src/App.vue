<template>
  <div id="app">
    <div class="loading-overlay" > <img :src="logooverlay" alt=""> </div> <!-- Overlay with the logo that shows when loading a different page -->
    <pageheader/>
    <router-view></router-view>
    <pagefooter/>
  </div>
</template>

<script>
import pageheader from './components/pageheader.vue'
import pagefooter from './components/pagefooter.vue'
import logooverlay from '@/assets/logooverlay.png'

export default {
  name: 'App',
  components: {
    pageheader,
    pagefooter
  },
  data: function(){
        return{
            logooverlay: logooverlay
        }
    }
}
</script>

<style lang="sass">
::-webkit-scrollbar //for Chrome
    width: 0px 
@font-face 
  font-famly: "swansea"
  src: local("swansea"), url(/assets/fonts/swansea.woff) format("truetype")
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: swansea, sans-serif
  text-decoration: none
  list-style-type: none
  scrollbar-width: none !important //for Firefox
body
  overflow-x: hidden
  a:visited
    color: black 
  .loading-overlay    
    width: 100%
    height: 100%
    position: fixed
    top: 0px
    left: 0px
    background-color: #1d1d1d
    z-index: 99
    display: flex
    justify-content: center
    align-items: center
    transform: translateX(100%)
    .hidden
      animation: fadeOut 1s
      

@keyframes fadeOut
  100%
    transform: translateX(-100%)
  0%
    transform: translateX(100%)
</style>
