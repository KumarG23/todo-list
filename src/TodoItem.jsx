import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);// state to track editing mode (isVisible)
    const [updatedTitle, setUpdatedTitle] = useState(title);

    const handleEdit = () => {
        setIsEditing(true); // set isEditing to true when edit icon is clicked
    };

    const handleCancelEdit = () => {
        setIsEditing(false); // cancel isEditing
    }

    const handleUpdateTodo = () => {
        editTodo(id, updatedTitle);// updated todo with new title
        setIsEditing(false); // Turn off isEditing (isVisible false)
    }

    return (
        <li>
            {/* Display input field if editing */}
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                    <button onClick={handleUpdateTodo}>Update</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            ) : (
                <div className="item">
                    {/* Checkbox input for toggling todo completion status */}
                    <label>
                        <input className="checkbox"
                            type="checkbox"
                            checked={completed} // Sets the initial checked state based on todo completion status
                            onChange={e => toggleTodo(id, e.target.checked)} // Calls toggleTodo function when checkbox is changed
                        />
                        {/* Display the title of the todo */}
                       <span className="todo-item">{title}</span>
                    </label>
                    <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEdit} />
                    {/* Button for deleting the todo */}
                    <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(id)} />
                </div>
            )}
        </li>
    );
}

