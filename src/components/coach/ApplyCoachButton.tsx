'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import ApplyCoachModal from '@/components/coach/ApplyCoachModal';

export default function ApplyCoachButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="primary"
        size="lg"
        showArrow
        onClick={() => setIsOpen(true)}
      >
        Apply to Join Our Team
      </Button>

      <ApplyCoachModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}