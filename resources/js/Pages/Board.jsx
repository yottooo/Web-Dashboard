import Header from "@/Components/Header.jsx";
import {useEffect, useState} from "react";

export default function Board() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch buttons from the backend
        const fetchButtons = async () => {
            try {
                const response = await fetch('/api/getButtons'); // Adjust the API route if necessary
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching buttons:', error);
            }
        };

        fetchButtons();
    }, []);

    const handleDelete = async (index) => {
        if (!window.confirm("Are you sure you want to delete this item?")) {
            return; // Exit if the user cancels the deletion
        }

        try {
            const response = await fetch('/api/deleteButton', {
                method: 'POST', // Since you're using POST for deletion
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({ index: index }), // Send the index as the id to the backend
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Delete Success:', result);
                // Optionally refresh the data or update the UI after deletion
                window.location.reload(); // Reload the current page
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <Header/>

            <div className="grid-container">
                {items.map((item, index) => (
                    <div key={index} className="grid-item">
                        <button
                            className="grid-button"
                            style={{backgroundColor: item.color}}
                            onClick={() => {
                                // If link is empty, navigate to `/edit/{index}`, otherwise navigate to the actual link
                                if (item.link === '') {
                                    window.location.href = `/edit/${index}`;
                                } else {
                                    window.location.href = item.link;
                                }
                            }}
                        >
                            {item.title}
                        </button>
                        {/* Conditionally render the edit button if the item.link is not empty */}
                        {item.link !== '' && (
                            <>
                            <button
                                className="edit-button"
                                onClick={() => {
                                    window.location.href = `/edit/${item.id}`;
                                }}
                            >
                                Edit
                            </button>
                            <button
                            className="delete-button"
                            onClick={() => handleDelete(item.id)} // Pass the index to the delete handler
                    >
                        Delete
                    </button>
                            </>
                )}
                {/* Delete button */}

            </div>
            ))}
        </div>

</>
)
    ;
}
