import { useState } from "react";

export function TodoForm({ onSubmit }) {
    // State to store the value of the new item input field
    const [newItem, setNewItem] = useState('');

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevents page from reloading on submit
        if (newItem === '') return; // If newItem is empty, do nothing

        // Call the onSubmit function with the new item as parameter
        onSubmit(newItem);

        // Clear the newItem input field after submission
        setNewItem('');
    };

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            {/* Input field for entering new item */}
            <div className="form-row">
              {/* htmlFor allows clicking input field */}
                <label htmlFor="item">New Item</label> 
                <input
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                    placeholder="What todo?"
                />
            </div>
            {/* Submit button */}
            <button className="btn">Add</button>
        </form>
    );
}

