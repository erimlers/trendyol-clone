'use client'
import React, { useState, useEffect } from 'react';
import MobileFilterMain from './MobileFilterMain';
import MobileFilterDetail from './MobileFilterDetail';

function MobileFilterBar({ setIsOpen }) {
  const [activeCategory, setActiveCategory] = useState(null);

  // Modal açıkken arkadaki sayfanın kaymasını (scroll) engelliyoruz
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleListResults = () => {
    setIsOpen(false);
  };

  if (activeCategory) {
    return (
      <MobileFilterDetail
        category={activeCategory}
        setActiveCategory={setActiveCategory}
      />
    );
  }

  return (
    <MobileFilterMain
      setIsOpen={setIsOpen}
      setActiveCategory={setActiveCategory}
      handleListResults={handleListResults}
    />
  );
}

export default MobileFilterBar;