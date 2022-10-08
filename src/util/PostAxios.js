import axios from "axios";

const postAxios = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
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

export default postAxios;
