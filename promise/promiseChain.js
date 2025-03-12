const getUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: "ABC", userId: "123" };
      resolve(data);
    }, 1000);
  });
};

const getPosts = (userid) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [{ postId: "3232", title: "Hello" }];
      resolve(data);
    }, 1000);
  });
};

const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [{ commentId: "323", comment: "Nice" }];
      resolve(data);
    }, 1000);
  });
};

getUserData()
  .then((userData) => {
    console.log(userData);
    return getPosts(userData.userId);
  })
  .then((posts) => {
    console.log(posts);
    return getComments(posts[0].postId);
  })
  .then((comments) => {
    console.log(comments);
  })
  .catch((err) => {
    console.log(err);
  });
