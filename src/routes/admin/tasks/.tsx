import { useParams } from "react-router-dom";

export default function TaskDetail() {
  const { taskId } = useParams();
  return <div>Task Detail for ID: {taskId}</div>;
}
