
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MAISPIndex from './maisp/Index';
import TextAI from './maisp/TextAI';
import TextAIForGood from './maisp/TextAIForGood';
import VoiceAI from './maisp/VoiceAI';
import MediaAI from './maisp/MediaAI';
import MediaAIEquipment from './maisp/MediaAIEquipment';
import MediaAIEquipmentProtected from './maisp/MediaAIEquipmentProtected';
import AvatarAI from './maisp/AvatarAI';
import HumanoidAI from './maisp/HumanoidAI';
import AutomateAI from './maisp/AutomateAI';
import VendorAI from './maisp/VendorAI';

const MAISP = () => {
  return (
    <Routes>
      <Route path="/" element={<MAISPIndex />} />
      <Route path="/text-ai" element={<TextAI />} />
      <Route path="/text-ai-for-good" element={<TextAIForGood />} />
      <Route path="/voice-ai" element={<VoiceAI />} />
      <Route path="/media-ai" element={<MediaAI />} />
      <Route path="/media-ai-equipment" element={<MediaAIEquipment />} />
      <Route path="/media-ai-equipment-protected" element={<MediaAIEquipmentProtected />} />
      <Route path="/avatar-ai" element={<AvatarAI />} />
      <Route path="/humanoid-ai" element={<HumanoidAI />} />
      <Route path="/automate-ai" element={<AutomateAI />} />
      <Route path="/vendor-ai" element={<VendorAI />} />
    </Routes>
  );
};

export default MAISP;
