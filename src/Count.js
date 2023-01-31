import { useState  } from "react";
import Button from 'react-bootstrap/Button';

function Count() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")

    function incrementValue() {
        setCount((prevCount) => prevCount + 1)
        if(count >= 10) {
            setCount(10);
        }
    }

    function decrementValue() {
        setCount((prevCount) => prevCount - 1)
        if(count <= 0) {
            setCount(0);
        }
    }

    function handleOnChange(e) {
        setInput((prevInput) => e.target.value);
    }

  return (
    <>
        <Button variant="primary" onClick={decrementValue}>-</Button>
        <span>{count}</span>
        <Button variant="primary" onClick={incrementValue}>+</Button> <br />
        <input type="text" onChange={handleOnChange} value={input}></input>
        
    </>
  );
}

export default Count;
