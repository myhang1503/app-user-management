import { createApp } from "vue";
import App from "./App.vue";

import AppModal from "./components/AppModal.vue";
const app = createApp(App);

import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      userList: [
        {
          id: 1,
          name: "Nguyễn Phong Hào",
          avatar: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
          age: 23,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["JS", "JAVA"],
          gender: "Nam",
          type: "ADMIN",
        },
        {
          id: 1,
          name: "Phan Thùy Duyên",
          avatar:
            "data:image/jpeg;base64,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",
          age: 22,
          description: "thân thiện , hoc hỏi nhanh",
          programmingLanguage: ["PHP", "C#"],
          gender: "Nữ",
          type: "CLIENT",
        },
      ],
      searchName: "Hào",
    };
  },
  getters: {
    userListByBoy(state) {
      return state.userList.filter((user) => user.gender === "Nam");
    },
    userListBySearchName(state) {
      const { userList, searchName } = state;
      return userList.filter((user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase())
      );
    },
  },
});
app.use(store);

app.component("app-modal", AppModal);

app.mount("#app");
