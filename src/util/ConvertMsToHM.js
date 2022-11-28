import { usePoll } from "../context/PollContext";

class ConvertMsToHM {
  ago = (data) => {
    const date = new Date().toLocaleString("tr"); // string
    const parseDate = Date.parse(date); // number
    const createDate = Date.parse(data);
    const miliseconds = parseDate - createDate;
    return this.convert(miliseconds);
  };

  convert = (miliseconds) => {
    let seconds = Math.floor(miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes >= 30 ? minutes + 1 : minutes;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}`;
  };

  padTo2Digits = (num) => {
    return num.toString().padStart(2, "0");
  };
}

const convertMsToHM = new ConvertMsToHM();
export default convertMsToHM;
