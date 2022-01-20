import React, { useState, useRef, useEffect } from 'react';

type ReturnType = {
  isExpanded: boolean;
  toggleButtonRef: React.MutableRefObject<HTMLButtonElement | null>;
  dropdownItemsRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
  handleDropdownToggleClick: () => void;
  handleDropdownToggleKeyDown: (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => void;
  handleDropdownItemKeyDown: (
    e: React.KeyboardEvent<HTMLAnchorElement>
  ) => void;
};

const useDropdown = (dropdownItemsCount: number): ReturnType => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [focusedItem, setFocusedItem] = useState(-1);
  const dropdownItemsRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const handleDropdownToggleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDropdownToggleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const { key } = e;
    switch (key) {
      case 'Down': // Edge
      case 'ArrowDown':
      case 'Space':
      case 'Enter': {
        e.preventDefault();
        setFocusedItem(0);
        setIsExpanded(true);
        break;
      }
      case 'Up': // Edge
      case 'ArrowUp': {
        e.preventDefault();
        setFocusedItem(dropdownItemsCount - 1);
        setIsExpanded(true);
        break;
      }
      default:
    }
  };

  const handleDropdownItemKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    const { key } = e;
    switch (key) {
      case 'Enter':
      case 'Space': {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        target.click();
        break;
      }
      case 'Esc': // Edge
      case 'Escape': {
        e.preventDefault();
        setIsExpanded(false);
        setFocusedItem(-1);
        break;
      }
      case 'Up': // Edge
      case 'ArrowUp':
      case 'Left': // Edge
      case 'ArrowLeft': {
        e.preventDefault();
        setFocusedItem(
          focusedItem === 0 ? dropdownItemsCount - 1 : focusedItem - 1
        );
        break;
      }
      case 'Down': // Edge
      case 'ArrowDown':
      case 'Right': // Edge
      case 'ArrowRight': {
        e.preventDefault();
        setFocusedItem(
          focusedItem === dropdownItemsCount - 1 ? 0 : focusedItem + 1
        );
        break;
      }
      case 'Home':
        e.preventDefault();
        setFocusedItem(0);
        break;
      case 'End': {
        e.preventDefault();
        setFocusedItem(dropdownItemsCount - 1);
        break;
      }
      default:
    }
  };

  useEffect(() => {
    if (focusedItem === -1) {
      const toggleButton = toggleButtonRef?.current as HTMLButtonElement;
      toggleButton?.focus();
    } else {
      const dropdownItem = dropdownItemsRefs?.current[
        focusedItem
      ] as HTMLAnchorElement;
      dropdownItem?.focus();
    }
  }, [focusedItem, isExpanded]);

  return {
    isExpanded,
    toggleButtonRef,
    dropdownItemsRefs,
    handleDropdownToggleClick,
    handleDropdownToggleKeyDown,
    handleDropdownItemKeyDown
  };
};

export default useDropdown;
