<template lang="pug">
.login-box
  transition(name="fade")
    Login(v-if="typeForm", @changeLogin="changeComponent($event)")
    SignUp(v-if="!typeForm", @changeLogin="changeComponent($event)")
  .footer-box 
    p {{ $t('HOME.terms') }}&nbsp;
      span {{ $t('HOME.use') }}&nbsp;
      | {{ $t('HOME.and') }}&nbsp;
      span {{ $t('HOME.privacy') }}
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "LoginBox",
  data() {
    return {
      typeForm: true,
    };
  },
  components: {
    Login: () =>
      import(/*webpackChunkName: "Login"*/ "../components/Login.vue"),
    SignUp: () =>
      import(/*webpackChunkName: "SignUp"*/ "../components/SignUp.vue"),
  },
  methods: {
    changeComponent(res: boolean) {
      this.typeForm = res;
    },
  },
});
</script>

<style lang="less" scoped>
@import "../less/animations/animation-login.less";
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