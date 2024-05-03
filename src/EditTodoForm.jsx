import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, isVisible, id }) => {
    const [newItem, setNewItem] = useState(''); // set state

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
                <form onSubmit={handleSubmit} className="new-item-form">
                    {/* Input field for entering new item */}
                    <div className="form-row">
                        <label>Edit Item</label>
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

