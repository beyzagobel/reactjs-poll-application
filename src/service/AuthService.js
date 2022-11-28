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
    login = (data, callback) => {
      postAxios("/login", {
        username : data.username,
        password : data.password,
      }).then((res) =>{
        this.isAuthenticated = true;
        console.log(this.isAuthenticated);
        callback && callback(res);
      });
    };
    signUp = (data, callback) => {
      postAxios("/signup", {
        fullName: data.fullName,
        username: data.username,
        password: data.password,
      }).then((res) => {
        this.isAuthenticated = true;
        callback && callback(res);
      });
    };

    logout = (url, callback) => {
      getAxios(url).then((res) => {
        console.log("logout");
        this.isAuthenticated = false;
        callback && callback(res);
      });
    };
  
}

const authService = new AuthService();
export default authService;
