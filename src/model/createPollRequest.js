class CreatePollRequest {
  constructor(question, answerOptions, userId) {
    this.question = question;
    this.answerOptions = answerOptions;
    this.userId = userId;
  }
}

export default CreatePollRequest;
