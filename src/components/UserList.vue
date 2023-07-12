<template>
  <tbody>
    <user-item
      v-for="(user, index) in userList"
      :key="index"
      :user="user"
    ></user-item>
  </tbody>
</template>

<script>
import UserItem from "./UserItem.vue";
import { mapState } from "vuex";

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
    ...mapState({
      userList: (state) => state.userList,
      //userList: "userList", //cach viet khac
    }),
  },
  //computed: mapState(["userList"]), //cach viet khac
};
</script>

<style></style>
