<template lang="pug">
.login-body 
  p.title {{ $t('SIGN_UP.title') }}
  p.subtitle {{ $t('SIGN_UP.subtitle') }}
  .login-fields
    .form
      input#name.form__input(
        type="text",
        autocomplete="off",
        placeholder=" ",
        v-model="nome"
      )
      label.form__label(for="name") {{ $t('SIGN_UP.username') }}
    .form
      input#email.form__input(
        type="email",
        autocomplete="off",
        placeholder=" ",
        v-model="email"
      )
      label.form__label(for="email") {{ $t('SIGN_UP.email') }}
    .form
      input#password.form__input(
        type="password",
        autocomplete="off",
        placeholder=" ",
        v-model="password"
      )
      label.form__label(for="password") {{ $t('SIGN_UP.password') }}
    .form
      input#repeat-password.form__input(
        type="password",
        autocomplete="off",
        placeholder=" ",
        v-model="repeatPassword"
      )
      label.form__label(for="repeat-password") {{ $t('SIGN_UP.repeat_password') }}
    .select-boxes
      select(name="day")
        option(value="") {{ $t('SIGN_UP.day') }}
        option(value="1") 1
      select(name="mouth")
        option(value="") {{ $t('SIGN_UP.month') }}
        option(value="1") January
      select(name="year")
        option(value="") {{ $t('SIGN_UP.year') }}
        option(value="1") 1999
    button.login-button(type="submit", :disabled="isFilled") {{ $t('SIGN_UP.title') }}
    p.create-account {{ $t('SIGN_UP.already') }}&nbsp;
      span(@click="changeScreen()") {{ $t('SIGN_UP.sign_in') }}
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      nome: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  computed: {
    isFilled() {
      if (!this.nome || !this.password || !this.email || !this.repeatPassword) {
        return true;
      }
      return false;
    },
  },
  methods: {
    changeScreen() {
      this.$emit("changeLogin", true);
    },
  },
});
</script>

<style lang="less" scoped>
@import "../less/form-input";
@import "../less/login-button";
@import "../less/select-box";

.login-fields {
  display: flex;
  flex-direction: column;
}
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

  .create-account {
    margin: 2.5rem auto 0 auto;

    span {
      font-weight: 600;
      color: #f90;
      cursor: pointer;
    }
  }
}

.select-boxes {
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  select {
    width: 32%;
  }
}
</style>