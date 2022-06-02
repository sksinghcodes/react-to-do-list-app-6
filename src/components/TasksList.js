import { Fragment, useEffect } from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import './TasksList.css';

const TasksList = () => {
    const taskList = useSelector(state => state.taskList);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
    }, [taskList]);

    return (
        <ul className="tasks_list">
            {taskList.map(taskItem => (
                <Fragment key={taskItem.id}>
                    <TaskItem
                        taskItem={taskItem}
                    /> 
                </Fragment>
            ))}
        </ul>
    );
}

export default TasksList;