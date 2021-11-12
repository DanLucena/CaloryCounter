<template lang="pug">
.login-body 
  p.title Sign Up
  p.subtitle Fill the fields to sign up.
  .login-fields
    .form
      input#name.form__input(
        type="text",
        autocomplete="off",
        placeholder=" ",
        v-model="nome"
      )
      label.form__label(for="name") Username
    .form
      input#email.form__input(
        type="email",
        autocomplete="off",
        placeholder=" ",
        v-model="email"
      )
      label.form__label(for="email") Email
    .form
      input#password.form__input(
        type="password",
        autocomplete="off",
        placeholder=" ",
        v-model="password"
      )
      label.form__label(for="password") Password
    .form
      input#repeat-password.form__input(
        type="password",
        autocomplete="off",
        placeholder=" ",
        v-model="repeatPassword"
      )
      label.form__label(for="repeat-password") Repeat password
    .form-birthday
      select(name="day")
        option(value="") Day
        option(value="1") 1
      select(name="mouth")
        option(value="") Mouth
        option(value="1") January
      select(name="year")
        option(value="") Year
        option(value="1") 1999
    button.login-button(
      type="submit",
      :disabled="nome === '' || password === '' || email === '' || repeatPassword === ''"
    ) Sign in
    p.create-account Don't have an account?&nbsp;
      span(@click="changeScreen()") Sign in
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
  methods: {
    changeScreen() {
      this.$emit("changeLogin", true);
    },
  },
});
</script>

<style lang="less" scoped>
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

  .login-button {
    width: 100%;
    border: none;
    height: 3.1rem;
    border-radius: 0.4rem;
    background-color: #f90;
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s;
    -webkit-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
    -moz-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
    box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);

    &:hover {
      background-color: #f1b415;
    }

    &:disabled {
      cursor: auto;
      background-color: #6b6e70;
      box-shadow: none;
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
}
.form {
  position: relative;
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;

  &__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 0.5rem;
    font-size: inherit;
    color: #000;
    outline: none;
    padding: 1.25rem;
    background: none;

    &:focus {
      border-color: #f90;
    }
  }

  &__label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: #000;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #fff;
  }
}

.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
  top: -0.5rem;
  font-size: 0.8rem;
  left: 0.8rem;
}

.form-birthday {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  select {
    border: 2px solid #e1e5ee;
    height: 3rem;
    border-radius: 0.5rem;
    width: 32%;
    text-align: center;
  }
}
</style>