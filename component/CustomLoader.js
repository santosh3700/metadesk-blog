// CustomLoader.js
import React, { useEffect } from 'react';
// import userLoca
import styled from 'styled-components';

const Screen = styled.div`
  // position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: white;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #1b5299;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

// const Screen = styled.div`` adde with comment

// const Balls = styled.div``

const CustomLoader = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  }, []);

  return (
    <Screen>
      <Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
      </Balls>
    </Screen>
  );
};

export default CustomLoader;
