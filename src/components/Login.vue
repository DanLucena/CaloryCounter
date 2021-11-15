<template lang="pug">
.login-body 
  p.title {{ $t('LOGIN.title') }}
  p.subtitle {{ $t('LOGIN.subtitle') }}
  .login-fields
    .form
      input#email.form__input(
        type="text",
        autocomplete="off",
        placeholder=" ",
        v-model="email"
      )
      label.form__label(for="email") {{ $t('LOGIN.email') }}
    .form
      input#password.form__input(
        type="password",
        autocomplete="off",
        placeholder=" ",
        v-model="password"
      )
      label.form__label(for="password") {{ $t('LOGIN.password') }}
    .login-features
      label.con-container-checkbox
        span {{ $t('LOGIN.remember') }}
        input#sexo1(
          type="checkbox",
          name="name",
          value="",
          formcontrolname="sexo"
        )
        span.checkmark
    button.login-button(type="submit", :disabled="isFilled") {{ $t('LOGIN.title') }}
    .social-medias
      hr
      span {{ $t('LOGIN.continue') }}
      hr
    .social-media-boxes
      button 
        v-icon(name="co-facebook-f", scale="2")
      button 
        v-icon.teste(name="bi-twitter", scale="2")
      button 
        v-icon(name="bi-google", scale="2")
    p.create-account {{ $t('LOGIN.create_account') }}&nbsp;
      span(@click="changeScreen()") {{ $t('LOGIN.sign_up') }}
    p.forget-password {{ $t('LOGIN.forget') }}
</template>

<script lang="ts">
import { OhVueIcon } from "oh-vue-icons";
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  components: {
    "v-icon": OhVueIcon,
  },
  computed: {
    isFilled() {
      if (!this.email || !this.password) {
        return true;
      }
      return false;
    },
  },
  methods: {
    changeScreen() {
      this.$emit("changeLogin", false);
    },
  },
});
</script>

<style lang="less" scoped>
@import "../less/checkbox";
@import "../less/form-input";
@import "../less/login-button";

.login-body {
  width: 100%;
  padding: 2rem;

  .title {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #f90;
  }

  .subtitle {
    font-weight: 500;
    color: #999;
    margin-bottom: 2rem;
  }

  .login-fields {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    .social-medias {
      margin-top: 2.5rem;
      display: flex;
      align-items: center;
      hr {
        width: 30%;
        border: 1px solid #ccc;
      }
      span {
        margin: 0 1rem;
      }
    }

    .social-media-boxes {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 2rem;

      button {
        width: 5rem;
        height: 4.5rem;
        border: 0.125rem solid #e1e5ee;
        background: none;
        border-radius: 0.8rem;
        transition: all 0.3s;

        &:hover {
          border-color: #f90;
          -webkit-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
          -moz-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
          box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
        }
      }
    }

    .create-account {
      margin: 2.5rem auto 0 auto;

      span {
        font-weight: 600;
        color: #f90;
        cursor: pointer;
      }
    }

    .forget-password {
      margin: 1rem auto 0 auto;
      font-weight: 600;
      color: #f90;
      cursor: pointer;
    }
  }
}
</style>