import React from "react";
import { FaCircle } from "react-icons/fa";

const TaskStatusIcon = ({ status }) => {
  let color;
  switch (status) {
    case "todo":
      color = "text-red-500";
      break;
    case "in progress":
      color = "text-orange-500";
      break;
    case "done":
      color = "text-green-500";
      break;
    default:
      color = "text-gray-500";
  }

  return <FaCircle className={`text-xl ${color}`} />;
};

export default TaskStatusIcon;
