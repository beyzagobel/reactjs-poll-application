import axios from "axios";

const getAxios = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getAxios;
