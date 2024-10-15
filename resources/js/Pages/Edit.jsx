import React, { useState } from 'react';
import Header from "@/Components/Header.jsx";

export default function Edit() {
    // Define state for the form fields
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [color, setColor] = useState('');

    // Handle form submission (you can add functionality as needed)
    // TODO on submit trigger the save route
    const handleSubmit = (e) => {
        e.preventDefault();

        // Log the form values (or handle them in your app)
        console.log('Title:', title);
        console.log('Link:', link);
        console.log('Color:', color);

        // Reset form fields after submission (optional)
        setTitle('');
        setLink('');
        setColor('');
    };

    return (
        <>
            <Header />

            <div className="form-container">
                {/*TODO add index number to edit item*/}
                <h2>Edit Item </h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Link:</label>
                        <input
                            type="url"
                            id="link"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                            placeholder="Enter link"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="color">Color:</label>
                        <input
                            type="color"
                            id="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="save-button">Save</button>
                </form>
            </div>
        </>
    );
}
