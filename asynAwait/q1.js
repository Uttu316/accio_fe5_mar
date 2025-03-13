const api = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("oops");
    }, 1000);
  });
};

const getData = async () => {
  try {
    console.log("A");

    const res = await api();
    console.log("B", res);
    return res;
  } catch (e) {
    console.log("E", e);
  }
};

getData();
