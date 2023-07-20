import { useDispatch } from "react-redux";
import { addTask } from "redux/actions";
import { Button } from "components/Button/Button"

export const TaskForm = () => {

    const dispatch = useDispatch();

const handleSubmit = (evt)=>{
    evt.preventDefault();
    const form = evt.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
}

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Enter task text..."/>
            <Button type="submit">Add task</Button>
        </form>
    )
}