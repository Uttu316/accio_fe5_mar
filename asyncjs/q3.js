function getUserdata(onSuccess, onFailure) {
  //assume we make BE request and got data
  setTimeout(() => {
    let data = { name: "Abc", userId: "123" };
    let name = prompt("Enter username");
    console.log("Fetching UserData");
    if (name === data.name) {
      onSuccess(data);
    } else {
      let err = new Error("user not valid");
      onFailure(err);
    }
  }, 1500);
}
function getPosts(userId, onSuccess, onFailure) {
  console.log("Fetching Posts for", userId);

  setTimeout(() => {
    let data = [{ title: "Hello", postId: "43232" }];

    if (data && data.length) {
      onSuccess(data);
    } else {
      const err = new Error("No Post Available");
      onFailure(err);
    }
  }, 1500);
}
function getComments(postId, onSuccess, onFailure) {
  console.log("Fetching comments for Post", postId);

  setTimeout(() => {
    let data = [{ comment: "Nice", commentId: 2132 }];

    if (data && data.length) {
      onSuccess(data);
    } else {
      const err = new Error("Comments not available");
      onFailure(err);
    }
  }, 1000);
}
function getLike(commentId, onSuccess, onFailure) {
  console.log("Fetching Like for Comment", commentId);
  setTimeout(() => {
    const data = { count: 13 };
    if (data) {
      onSuccess(data);
    } else {
      const err = new Error("No like");
      onFailure(err);
    }
  }, 2000);
}

getUserdata(
  (userData) => {
    console.log("user data success");
    const { userId } = userData;

    getPosts(
      userId,
      (posts) => {
        console.log("Posts success");
        const postId = posts[0].postId;
        getComments(
          postId,
          (comments) => {
            console.log("Comments Success");
            const commentId = comments[0].commentId;
            getLike(
              commentId,
              (likeCount) => {
                console.log(likeCount);
              },
              (err) => {
                console.log(err);
              }
            );
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

console.log("Another Task");
