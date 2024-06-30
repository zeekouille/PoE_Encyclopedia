import React, { useEffect, useState } from 'react';

interface PopupProps {
  message: string;
  success: boolean;
}

const Popup: React.FC<PopupProps> = ({ message, success }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Disparition automatique après 3 secondes

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: success ? '#4CAF50' : '#F44336',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

export default Popup;
