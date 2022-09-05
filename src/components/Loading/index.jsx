import React from 'react';
import style from './Loading.module.scss';

function Loading() {
  return (
    <div className={style.loading}>
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_b88nh30c.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
    </div>
  );
}

export default Loading;
