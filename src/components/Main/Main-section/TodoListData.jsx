import React, { useContext, useState } from 'react';
import { TodoDataContext } from '../../../context/TodoData/TodoData';
import { ResetModalContext } from '../../../context/resetModal/ResetModal';
import ModalInput from './Modal/ModalInput';

export default function TodoListData({ todoData }) {
  const { content, id, isCheck } = todoData;
  const { removeHandler, isCheckedHandler } = useContext(TodoDataContext);
  const { modalHandler, modal, selectedItem } = useContext(ResetModalContext);

  const modals = () => {
    modalHandler(todoData);
  };

  const checkHandler = e => {
    const isCheck = e.target.checked ? 'completed' : 'active';
    isCheckedHandler({ ...todoData, isCheck });
  };

  return (
    <>
      <div>
        <li
          className='itemBox__li'
          style={{ color: isCheck == 'completed' ? 'red' : 'black' }}
        >
          <div className='li__text'>
            <input
              type='checkbox'
              checked={isCheck == 'completed'}
              onChange={checkHandler}
            />
            <span>{content}</span>
            <span>{isCheck.toString()}</span>
          </div>

          <div className='li_btn__box'>
            <button onClick={modals}>수정</button>
            <button
              onClick={() => {
                removeHandler(id);
              }}
            >
              삭제
            </button>
          </div>
        </li>
      </div>
      {modal && <ModalInput todoData={todoData} selectedItem={selectedItem} />}
    </>
  );
}
