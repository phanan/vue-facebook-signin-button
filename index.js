(function () {
  function install (Vue) {
    Vue.component('fb-signin-button', {
      name: 'fb-signin-button',
      render (createElement) {
        return createElement('div', {
          attrs: {
            class: 'fb-signin-button'
          },
          ref: 'signinBtn'
        }, this.$slots.default)
      },
      props: {
        params: {
          type: Object,
          required: true,
          default () {
            return {}
          }
        }
      },
      mounted () {
        this.$refs.signinBtn.addEventListener('click', e => {
          window.FB.login(response => {
            this.$emit(response.authResponse ? 'success' : 'error', response)
          }, this.params)
        })
      }
    })
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    /*global define*/
    define([], function () { return install })
  } else if (window.Vue) {
    window.Vue.use(install)
  }
})()
