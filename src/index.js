import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="WOW"
          avatar={faker.image.people()}
        />
      </ApprovalCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="Nice Job!"
        avatar={faker.image.people()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="Proud!"
        avatar={faker.image.people()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
