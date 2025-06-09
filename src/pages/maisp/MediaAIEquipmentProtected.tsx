
import React, { useState, useEffect } from 'react';
import PinProtection from '@/components/PinProtection';
import MediaAIEquipment from './MediaAIEquipment';

const MediaAIEquipmentProtected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if user is already authenticated in this session
  useEffect(() => {
    const authenticated = sessionStorage.getItem('mediaai-equipment-authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handlePinSuccess = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem('mediaai-equipment-authenticated', 'true');
  };

  if (!isAuthenticated) {
    return (
      <PinProtection
        onSuccess={handlePinSuccess}
        title="WhitegloveAI MediaAI Equipment Setup"
        description="This content requires a PIN to access. Please enter your PIN below."
      />
    );
  }

  return <MediaAIEquipment />;
};

export default MediaAIEquipmentProtected;
