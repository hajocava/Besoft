import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    function handleScroll() {
      setScrollPos(window.pageYOffset);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPos;
}