<template lang="pug">
.page-container
  SideBar
</template>

<script>
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  components: {
    SideBar: () => import("../components/SidebarMenu.vue"),
  },
});
</script>

<style lang="less" scoped>
</style>
