import { useState } from 'react';

interface TodoItem {
    name: string;
    completed: boolean;
}

interface TodoListProps {
    todos: TodoItem[];
    markCompleted: (index: number, completed: boolean) => void;
}

interface TodoListItemProps {
    todo: TodoItem;
    markCompleted: (completed: boolean) => void;
}

interface TodoInputProps {
    addTodo: (todo: string) => void;
}

const TodoInput = ({ addTodo }: TodoInputProps) => {
    const [todo, setTodo] = useState('');

    const addButtonClicked = () => {
        setTodo('');
        addTodo(todo);
    };

    return (
        <>
            <input
                id="todo"
                type="text"
                value={todo}
                onChange={(event) => setTodo(event.target.value)}
            />
            <button onClick={addButtonClicked}>Add</button>
        </>
    );
};

const TodoListItem = ({ todo, markCompleted }: TodoListItemProps) => {
    return (
        <>
            <div>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(event) => markCompleted(event.target.checked)}
                />
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.name}
                </span>
            </div>
        </>
    );
};

const TodoList = ({ todos, markCompleted }: TodoListProps) => {
    return (
        <>
            <div>
                {todos.map((todo, index) => (
                    <TodoListItem
                        todo={todo}
                        markCompleted={(completed: boolean) => markCompleted(index, completed)}
                    />
                ))}
            </div>
        </>
    );
};

const App = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        setTodos([...todos, { name: todo, completed: false }]);
    };

    const markCompleted = (index: number, completed: boolean) => {
        setTodos(todos.map((todo, i) => (i === index ? { ...todo, completed: completed } : todo)));
    };

    return (
        <div>
            <div>
                <TodoInput addTodo={addTodo} />
                <TodoList todos={todos} markCompleted={markCompleted} />
            </div>
        </div>
    );
};

export default App;
