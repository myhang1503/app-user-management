<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
            v-model="user.name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            class="form-control"
            id="age"
            placeholder="Age"
            v-model="user.age"
          />
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
            v-model="user.avatar"
          />
        </div>
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="JavaScript"
                  v-model="user.programmingLanguage" />
                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Java"
                  v-model="user.programmingLanguage" />
                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="PHP"
                  v-model="user.programmingLanguage" />
                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Python"
                  v-model="user.programmingLanguage" />
                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="C#"
                  v-model="user.programmingLanguage" />
                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="C/C++"
                  v-model="user.programmingLanguage" />
                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nam"
                  v-model="user.gender" />
                Nam <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nữ"
                  v-model="user.gender" />
                Nữ <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Khác"
                  v-model="user.gender" />
                Khác <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select class="form-control" v-model="user.type">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            rows="4"
            v-model="user.description"
          ></textarea>
        </div>
        <button
          type="submit"
          class="btn btn-gradient-primary mr-2"
          @click.prevent="handleSubmit(user)"
        >
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
//import { createNamespacedHelpers, useStore } from "vuex";
//const { mapActions } = createNamespacedHelpers("user");
export default {
  props: {
    userInfo: {
      type: Object,
    },
  },
  setup(props) {
    const { userInfo } = toRefs(props);
    const store = useStore();
    let user = reactive({
      name: "",
      avatar: "",
      age: 0,
      description: "",
      programmingLanguage: [],
      gender: "Nam",
      type: "CLIENT",
    });
    /*chuyen doi props thanh reactive */
    if (userInfo.value) {
      user.name = userInfo.name;
      user.avatar = userInfo.avatar;
      user.age = userInfo.age;
      user.description = userInfo.description;
      user.programmingLanguage = userInfo.programmingLanguage;
      user.gender = userInfo.gender;
      user.type = userInfo.type;
    }
    function handleUpdateUser(user) {
      store.dispatch("user/updateUserAction", user);
    }
    function handleAddUser(user) {
      store.dispatch("user/addUserAction", user);
    }
    function handleSubmit() {
      if (userInfo.value) {
        handleUpdateUser(user);
      } else {
        handleAddUser(user);
      }
    }
    return {
      user,
      handleSubmit,
    };
  },
  // data() {
  //   return {
  //     user: {
  //       name: "",
  //       avatar: "",
  //       age: 0,
  //       description: "",
  //       programmingLanguage: [],
  //       gender: "Nam",
  //       type: "CLIENT",
  //     },
  //   };
  // },
  // methods: {
  //   handleSubmit() {
  //     if (this.userInfo) {
  //       this.handleUpdateUser(this.user);
  //     } else {
  //       this.handleAddUser(this.user);
  //     }
  //   },
  //   ...mapActions({
  //     handleAddUser: "addUserAction",
  //     handleUpdateUser: "updateUserAction",
  //   }),
  // },
  // created() {
  //   /*chuyen doi props thanh data*/
  //   if (this.userInfo) {
  //     this.user = {
  //       ...this.userInfo,
  //     }; /*es6: copy array to new location, prevent tham chieu*/
  //   }
  // },
};
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
