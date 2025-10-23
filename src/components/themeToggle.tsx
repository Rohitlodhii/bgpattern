'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // mark component as mounted
  }, []);

  if (!mounted) return null; // render nothing on server

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-secondary rounded-sm p-1.5 cursor-pointer border border-border'
    >
      {theme === 'dark' ? <Moon className='size-4' /> : <Sun className='size-4' />}
    </button>
  );
};

export default ThemeToggle;
