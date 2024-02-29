import React, { useContext } from 'react';
import './ItemBox.css';
import { TodoDataContext } from '../../../context/TodoData/TodoData';
import TodoListData from './TodoListData';

export default function ItemBox() {
  const { TodoItem } = useContext(TodoDataContext);

  return (
    <div className='itemBox'>
      <ul className='itemBox__ul'>
        {TodoItem.map(todoData => (
          <TodoListData todoData={todoData} key={todoData.id} />
        ))}
      </ul>
    </div>
  );
}
