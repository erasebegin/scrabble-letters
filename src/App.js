import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomColor from 'randomcolor';

function App() {

  const [generatedLetter, setGeneratedLetter] = useState('🐱‍🏍')

  const [currentColor, setCurrentColor] = useState('')

  const [letterArr, setLetterArr] = useState([
    'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A',
    'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D',
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
    'F', 'F', 'G', 'G', 'G', 'H', 'H',
    'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M',
    'N', 'N', 'N', 'N', 'N', 'N',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O',
    'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R',
    'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T',
    'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z',
    '✨', '✨'
  ])

  useEffect(() => { setCurrentColor(randomColor()) }, [generatedLetter])

  const generateRandom = () => {
    let rand = Math.floor(Math.random() * letterArr.length);
    let prevRand;
    if (rand !== prevRand) {
      prevRand = rand;
    } else {
      rand = Math.floor(Math.random() * letterArr.length);
    }

    const tempArr = letterArr
    tempArr.splice(rand - 1, 1)

    setGeneratedLetter(letterArr[rand])
    setLetterArr(tempArr)

    console.log(tempArr)
    console.log("color is:", currentColor)
  };

  if (letterArr.length > 0) {
    return (
      <MainContainer currentColor={currentColor}>
        <button onClick={generateRandom}>
          <h1>{generatedLetter}</h1>
        </button>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer>
        <h1>Oh no, the letters are all gone!🙊</h1>
      </MainContainer>
    )
  }

}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Patrick Hand', cursive;
  button {
      background-color: ${props => props.currentColor};
      font-size: 4rem;
      padding: 2em;
      min-width: 30vw;
      min-height: 30vh;
      transition: 200ms;
      border: none;
      border-radius: 10px;
      transform: initial;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
      font-family: 'Patrick Hand', cursive;

      &:hover {
        transform: translate(5px,5px);
        transition: 200ms;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
      }
    }
  h1 {
    text-shadow: 0px 0px 10px rgba(255,255,255,0.5);
  }

  @media(max-width: 768px) {
    button { 
      min-width: 90%;
    }
  }
`

export default App;
