<template lang="pug">
.header-container
  .logo
    img(src="@/assets/icons/logo-icon.svg")
    p {{ $t('HEADER.first_name') }}
      span {{ $t('HEADER.second_name') }}
  .select-boxes
    select(name="day", v-model="$i18n.locale")
      option(value="en") 💵 {{ $t('HEADER.languages.english') }}
      option(value="pt") ⚽ {{ $t('HEADER.languages.portugues') }}
</template>

<script>
import { Vue } from "vue-property-decorator";
export default Vue.extend({});
</script>

<style lang="less" scoped>
@import "../less/select-box";

.header-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 8rem 0 8rem;
  margin-bottom: -1rem;

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    p {
      font-size: 1.6rem;
      span {
        font-weight: 600;
        color: #f90;
      }
    }
  }

  @media (max-width: 1370px) {
    padding: 1.7rem 5rem 0 5rem;
  }
  @media (max-width: 1030px) {
    padding: 1.7rem 3rem 0 3rem;
  }
}
</style>
