import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../features/taskList/taskListSlice';
import { updateNewTaskInput } from '../features/newTaskForm/newTaskFormSlice';
import './AddTaskForm.css';

const AddTaskForm = () => {
    const newTaskInput = useSelector(state => state.newTaskInput);
    const dispatch = useDispatch();

    const handleTaskSubmit = () => {
        const task = newTaskInput.value.trim();
        if(task) {
            dispatch(addTask(task));
        }
        dispatch(updateNewTaskInput(""));
    }

    return (
        <div className="add_task_form">
            <input
                type="text" 
                value={newTaskInput.value}
                onInput={e => dispatch(updateNewTaskInput(e.target.value))}
                onKeyPress={e => {if( e.key === "Enter" ) handleTaskSubmit();}}
                placeholder="Type here..."
            />
            <button
                className="fas fa-plus"
                onClick={handleTaskSubmit}
            ></button>
        </div>
    );
}

export default AddTaskForm;