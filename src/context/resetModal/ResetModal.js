import React, { createContext, useContext, useState } from 'react';

export const ResetModalContext = createContext();

export function ResetModalContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const modalHandler = modalItem => {
    setModal(prev => !prev);
    setSelectedItem(modalItem);
  };

  return (
    <ResetModalContext.Provider
      value={{
        modal,
        setModal,
        modalHandler,
        selectedItem,
      }}
    >
      {children}
    </ResetModalContext.Provider>
  );
}
