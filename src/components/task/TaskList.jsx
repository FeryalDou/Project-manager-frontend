import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {tasks && tasks.map((task) => <Task key={task._id} task={task} />)}
    </div>
  );
};

export default TaskList;
