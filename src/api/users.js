import axios from "axios";

/*xu ly bat dong bo khi goi api 
  promise, callback function, async/await
*/
export const getAllUserApi = async () => {
  const res = await axios({
    method: "GET", //GET, POST (add), PUT (update), DELETE
    url: "https://64f1f58f0e1e60602d247e93.mockapi.io/users",
  });
  return res.data;
};

export const createUserApi = async (user) => {
  const res = await axios({
    method: "POST",
    url: "https://64f1f58f0e1e60602d247e93.mockapi.io/users",
    data: user,
  });
  return res.data;
};
