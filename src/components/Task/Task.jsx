import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted } from "redux/actions";
import { Button } from "components/Button/Button";
import { CiTrash } from "react-icons/ci";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleCompleted = () => dispatch(toggleCompleted(task.id));

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleCompleted}/>
      <p>{task.text}</p>
      <Button onClick={handleDelete}>
        <CiTrash size={15} />
      </Button>
    </div>
  );
};
