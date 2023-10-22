import styled from "styled-components";

const App = () => {

  return (
    <Wrapper>
      <div className="parent">
        <div className="child"></div>
      </div>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  .parent {
    background-color: blue;
    height: 400px;
    width: 400px
  }
  .child {
    background-color: red;
    height: 50%;
    width: 50%;

    animation: left-to-right 1s forwards infinite alternate;
  }

  .parent:hover .child {
    animation-play-state: paused;
  }

  @keyframes  left-to-right{
    0% {
      transform: translateX(0);
    }
    33% {
      transform: translateY(100%);
    }
    66% {
      transform: translateX(100%) translateY(100%);
    } 
    100% {
      transform: translateX(100%)
    }
  }
`;