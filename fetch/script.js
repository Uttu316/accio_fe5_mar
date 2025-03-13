const api = () => {
  let baseUrl = "https://api.freeapi.app/api/v1/";

  let endpoint = "public/randomusers";
  let method = "GET";

  let URL = baseUrl + endpoint;

  fetch(URL, {
    method,
  })
    .then((res) => res.json())
    .then((res) => {
      const {
        data: { data },
      } = res;
      showUsers(data);
    })
    .catch((e) => {
      console.log(e);
    });
};
function showUsers(users) {
  const userList = document.getElementById("user_list");
  const allItemsEl = users.map((item) => createUser(item));
  userList.append(...allItemsEl);
}
function createUser(user) {
  const { name } = user;
  const { title, first, last } = name;

  const li = document.createElement("li");

  li.innerHTML = `${title}. ${first} ${last}`;
  return li;
}

const getUsers = () => {
  api();
};

getUsers();
