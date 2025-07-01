
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VCAIOIndex from './vcaio/Index';
import Enable from './vcaio/Enable';
import Launch from './vcaio/Launch';
import Adopt from './vcaio/Adopt';
import ChiefAIOfficer from './vcaio/ChiefAIOfficer';
import LaunchAI from './vcaio/LaunchAI';

const VCAIO = () => {
  return (
    <Routes>
      <Route path="/" element={<VCAIOIndex />} />
      <Route path="/enable" element={<Enable />} />
      <Route path="/launch" element={<Launch />} />
      <Route path="/adopt" element={<Adopt />} />
      <Route path="/chief-aio-officer" element={<ChiefAIOfficer />} />
      <Route path="/launch-ai" element={<LaunchAI />} />
    </Routes>
  );
};

export default VCAIO;
