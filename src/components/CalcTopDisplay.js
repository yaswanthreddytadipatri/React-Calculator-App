import { useState } from "react";
import CalcBottomKeypad from "./CalcBottomKeypad";

function CalcTopDisplay({inp, result})
{
    return (
        <div className="calc-top-display">
            <div className="input-display">
                <input name="exp_input" className="exp-input" value={inp} />
                <p className="exp-output">{result}</p>
            </div>
        </div>
    )
}
    




export default CalcTopDisplay;