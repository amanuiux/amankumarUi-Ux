import React from 'react';
import QRCode from 'qrcode.react';

const QrCode = () => {
    const portfolioUrl = "https://your-portfolio-website.com";

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Scan the QR Code to Visit My Portfolio</h1>
            <QRCode value={portfolioUrl} size={200} />
            <p style={{ marginTop: '20px' }}>Or visit: <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">{portfolioUrl}</a></p>
        </div>
    );
};

export default QrCode;