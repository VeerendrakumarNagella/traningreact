import React, {useState} from 'react'

const Learn = () => {
    const [result, setresult] = useState("");
    const handleChange = (e) => {
      setresult(result.concat(e.target.name))
    }
    const clear = () => {
     setresult("");
    }
    const backspace = () => {
     setresult(result.slice(0, result.length - 1));
    }
    const claculate = () => {
      try {
        setresult(eval(result))
      }
        catch(err) {
           setresult("Error")
        } 
    }
  return (
    <div className="container">
       <form >
            <input type="text" value = {result}/>
        </form>
        <div className="keypad">
      <button className='highlight' onClick={backspace} id="backspace">C</button>
      <button className='highlight' onClick={clear} id="clear">CE</button>
      <br />
      <button name="1" onClick={handleChange} >1</button>
      <button name="2" onClick={handleChange}>2</button>
      <button name="3" onClick={handleChange}>3</button>
      <button className='highlight' name="+" onClick={handleChange}>+</button>
      <br />
      <button name="4" onClick={handleChange}>4</button>
      <button name="5" onClick={handleChange}>5</button>
      <button name="6" onClick={handleChange}>6</button>
      <button className='highlight' name="-" onClick={handleChange}>-</button>
      <br />
      <button name="7" onClick={handleChange}>7</button>
      <button name="8" onClick={handleChange}>8</button>
      <button name="9" onClick={handleChange}>9</button>
      <button className='highlight' name="*" onClick={handleChange}>&times;</button>
      <br />
      <button name="." onClick={handleChange}>.</button>
      <button name="0" onClick={handleChange}>0</button>
      <button onClick={claculate} id="result">=</button> 
      <button className='highlight' name="/" onClick={handleChange}>&divide;</button> <br /> 
      </div>
    </div>
  )
}

export default Learn;
