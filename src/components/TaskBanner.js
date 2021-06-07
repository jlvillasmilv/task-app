import React from "react";

export const TaskBanner = props => (
  <h4 className="bg-secondary text-white text-center p-4">
    In Progress Tasks({props.taskItems.filter(t => !t.completed).length})
  </h4>
);
