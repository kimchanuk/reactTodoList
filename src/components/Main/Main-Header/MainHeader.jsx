import React, { useContext } from 'react';
import './mainHeader.css';
import { DarkModeContext } from '../../../context/DarkMode/DarkMode';
import { TodoDataContext } from '../../../context/TodoData/TodoData';

export default function MainHeader() {
  const { darkModeHandler } = useContext(DarkModeContext);
  const { TodoItem, setTodoItem } = useContext(TodoDataContext);

  const allTodoItemHandler = () => {
    TodoItem.map(t => {
      if (t.isCheck == 'active' && t.isCheck == 'completed') {
        setTodoItem([...TodoItem]);
      }
    });
  };

  const activeHandler = () => {
    const data = TodoItem.filter(
      t => t.isCheck == 'active' && { ...t, isCheck: 'active' }
    );
    setTodoItem(data);

    // TodoItem.map(t => {
    //   if (t.isCheck == 'active') {
    //     setTodoItem();
    //   }
    // });
  };

  // 투두아이템 순회하여 데이터 요소의 체크가 엑트면,
  // 투두아이템을 엑티브된 아이템만 변수에 담아서 줘

  const completedHandler = () => {};

  return (
    <div className='mainHeader'>
      <ul className='mainHeader__list'>
        <li>
          <button onClick={darkModeHandler}>다크모드</button>
        </li>
        <li>
          <button onClick={allTodoItemHandler}>전체 리스트</button>
        </li>
        <li>
          <button onClick={activeHandler}>해야될 리스트</button>
        </li>
        <li>
          <button onClick={completedHandler}>완료된 리스트</button>
        </li>
      </ul>
    </div>
  );
}
