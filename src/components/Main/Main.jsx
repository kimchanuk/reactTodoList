import React from 'react';
import './main.css';
import MainHeader from './Main-Header/MainHeader';
import MainSection from './Main-section/MainSection';
import MainFooter from './Main-footer/MainFooter';

export default function Main() {
  return (
    <div className='container'>
      <MainHeader />
      <MainSection />
      <MainFooter />
    </div>
  );
}
