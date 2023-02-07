import React from 'react';

const NotFound: React.FC = () => {
  // 回到首页
  const goHome = () => {};

  return (
    <div className='not-found'>
      <img
        alt="404"
        src="//m.360buyimg.com/img/jfs/t1/188600/39/11847/54645/60e410ddE6dcafc1a/3df8a49630727361.png"
      />
      <div onClick={goHome}>
        回到首页
      </div>
    </div>
  );
};

export default NotFound;
