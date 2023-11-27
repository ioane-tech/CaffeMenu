import React, { createContext, useContext, useState } from 'react';

const OrderedItemsContext = createContext();

export function useOrderedItems() {
  return useContext(OrderedItemsContext);
}

export function OrderedItemsProvider({ children }) {
  const [orderedItems, setOrderedItems] = useState([]);

  const addItem = (item) => {
    setOrderedItems([...orderedItems, item]);
  };
  const removeItem = (item) => {
    const updatedItems = orderedItems.filter((orderedItem) => orderedItem !== item);
    setOrderedItems(updatedItems);
  };

  return (
    <OrderedItemsContext.Provider value={{ orderedItems, addItem,removeItem }}>
      {children}
    </OrderedItemsContext.Provider>
  );
}