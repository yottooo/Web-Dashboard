import Header from "@/Components/Header.jsx";

export default function Board() {
    // Define hyperlinks for each grid cell
    const items = [
        { link: 'https://example.com/1', color: '#4CAF50', title: 'Go to Page 1' },
        { link: '', color: '#f44336', title: 'Edit Item 2' },
        { link: 'https://example.com/3', color: '#2196F3', title: 'Go to Page 3' },
        { link: '', color: '#FF9800', title: 'Edit Item 4' },
        { link: 'https://example.com/5', color: '#9C27B0', title: 'Go to Page 5' },
        { link: 'https://example.com/6', color: '#00BCD4', title: 'Go to Page 6' },
        { link: '', color: '#FFEB3B', title: 'Edit Item 7' },
        { link: 'https://example.com/8', color: '#673AB7', title: 'Go to Page 8' },
        { link: 'https://example.com/9', color: '#795548', title: 'Go to Page 9' },
    ];

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
                        {/* Delete button */}
                        <button
                            className="delete-button"
                            onClick={() => {
                                window.location.href = `/delete/${index}`;
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>

        </>
    );
}
