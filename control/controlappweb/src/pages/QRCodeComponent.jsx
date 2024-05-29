import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QRCodeComponent() {
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/generate-qr')
      .then(response => {
        setQrCode(response.data.src);
      })
      .catch(error => {
        console.error('Error generating QR code', error);
      });
  }, []);

  return (
    <div className='flex justify-center items-center flex-col'>
      <h1>Scan this QR Code with your mobile app</h1>
     <div className='mt-10'>{qrCode && <img src={qrCode} alt="QR Code" />}</div> 
    </div>
  );
}

export default QRCodeComponent;
