<template lang="pug">
.home
  Header
  .login-container
    .texts
      h1 {{ $t('HOME.first_title') }}
      h1#title {{ $t('HOME.second_title') }}
      p {{ $t('HOME.first_subtitle') }}
      p {{ $t('HOME.second_subtitle') }}
      img(src="../assets/figures/teste.svg", alt="alt")
    LoginBox
  .custom-shape-divider-bottom-1635908466
    svg(
      data-name="Layer 1",
      xmlns="http://www.w3.org/2000/svg",
      viewBox="0 0 1200 120",
      preserveAspectRatio="none"
    )
      path.shape-fill(
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
        opacity=".25"
      )
      path.shape-fill(
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
        opacity=".5"
      )
      path.shape-fill(
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
      )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginBox from "@/components/LoginBox.vue";
import Header from "@/components/Header.vue";

@Component({
  components: {
    LoginBox,
    Header,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .login-container {
    margin: auto 0;
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;

    .texts {
      width: 50%;
      min-width: 26.813rem;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 3rem;
        word-spacing: 0.3rem;
      }
      #title {
        margin-bottom: 1rem;
      }
      p {
        color: #999;
      }
      img {
        width: 42rem;
        margin-left: auto;
        margin-top: 4rem;
      }
      @media (max-width: 1030px) {
        display: none;
      }
    }

    @media (max-width: 1370px) {
      padding: 1.7rem 5rem 0 5rem;
    }
    @media (max-width: 1030px) {
      padding: 0;
      margin: auto;
    }
  }
}
.custom-shape-divider-bottom-1635908466 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: -1;
}

.custom-shape-divider-bottom-1635908466 svg {
  position: relative;
  display: block;
  width: calc(149% + 1.3px);
  height: 200px;
}

.custom-shape-divider-bottom-1635908466 .shape-fill {
  fill: #f5a623;
}
</style>
