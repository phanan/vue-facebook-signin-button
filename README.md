# vue-facebook-signin-button

> A simple [Vue](https://vuejs.org) plugin to include a custom [Facebook sign-in button](https://developers.facebook.com/docs/facebook-login/web) into your web app.

<img src="https://github.com/phanan/vue-facebook-signin-button/raw/master/screenshot.png" width="800" alt="Screenshot">

## Install

This plugin can be installed as a module

``` bash
$ npm install vue-facebook-signin-button
```

or, if you're not in a modular environment, just include it as a `<script>`.

## Usage

> Important: The Facebook SDK must first be loaded asynchronously for the plugin to work. Something like this will do:
> ```js
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.8' // use graph api version 2.8
    });
  };
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
```

Step 1: `import` and `use` the plugin if you're in a modular environment (you don't need this step otherwise, as the plugin will register itself).

``` js
import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)
```

Step 2: Now you have a `fb-signin-button` global component, ready for use. It's best to demonstrate the usage with an example:

``` html
<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      FB.api('/me', dude => {
        console.log(`Good to see you, ${dude.name}.`)
      })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
```

That's it!

> Looking for the [Google counterpart](https://github.com/phanan/vue-google-signin-button)?

## License

MIT © [Phan An](http://phanan.net)
