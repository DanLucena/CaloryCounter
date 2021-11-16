<template lang="pug">
.sidemenu-container
  .open 
    img(src="../assets/icons/right.svg", alt="arrow-right")
  ul
    li(
      v-for="route of routes",
      :class="route.checked && 'select'",
      @click="changeComponent(route)"
    )
      img(:src="route.icon", :alt="route.name")
  button 
    img(src="../assets/icons/power.svg", alt="power")
</template>

<script>
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  data: () => {
    return {
      routes: [
        {
          name: "Profile",
          icon: require("../assets/icons/profile.svg"),
          checked: true,
        },
        {
          name: "Graphics",
          icon: require("../assets/icons/graph.svg"),
          checked: false,
        },
        {
          name: "Notification",
          icon: require("../assets/icons/email.svg"),
          checked: false,
        },
        {
          name: "Hype",
          icon: require("../assets/icons/fire.svg"),
          checked: false,
        },
        {
          name: "Exercices",
          icon: require("../assets/icons/weight.svg"),
          checked: false,
        },
        {
          name: "Options",
          icon: require("../assets/icons/gear.svg"),
          checked: false,
        },
      ],
    };
  },
  methods: {
    changeComponent(newRoute) {
      this.routes.forEach((route) => (route.checked = false));
      newRoute.checked = true;
    },
  },
});
</script>

<style lang="less" scoped>
.sidemenu-container {
  width: 4.5rem;
  height: 100vh;
  border-right: 1px solid #c5c6c7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  position: relative;

  .open {
    position: absolute;
    top: 1rem;
    display: flex;
    align-items: center;
    right: -1.01rem;
    height: 2.5rem;
    background-color: #474b4f;
    border-radius: 0 0.2rem 0.2rem 0;
    cursor: pointer;

    img {
      width: 1rem;
    }
  }
}
ul {
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  li {
    width: 85%;
    display: flex;
    justify-content: center;
    margin-bottom: 1.8rem;
    cursor: pointer;
    padding: 0.6rem 0;

    img {
      width: 1.6rem;
    }
  }

  .select {
    width: 85%;
    background: #f90;
    -webkit-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
    -moz-box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
    box-shadow: 0px 3px 5px 3px rgba(255, 153, 0, 0.17);
    border-radius: 0.5rem;
  }
}
button {
  background: none;
  border: none;
  outline: none;
  margin-top: auto;

  img {
    width: 1.6rem;
  }
}
</style>
