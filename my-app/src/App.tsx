import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [calc, setCalc] = useState("")
    const [result,setResult] = useState("");
     const [val, setVal] = useState('0')

    const ops = ['/','*','+','-','='];

     const updateCalc = (value: string) => {
         if (
             ops.includes(value) && calc === '' ||
             ops.includes(value) && ops.includes(calc.slice(-1)
             )
         ){
             return;
         }
         setCalc(calc + value)

         if (!ops.includes(value)) {
             setResult(eval(calc + value).toString())
         }
     }
     const calculate = () => {
         setCalc(eval(calc).toString())
     }
     const deleteLast = () => {
         if (calc == ''){
             return;
         }
         const value = calc.slice(0, -1);
         setCalc(value)
     }
    return (
        <div className="App">
            <div className="screen">
                {result ? <span>{result}</span> : ''}&nbsp;
                {calc || "0"}
                {/*<input className="screen" value={val} onChange={(event)=>setVal(event.target.value)}/>*/}
            </div>
            <div className="button-row">
                <button className="button" onClick={() => updateCalc('')}>C</button>
                <button className="button double-button" onClick={deleteLast} >←</button>
                <button className="button" onClick={() => updateCalc("/")}>/</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => updateCalc("7")}>7</button>
                <button className="button" onClick={() => updateCalc("8")}>8</button>
                <button className="button" onClick={() => updateCalc("9")}>9</button>
                <button className="button" onClick={() => updateCalc("*")}>*</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => updateCalc("4")}>4</button>
                <button className="button" onClick={() => updateCalc("5")}>5</button>
                <button className="button" onClick={() => updateCalc("6")}>6</button>
                <button className="button" onClick={() => updateCalc("+")}>+</button>
            </div>
            <div className="button-row">
                <button className="button" onClick={() => updateCalc("1")}>1</button>
                <button className="button" onClick={() => updateCalc("2")}>2</button>
                <button className="button" onClick={() => updateCalc("3")}>3</button>
                <button className="button" onClick={() => updateCalc("-")}>-</button>
            </div>
            <div className="button-row">
                <button className="button triple-button" onClick={() => updateCalc("0")}>0</button>
                <button className="button" onClick={calculate}>=</button>
            </div>


        </div>
    )
        /*const double_button = [
        {val:'←',id:'←'},
    ]
    const button1 = [
        {val:'C',id:'C'},
        {val:'←',id:'←'},
        {val:'÷',id:'÷'},
    ]
    const button2 = [
        {val:'9',id:9},
        {val:'8',id:8},
        {val:'7',id:7},
        {val:'×',id:'×'},
    ]
    const button3 = [
        {val:'6',id:6},
        {val:'5',id:5},
        {val:'4',id:4},
        {val:'-',id:'-'},
    ]
    const button4 = [
        {val:'3',id:3},
        {val:'2',id:2},
        {val:'1',id:1},
        {val:'+',id:'+'},
    ]
    const button5 = [
        {val:'0',id:0},
        {val:'=',id:'='},
    ]
    return (
        <div className="App">
            <input value={val} onChange={(e)=>setVal(e.target.value)}/>
            <div style={{marginTop:'1rem'}}>
                {
                    double_button.map((data)=>(
                    <button onClick={()=>setVal(data.val)} key={data.id}>
                        {data.val}
                    </button>
                ))

                }
            </div>
            <div style={{marginTop:'1rem'}}>
                {
                    button1.map((data)=>(
                        <button onClick={()=>setVal(data.val)} key={data.id}>
                            {data.val}
                        </button>
                    ))
                }
            </div>
            <div>
                {
                    button2.map((data)=>(
                        <button onClick={()=>setVal(data.val)} key={data.id}>
                            {data.val}
                        </button>
                    ))
                }
            </div>
            <div>
                {
                    button3.map((data)=>(
                        <button onClick={()=>setVal(data.val)} key={data.id}>
                            {data.val}
                        </button>
                    ))
                }
            </div>
            <div>
                {
                    button4.map((data)=>(
                        <button onClick={()=>setVal(data.val)} key={data.id}>
                            {data.val}
                        </button>
                    ))
                }
            </div>
            <div>
                {
                    button5.map((data)=>(
                        <button onClick={()=>setVal(data.val)} key={data.id}>
                            {data.val}
                        </button>
                    ))
                }
            </div>
        </div>
    );*/

}

export default App;
