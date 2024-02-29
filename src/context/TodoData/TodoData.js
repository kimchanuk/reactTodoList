import React, { createContext, useState } from 'react';

export const TodoDataContext = createContext();

export function TodoDataContextProvider({ children }) {
  const [TodoItem, setTodoItem] = useState([
    {
      id: 1,
      content: '리엑트 공부하기',
      isCheck: 'active',
    },
    {
      id: 2,
      content: '병신짓 하지말기',
      isCheck: 'active',
    },
  ]);

  const [inputValue, setInputValue] = useState('');

  const inputValueChange = e => {
    const targetValue = e.target.value;
    setInputValue(targetValue);
  };

  const submitHandler = e => {
    e.preventDefault();
    setTodoItem([
      ...TodoItem,
      { id: Math.random(), content: inputValue, isCheck: 'active' },
    ]);
    setInputValue('');
  };

  const isCheckedHandler = updated => {
    const data = TodoItem.map(t => (t.id == updated.id ? updated : t));
    setTodoItem(data);
  };

  //확인 버튼

  const removeHandler = mapId => {
    const removeValue = TodoItem.filter(data => data.id != mapId);
    setTodoItem(removeValue);
  };
  //삭제 버튼

  const resetHandler = e => {
    e.preventDefault();
  };

  //수정버튼
  return (
    <TodoDataContext.Provider
      value={{
        submitHandler,
        inputValueChange,
        TodoItem,
        inputValue,
        setTodoItem,
        removeHandler,
        resetHandler,
        isCheckedHandler,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
}
