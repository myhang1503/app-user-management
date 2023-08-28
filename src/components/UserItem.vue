<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        class="badge badge-gradient-primary mr-2"
        v-for="(proLang, index) in user.programmingLanguage"
        :key="index"
        >{{ proLang }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemove(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleOpenModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal :isOpen="isOpenEdit" :handelCloseModal="handleCloseModalEdit">
      <form-user :userInfo="user"></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import { mapActions } from "vuex";
import FormUser from "./FormUser.vue";
export default {
  components:{
    FormUser,
  },
  data() {
    return {
      isOpenEdit: false,
    };
  },
  props: {
    user: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      handleRemove: "removeUserAction",
    }),
    handleCloseModalEdit() {
      this.isOpenEdit = false;
    },
    handleOpenModalEdit() {
      this.isOpenEdit = true;
    },
  },
};
</script>

<style></style>
