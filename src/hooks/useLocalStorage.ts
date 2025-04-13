'use client';

import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string) {
  const [storedValue, setStoredValue] = useState<T | string | null>();

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setStoredValue(item);
    } catch (error) {
      console.warn(`Errore nel leggere ${key} da localStorage`, error);
    }
  }, [key]);

  const setValue = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.warn(`Errore nel salvare ${key} su localStorage`, error);
    }
  };

  return [storedValue, setValue] as const;
}
