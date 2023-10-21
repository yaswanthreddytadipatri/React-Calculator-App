import {useState} from "react";
import CalcTopDisplay from "./CalcTopDisplay.js";
import CalcBottomKeypad from './CalcBottomKeypad.js';
import './css/CalcTopDisplay.css';
import './css/CalcBottomKeypad.css';

var canEraseAll = false;

function CalcContainer()
{
    var [inp, setInp] = useState();
    var [result, setResult] = useState();

    function HandleKeypadClick(val)
    {
        var isOperator = /[\+\-\x\/]/.test(val);
        var isEquals = (val == '=')
        var isClear = (val == 'C')

        if (!isOperator && !isEquals && !isClear)
        {
            if (inp == undefined)
            {
                setInp(val);
            }
            else
            {
                setInp(inp+val);
            }
        }

        if (isEquals)
        {
            setResult(evaluate(inp));
        }
        else if (isOperator)
        {
            if (isNumeric(inp))
            {
                setInp(inp+val);
            }
            if (hasOperator(inp))
            {
                setInp(inp.slice(0, -1) + val);
            }
        }

        else if (isClear)
        {
            setInp(inp.slice(0,-1));
        }

        return;
    }

    return (
        <div className="calc-container">
            <CalcTopDisplay inp={inp} result={result}/>
            <CalcBottomKeypad HandleKeypadClick={HandleKeypadClick}/>
        </div>
    )
}

function isNumeric(s)
{
    return /\d$/.test(s);
}

function hasOperator(s)
{
    return /[\+\-\x\/]$/.test(s);
}

function evaluate(expr)
{
    try
    {
        const result = eval(expr);

        if (isNaN(result))
        {
            throw new Error("Invalid expr.");
        }
        return '= '+result;
    } 
    catch (error)
    {
        return "Error: " + error.message;
    }
}

export default CalcContainer;