import getAxios from "../util/GetAxios";
import postAxios from "../util/PostAxios";

class AuthService {
  constructor() {
    this.isAuthenticated = false;
  }

  isSessionExist = (url, callback) => {
    getAxios(url).then((res) => {
      callback && callback(res);
    });
  };
}

const authService = new AuthService();
export default authService;
