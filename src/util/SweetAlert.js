import Swal from "sweetalert2";

class SweetAlert {
  success = (text) => {
    Swal.fire({
      icon: "success",
      text: text,
    });
  };

  voteSuccesfull = (alert, callback) => {
    Swal.fire({
      icon: "success",
      text: alert.text,
      title: alert.title,
      confirmButtonText: "Show result",
    }).then((result) => {
      callback && callback(result);
    });
  };

  error = (text) => {
    Swal.fire({
      icon: "error",
      text: text,
    });
  };

  info = (text) => {
    Swal.fire({
      icon: "info",
      text: text,
    });
  };
}

const sweetAlert = new SweetAlert();
export default sweetAlert;
