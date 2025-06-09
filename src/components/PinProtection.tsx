
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

interface PinProtectionProps {
  onSuccess: () => void;
  title: string;
  description?: string;
}

const PinProtection = ({ onSuccess, title, description }: PinProtectionProps) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const correctPin = '10172023';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === correctPin) {
      onSuccess();
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A0D33] to-black font-sora flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-gray-800/50 rounded-lg p-8 text-center"
      >
        <h1 className="text-3xl font-bold text-[#E0BBE4] mb-4">
          Protected Content
        </h1>
        <h2 className="text-xl text-white mb-6">{title}</h2>
        {description && (
          <p className="text-gray-300 mb-6">{description}</p>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pin" className="block text-white text-sm font-medium mb-2">
              Enter PIN
            </label>
            <Input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Enter PIN"
              className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              maxLength={8}
            />
          </div>
          
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}
          
          <Button
            type="submit"
            className="w-full bg-[#E0BBE4] text-black hover:bg-[#d4a5d8] font-semibold"
          >
            Access Content
          </Button>
        </form>
        
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm mb-4">Don't have a PIN?</p>
          <a
            href="mailto:admin@whitegloveai.com"
            className="inline-flex items-center gap-2 text-[#E0BBE4] hover:text-[#d4a5d8] transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact Admin
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default PinProtection;
