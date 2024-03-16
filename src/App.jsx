import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C")
    {
      setCalVal("");
    }
    else if(buttonText === "=")
    {
      const result = eval(calVal);
      setCalVal(result);
    }
    else
    {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Calculator</h1>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonsContainer
          onButtonClick={onButtonClick}
        ></ButtonsContainer>
      </div>
    </div>
  )
}

export default App;
