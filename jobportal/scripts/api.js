/**
 * Makes an API call to the job board and returns the data.
 * @param {Object} config - Configuration for the API call.
 * @returns {Promise<Object>} - The data returned from the API.
 */

export const api = async (config) => {
  const { endpoint, method = "GET" } = config || {};
  let url = "https://www.arbeitnow.com/api/job-board-api";
  try {
    const res = await fetch(url, {
      method,
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
