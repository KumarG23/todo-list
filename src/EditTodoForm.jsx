import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, isVisible, id }) => {
    // State to manage the value of the input field
    const [newItem, setNewItem] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // If newItem is empty, do nothing
        if (newItem === '') return;

        // Call the editTodo function passed as props with the updated todo title
        editTodo(id, newItem);

        // Clear the input field
        setNewItem('');
    }

    return (
        <div>
            {/* Render the form only if isVisible is true */}
            {isVisible && (
                <form onSubmit={handleSubmit} className="edit-item-form">
                    {/* Input field for entering new item */}
                    <div className="form-row">
                        <label htmlFor="item">Edit Item</label>
                        <input
                            value={newItem}
                            onChange={e => setNewItem(e.target.value)}
                            type="text"
                            id="item"
                        />
                    </div>
                    {/* Submit button */}
                    <button type='submit' className="btn">Update</button>
                </form>
            )}
        </div>
    );
}

