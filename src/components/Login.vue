<template lang="pug">
.login-body 
  p.title Login
  p.subtitle Fill the fields to login.
  .login-fields
    .form
      input#email.form__input(
        type="text",
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
    .login-features
      label.con-container-checkbox
        span Remember me
        input#sexo1(
          type="checkbox",
          name="name",
          value="",
          formcontrolname="sexo"
        )
        span.checkmark
    button.login-button(
      type="submit",
      :disabled="email === '' || password === ''"
    ) Login
    .social-medias
      hr
      span or continue with
      hr
    .social-media-boxes
      button 
        v-icon(name="co-facebook-f", scale="2")
      button 
        v-icon.teste(name="bi-twitter", scale="2")
      button 
        v-icon(name="bi-google", scale="2")
    p.create-account Don't have an account?&nbsp;
      span(@click="changeScreen()") Sign up
    p.forget-password Forgot password?
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
  methods: {
    changeScreen() {
      this.$emit("changeLogin", false);
    },
  },
});
</script>

<style lang="less" scoped>
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

  .login-button {
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

.con-container-checkbox {
  width: fit-content;
  display: flex;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;
  color: #555770;
  align-items: center;
  margin-bottom: 1.5rem;

  input {
    display: none;

    &:checked ~ .checkmark {
      background-color: #f90;

      &:after {
        display: block;
      }
    }
  }

  .checkmark {
    box-shadow: inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1);
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ecf1f4;

    border-radius: 4px;

    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 6px;
      top: 1px;
      width: 6px;
      height: 11px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
      border-radius: 2px;
    }
  }
}
</style>