import React, { useState } from "react";
import "../css/CreatePoll.css";
import CreatePollRequest from "../model/createPollRequest";
import PollService from "../service/PollService";
import SweetAlert from "../util/SweetAlert";
import { useNavigate } from "react-router-dom";
import { usePoll } from "../context/PollContext";
import { useAuth } from "../context/AuthContext";

export default function CreatePoll() {
  const [counter, setCounter] = useState(1);
  const { setPoll } = usePoll();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleAddAnswerOption = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };
  const handleRemoveAnswerOption = (event) => {
    event.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleCreatePoll = (event) => {
    event.preventDefault();
    let data = Object.fromEntries(new FormData(event.target));
    let tempOptions = Object.values(data)
      .slice(1)
      .map((i) => {
        return { option: i };
      });

    const req = new CreatePollRequest(data.question, tempOptions, user.userId);
    PollService.create(req, (res) => {
      if (res.data) {
        setPoll(res.data);
        SweetAlert.success("Create poll Successfull");
        navigate("/polls");
      } else {
        SweetAlert.info("Lütfen Bilgilerinizi Kontrol Ediniz!");
      }
    });
  }

  return (
    <form onSubmit={handleCreatePoll}>
  <div className="createPollContainer">
      <div className="ui olive stacked left aligned segment">
        <form className="ui inverted form">
          <div className="field">
            <label>Title</label>
            <input
              name="question"
              type="text"
              required
              placeholder="Title your question here"
            />
          </div>
          <div className="field">
            <label>Answer Options</label>
            {counter > 1 ? (
              Array.from(Array(counter)).map((c, index) => {
                return (
                  <div className="ui icon input create" key={index}>
                    <input
                      type="text"
                      required
                      placeholder={`Option ${index + 1}`}
                      name={`input_${index}`}
                    />

                    <button
                      className="ui button x"
                      onClick={handleRemoveAnswerOption}
                    >
                      <i className="x icon"></i>
                    </button>
                  </div>
                );
              })
            ) : (
              <input
                type="text"
                required
                placeholder={`Option 1`}
                name={`input_1`}
              />
            )}
          </div>
          <button
            className="ui button add"
            onClick={handleAddAnswerOption}
            style={{ marginBottom: "20px" }}
          >
            Add option
          </button>
          <div class="ui section divider"></div>

          <button className="ui fluid button createPoll" type="submit">Create poll</button>
        </form>
      </div>
    </div>
    </form>
  
  );
}
