<template>
  <div>
    <!-- Originally, it should be written in the head tag -->
    <!-- If you write https://fonts.googleapis.com/css?family=Lato:700 in config.head, -->
    <!-- it will be converted to https://fonts.googleapis.com/css?family=Lato, so you have no choice but to put it in body. in the body. -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:700" />

    <Header/>

    <SearchBox/>

    <div v-if="isTopPage">
      <Top/>
    </div>

    <div v-else>
      <Article/>
    </div>

    <Footer/>
  </div>
</template>


<script>
import Header from '@theme/components/Header'
import Footer from '@theme/components/Footer.vue'
import Top from '@theme/components/Top.vue'
import Article from '@theme/components/Article';
import SearchBox from '@theme/components/SearchBox'

export default {
  components: { Header, Footer, Top, Article, SearchBox },

  data() {
    return {
      isTopPage: false
    };
  },

  methods: {
    prependGoogleTagManagerScript() {
      const recaptchaScript = document.createElement('noscript')
      recaptchaScript.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMNSMCF" height="0" width="0" style="display:none;visibility:hidden"></iframe>'
      document.body.prepend(recaptchaScript)
    },

    validateTopPageURL() {
      return location.pathname.match('^\/help\/(ja|en)\/?$') != null;
    }
  },

  beforeMount() {
    this.prependGoogleTagManagerScript();
  },

  mounted() {
    this.isTopPage = this.validateTopPageURL()
  },

  watch: {
    $route() {
      this.isTopPage = this.validateTopPageURL();
    },
  },
}
</script>
