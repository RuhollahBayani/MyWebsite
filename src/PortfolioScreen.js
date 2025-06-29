import React from 'react';

// Example photo data
const photos = [
    { id: 1, src: '/Media/dune.jpg', alt: 'Photo 1' },
    { id: 2, src: '/Media/Retouch.jpg', alt: 'Photo 2' },
    { id: 3, src: '/Media/Retouch2.jpg', alt: 'Photo 3' },
    { id: 4, src: '/Media/Product.jpg', alt: 'Photo 4' },
    // Add more photos as needed
];

const PortfolioScreen = () => {
    return (
        <React.Fragment>
        <div style={{ padding: '2rem' }}>
            <h1>My Portfolio</h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1rem',
                }}
            >
                {photos.map((photo) => (
                    <div key={photo.id} style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                ))}
            </div>
        </div>
        </React.Fragment>
    );
};

export default PortfolioScreen;