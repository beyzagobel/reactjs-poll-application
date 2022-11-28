import getAxios from "../util/GetAxios";
import postAxios from "../util/PostAxios";

class PollService {
  create = (req, callback) => {
    postAxios("/create", {
      question: req.question,
      userId: req.userId,
      answerOptions: req.answerOptions,
    }).then((res) => {
      callback && callback(res);
    });
  };

  polls = (userId, url, callback) => {
    postAxios(url, {
      userId: userId,
    }).then((res) => {
      callback && callback(res);
    });
  };

  vote = (data, url, callback) => {
    postAxios(url, {
      userId: data.userId,
      answerId: data.answerId,
    }).then((res) => {
      callback && callback(res);
    });
  };

  result = (pollId, url, callback) => {
    postAxios(url, {
      pollId: pollId,
    }).then((res) => {
      callback && callback(res);
    });
  };
}

const pollService = new PollService();
export default pollService;
