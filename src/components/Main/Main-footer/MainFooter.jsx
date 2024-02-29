import React, { useContext, useState } from 'react';
import './mainFooter.css';
import { TodoDataContext } from '../../../context/TodoData/TodoData';

export default function MainFooter() {
  const { submitHandler, inputValueChange, inputValue } =
    useContext(TodoDataContext);

  return (
    <div className='mainFooter'>
      <form className='footerForm'>
        <input
          className='footerForm_input'
          type='text'
          value={inputValue}
          onChange={inputValueChange}
        />
        <input
          className='footerForm_btn'
          type='submit'
          value='확인'
          onClick={submitHandler}
        />
      </form>
    </div>
  );
}
