const BASE_URL = "https://api.freeapi.app/api/v1/";

export const api = async (config) => {
  const { endpoint, method = "GET", data } = config || {};
  let url = BASE_URL + endpoint;
  try {
    const res = await fetch(url, {
      method,
      body: data && JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    throw res;
  } catch (e) {
    console.log(e, url);
    throw new Error("API FAILED", { cause: e });
  }
};
