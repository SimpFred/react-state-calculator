import { useState, useEffect } from "react";
import "./App.css";
import Panel from "../src/components/Panel";
import Display from "../src/components/Display";
import Button from "../src/components/Button";

const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Clear"];
const operatorButtons = ["+", "-", "*", "÷"];

function App() {
  const [panel1Value, setPanel1Value] = useState(0);
  const [panel2Value, setPanel2Value] = useState("+");
  const [panel3Value, setPanel3Value] = useState(0);
  const [result, setResult] = useState(0);
  const [clearIsPressed, setClearIsPressed] = useState(false);
  const [storedValue, setStoredValue] = useState(null);

  useEffect(() => {
    calculateResult();
    setClearIsPressed(false);
  }, [clearIsPressed]);

  const handleButtonClick = (label, panel) => {
    if (label === "Clear") {
      if (panel === 1) {
        setPanel1Value(0);
        setClearIsPressed(true);
      }
      if (panel === 3) {
        setPanel3Value(0);
        setClearIsPressed(true);
      }
    } else {
      if (panel === 1) {
        setPanel1Value((prev) =>
          prev === 0 ? label : parseInt(prev.toString() + label)
        );
      }
      if (panel === 2) {
        setPanel2Value(label);
      }
      if (panel === 3) {
        setPanel3Value((prev) =>
          prev === 0 ? parseInt(label) : parseInt(prev.toString() + label)
        );
      }
    }
  };

  const calculateResult = () => {
    let res = 0;
    switch (panel2Value) {
      case "+":
        res = panel1Value + panel3Value;
        break;
      case "-":
        res = panel1Value - panel3Value;
        break;
      case "*":
        res = panel1Value * panel3Value;
        break;
      case "÷":
        res = panel1Value / panel3Value;
        break;
      default:
        break;
    }
    setResult(res);
  };

  const handleStore = () => {
    setStoredValue(result);
  };

  const handleRecall = (panel) => {
    if (storedValue !== null) {
      if (panel === 1) {
        setPanel1Value(storedValue);
      }
      if (panel === 3) {
        setPanel3Value(storedValue);
      }
    }
  };

  return (
    <div className="calculator">
      <Panel
        displayValue={panel1Value}
        buttons={numberButtons}
        onButtonClick={(label) => handleButtonClick(label, 1)}
        recallButton={"Recall"}
        handleRecall={() => handleRecall(1)
        }
      />
      <Panel
        displayValue={panel2Value}
        buttons={operatorButtons}
        onButtonClick={(label) => handleButtonClick(label, 2)}
      />
      <Panel
        displayValue={panel3Value}
        buttons={numberButtons}
        onButtonClick={(label) => handleButtonClick(label, 3)}
        recallButton={"Recall"}
        handleRecall={() => handleRecall(3)
        }
      />
      <div className="panel answer">
        <Display value={result} />
        <div>
          <Button label="=" onClick={calculateResult} />
          <Button label="Store" onClick={handleStore} />
        </div>
      </div>
    </div>
  );
}

export default App;