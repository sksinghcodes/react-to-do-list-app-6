import AddTaskForm from './components/AddTaskForm';
import TasksList from './components/TasksList';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <AddTaskForm/>
            <TasksList/>
        </div>
    );
}

export default App;