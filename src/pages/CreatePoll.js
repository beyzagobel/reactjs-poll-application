import React, { useState } from "react";
import "../css/CreatePoll.css";

export default function CreatePoll() {
  const [counter, setCounter] = useState(1);

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

  return (
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

          <button className="ui fluid button createPoll">Create poll</button>
        </form>
      </div>
    </div>
  );
}
