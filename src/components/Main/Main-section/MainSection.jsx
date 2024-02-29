import React, { useContext } from 'react';
import './mainSection.css';
import ItemBox from './ItemBox';
import { ResetModalContext } from '../../../context/resetModal/ResetModal';
import ModalInput from './Modal/ModalInput';

export default function MainSection() {
  const { modal, modalHandler } = useContext(ResetModalContext);
  return (
    <div className='mainSection'>
      <ItemBox />
    </div>
  );
}
