import React, { useState } from 'react';
import Header from "@/Components/Header.jsx";

export default function Edit({ item }) {
    // Define state for the form fields
    const path = window.location.pathname;
    const index = parseInt(path.substring(path.lastIndexOf('/') + 1)); // Get the last segment of the URL
    const [title, setTitle] = useState(item ? item.title : '');
    const [link, setLink] = useState(item ? item.link : '');
    const [color, setColor] = useState(item ? item.color : '');


    // Handle form submission (you can add functionality as needed)
    const handleSubmit =  async (e) => {
        e.preventDefault();
        // Create a data object to send to the backend
        const data = {
            title,
            link,
            color,
            index
        };

        console.log('============data===================')
        console.log(data);
        try {
            const response = await fetch('/api/saveButton', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = response.json();
                console.log('Success:', result);
                // Optionally, show a success message or handle further logic

                // Reset form fields after submission
                setTitle('');
                setLink('');
                setColor('');

                window.location.href = '/board'; // Redirect after successful save
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Header />
            <a href="/board" style={{ textDecoration: 'none', color: 'inherit', }}>
                Back to Home
            </a>
            <div className="form-container">

                <h2>Edit Item {index}</h2>
                <input type="hidden" name="_token" value="{{ csrf_token() }}"/>

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
