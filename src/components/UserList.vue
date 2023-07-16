<template>
  <tbody>
    <user-item
      v-for="(user, index) in userListBySearchName"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    UserItem,
  },
  //State: use $store cua vue
  // computed: {
  //   userList(){
  //     return this.$store.state.userList;
  //   },
  // },

  //mapState
  computed: {
    loading() {
      return false;
    },
    userListByBoy() {
      return this.$store.getters.userListByBoy;
    },
    ...mapState({
      userList: (state) => state.userList,
      //userList: "userList", //cach viet khac
    }),
    ...mapGetters({
      userListFilterByBoy: "userListByBoy",
      userListBySearchName: "userListBySearchName",
    }),
  },
  //computed: mapState(["userList"]), //cach viet khac
};
</script>

<style></style>
