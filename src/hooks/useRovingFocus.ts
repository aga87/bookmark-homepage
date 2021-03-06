import React, { useState, useRef, useEffect } from 'react';

type ReturnType = {
  widgetItemsRefs: React.MutableRefObject<(HTMLElement | null)[]>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
};

const useRovingFocus = (
  widgetItemsCount: number,
  withManualActivation: boolean,
  initialFocus = 0
): ReturnType => {
  const [focusedItem, setFocusedItem] = useState(initialFocus);
  const widgetItemsRefs = useRef<(HTMLElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const { key } = e;
    switch (key) {
      case 'Enter':
      case 'Space': {
        e.preventDefault();
        if (!withManualActivation) return;
        const target = e.target as HTMLElement;
        target.click();
        break;
      }
      case 'Right': // Edge
      case 'ArrowRight':
      case 'Down': // Edge
      case 'ArrowDown': {
        e.preventDefault();
        setFocusedItem(
          focusedItem === widgetItemsCount - 1 ? 0 : focusedItem + 1
        );
        break;
      }
      case 'Left': // Edge
      case 'ArrowLeft':
      case 'Up': // Edge
      case 'ArrowUp': {
        e.preventDefault();
        setFocusedItem(
          focusedItem === 0 ? widgetItemsCount - 1 : focusedItem - 1
        );
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocusedItem(0); // focus first
        break;
      case 'End': {
        e.preventDefault();
        setFocusedItem(widgetItemsCount - 1); // focus last
        break;
      }
      default:
    }
  };

  useEffect(() => {
    widgetItemsRefs.current[focusedItem]?.focus();
  }, [focusedItem]);

  return { widgetItemsRefs, handleKeyDown };
};

export default useRovingFocus;
