
function CalcBottomKeypad({HandleKeypadClick})
{
    return (
        <div className="calc-bottom-keypad">
            <div className="key-grid-left">
                <div className="key-row">
                    <button type="button" onClick={() => HandleKeypadClick("7")} className="key-btn" value="7">7</button>
                    <button type="button" onClick={() => HandleKeypadClick("8")} className="key-btn" value="8">8</button>
                    <button type="button" onClick={() => HandleKeypadClick("9")} className="key-btn" value="9">9</button>
                </div>
                <div className="key-row">
                    <button type="button" onClick={() => HandleKeypadClick("4")} className="key-btn" value="4">4</button>
                    <button type="button" onClick={() => HandleKeypadClick("5")} className="key-btn" value="5">5</button>
                    <button type="button" onClick={() => HandleKeypadClick("6")} className="key-btn" value="6">6</button>
                </div>
                <div className="key-row">
                    <button type="button" onClick={() => HandleKeypadClick("1")} className="key-btn" value="1">1</button>
                    <button type="button" onClick={() => HandleKeypadClick("2")} className="key-btn" value="2">2</button>
                    <button type="button" onClick={() => HandleKeypadClick("3")} className="key-btn" value="3">3</button>
                </div>
                <div className="key-row">
                    <button type="button" onClick={() => HandleKeypadClick("0")} className="key-btn" value="0">0</button>
                    <button type="button" onClick={() => HandleKeypadClick(".")} className="key-btn" value=".">.</button>
                    <button type="button" onClick={() => HandleKeypadClick("=")} className="key-btn" value="=">=</button>
                </div>
            </div>
            <div className="key-grid-right">
                <div>
                    <button type="button" onClick={() => HandleKeypadClick("C")} className="key-btn-util">❌</button>
                </div>
                <div>
                    <button type="button" onClick={() => HandleKeypadClick("/")} className="key-btn-util">&divide;</button>
                </div>
                <div>
                    <button type="button" onClick={() => HandleKeypadClick("*")} className="key-btn-util">&times;</button>
                </div>
                <div>
                    <button type="button" onClick={() => HandleKeypadClick("-")} className="key-btn-util">-</button>
                </div>
                <div>
                    <button type="button" onClick={() => HandleKeypadClick("+")} className="key-btn-util">+</button>
                </div>
            </div>
        </div>
    )
}

export default CalcBottomKeypad;