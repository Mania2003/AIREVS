import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterToggle = ({ onSelect }) => {
  const [role, setRole] = useState('Buyer');
  const roles = ['Buyer', 'Owner'];

  const handleToggle = (newRole) => {
    setRole(newRole);

    // Map UI role to backend roles
    if (newRole === 'Buyer') {
      onSelect('user');
    } else {
      onSelect('agent');
    }
  };

  return (
    <div className="relative flex p-1 bg-white/10 rounded-full w-full max-w-sm mx-auto shadow-xl border border-white/20 backdrop-blur">

      {/* Bubble Slider Behind Text */}
      <motion.div
        layoutId="roleToggle"
        className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50"
        animate={{
          left: role === 'Buyer' ? '0.25rem' : '50%',
          width: '50%'
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 250 }}
      />

      {roles.map((r) => (
        <button
          key={r}
          onClick={() => handleToggle(r)}
          className={`flex-1 py-2 text-sm font-semibold relative z-10 transition duration-300 ${
            role === r ? 'text-white' : 'text-white/60'
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RegisterToggle;
