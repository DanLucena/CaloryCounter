<template lang="pug">
.login-box
  Login(v-if="typeForm", @changeLogin="changeComponent($event)")
  SignUp(v-if="!typeForm", @changeLogin="changeComponent($event)")
  .footer-box 
    p By clicking the button above, you agree to&nbsp;
      span our terms of use&nbsp;
      | and&nbsp;
      span privacy polites
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

export default Vue.extend({
  name: "LoginBox",
  data() {
    return {
      typeForm: true,
    };
  },
  components: {
    Login,
    SignUp,
  },
  methods: {
    changeComponent(res: boolean) {
      this.typeForm = res;
    },
  },
});
</script>

<style lang="less" scoped>
.login-box {
  width: 28.8rem;
  height: 43rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 3px 5px 24px 10px rgba(0, 0, 0, 0.06);
  box-shadow: 3px 5px 24px 10px rgba(0, 0, 0, 0.06);
  background-color: #fff;

  .footer-box {
    width: 100%;
    height: 2.7rem;
    margin-top: auto;
    background-color: #f7fafb;
    border-radius: 0 0 0.8rem 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 0.7rem;
      color: #999;

      span {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 420px) {
    width: 25rem;
  }
}
</style>