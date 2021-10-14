import React, { useState } from "react";
import ReactDOM from "react-dom";
import { initialArray, correctResult, printResults } from "./utils";

import "./styles.css";

function App() {
  const [yourResult, setYourResult] = useState(null);

  const compute = () => {
    // here code
    const result = initialArray;
    setYourResult(result);
  };

  const stringifiedYourResult = printResults(yourResult);
  const stringifiedCorrectResult = printResults(correctResult);

  const isCorrect = stringifiedYourResult === stringifiedCorrectResult;

  const marginTop = { marginTop: 10 };

  return (
    <div className="App">
      <h2>Преобразуйте массив в объект, отсортированный по тэгам</h2>
      <button onClick={compute}>Compute</button>
      {yourResult && (
        <>
          <div
            style={{
              ...marginTop,
              color: isCorrect ? "green" : "red"
            }}
          >
            Ваш результат: {isCorrect ? "успех!" : "попробуйте ещё раз :("}
          </div>
          <div style={marginTop}>Ваш объект: {stringifiedYourResult}</div>
          <div style={marginTop}>
            Корректный объект: {stringifiedCorrectResult}
          </div>
        </>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
