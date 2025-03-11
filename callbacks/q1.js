const getUserData = (onSuccess, onFailure) => {
  let data = {
    name: "ABC",
    userId: 123,
  };

  let userName = prompt("Enter your name");

  if (userName == data.name) {
    onSuccess(data);
  } else {
    onFailure("Oops");
  }
  console.log("Done");
};
getUserData(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
