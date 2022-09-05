import React from 'react';
import Header from '../../components/Header';
import style from './NotFound.module.scss';

function NotFound() {
  return (
    <div className={style.notFound}>
      <Header />
      <div>
        <lottie-player
          src="https://assets1.lottiefiles.com/temp/lf20_dzWAyu.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default NotFound;
