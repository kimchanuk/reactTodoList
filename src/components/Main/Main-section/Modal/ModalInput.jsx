import React, { useContext, useEffect, useState } from 'react';
import './modalInput.css';
import { ResetModalContext } from '../../../../context/resetModal/ResetModal';
import { TodoDataContext } from '../../../../context/TodoData/TodoData';

export default function ModalInput({ selectedItem, todoData }) {
  const { id, content, isChecked } = selectedItem;
  const { modalHandler } = useContext(ResetModalContext);

  const { TodoItem, setTodoItem } = useContext(TodoDataContext);

  const [resetInputValue, setResetInputValue] = useState(content);

  const resetHandler = e => {
    const value = e.target.value;
    setResetInputValue(value);
  };

  const resetHandlers = e => {
    e.preventDefault();
    const data = TodoItem.map(t =>
      t.id === id
        ? { ...todoData, id: Math.random(), content: resetInputValue }
        : t
    );
    setTodoItem(data);
    modalHandler();
  };

  return (
    <div className='modalInput'>
      <form>
        <input value={resetInputValue} onChange={resetHandler} />
        <button onClick={resetHandlers}>수정</button>
        <button onClick={modalHandler}>취소</button>
      </form>
    </div>
  );
}

// const [v, sV] = useState(content);

//   const resetHandler = e => {
//     const value = e.target.value;
//     sV(value);
//   };

//   const resetComplete = e => {
//     e.preventDefault();
//     const data = TodoItem.map(t =>
//       t.id == selectedItem.id
//         ? { ...todoData, id: Math.random(), content: v }
//         : t
//     );
//     setTodoItem(data);
//     modalHandler();
//   };
