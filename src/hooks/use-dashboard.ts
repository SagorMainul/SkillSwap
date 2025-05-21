
import { useState, useEffect } from 'react';

export const useDashboard = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Mark dashboard as ready after a short delay
    // This is just to ensure any initialization is complete
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return { isReady };
};
