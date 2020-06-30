import React from 'react';
import ReactDOM from 'react-dom';

function Site() {
    return (
        <div class="navbar">
            <h1>Simple Calculator</h1>
            <App />
        </div>
    )
}
function App() {
    const [equation, setEquation] = React.useState("0")
    const [haveAnswer, setAnswer] = React.useState(null)

    function handleChange(event) {
        event.target.value = equation
    }
    function handleClick(event) {

        let ceq = "" + equation
        console.log(ceq)
        const ecpy = ceq.replace(/ /g, "");
        switch (event.target.getAttribute('id')) {
            case 'clear':
                setEquation("0");
                break;
            case 'decimal':
                let w = equation.split(" ").slice(-1)
                if (w.length > 0 && w[0].length > 0 && !w[0].match(/\./g)) {
                    setEquation(!haveAnswer ? equation + "." : ".");
                    setAnswer(null);
                }
                break;
            case 'add':

                if (haveAnswer) {
                    setEquation(haveAnswer + " +    ")
                    setAnswer(null);
                    break;
                }
                if (ecpy.match(/[/*+-]-$/)) {
                    break;
                }
                if (ecpy.match(/[/*+-]$/)) {
                    console.log(equation)
                    let eq = equation;
                    setEquation(eq.replace(/..$/g, "+ "))
                    break;
                }
                setEquation(equation + " + ");
                break;
            case 'subtract':
                if (haveAnswer) {
                    setEquation(haveAnswer + " - ")
                    setAnswer(null);
                    break;
                }
                if (ecpy.match(/[/*+-]-$/)) {
                    break;
                }
                setEquation(equation + (equation.slice(-1) === " " ? "- " : " - "));
                break;
            case 'multiply':
                if (haveAnswer) {
                    setEquation(haveAnswer + " X    ")
                    setAnswer(null);
                    break;
                }
                if (ecpy.match(/[/*+-]-$/)) {
                    break;
                }
                if (ecpy.match(/[/*+-]$/)) {
                    let eq = equation;
                    setEquation(eq.replace(/..$/g, "* "))
                    break;
                }
                setEquation(equation + " * ");
                break;
            case 'divide':
                if (haveAnswer) {
                    setEquation(haveAnswer + " /    ")
                    setAnswer(null);
                    break;
                }
                if (ecpy.match(/[/*+-]-$/)) {
                    break;
                }
                if (ecpy.match(/[/*+-]$/)) {
                    let eq = equation;
                    setEquation(eq.replace(/..$/g, "/ "))
                    break;
                }
                setEquation(equation + " / ");
                break;
            case 'equals':
                let eq = equation;
                if (eq.match(/^0/)) {
                    eq = eq.slice(1)
                }
                const answer = eval(eq)
                // eq = eq + " = " + answer
                setAnswer(answer)
                setEquation(answer);
                break;
            case 'zero':
                if (equation.length === 1 && equation === "0") {
                    break;
                }
                setEquation(!haveAnswer ? equation + "0" : "0");
                setAnswer(null);
                break;
            case 'one':
                setEquation(!haveAnswer ? equation + "1" : "1");
                setAnswer(null);
                break;
            case 'two':
                setEquation(!haveAnswer ? equation + "2" : "2");
                setAnswer(null);
                break;
            case 'three':
                setEquation(!haveAnswer ? equation + "3" : "3");
                setAnswer(null);
                break;
            case 'four':
                setEquation(!haveAnswer ? equation + "4" : "4");
                setAnswer(null);
                break;
            case 'five':
                setEquation(!haveAnswer ? equation + "5" : "5");
                setAnswer(null);
                break;
            case 'six':
                setEquation(!haveAnswer ? equation + "6" : "6");
                setAnswer(null);
                break;
            case 'seven':
                setEquation(!haveAnswer ? equation + "7" : "7");
                setAnswer(null);
                break;
            case 'eight':
                setEquation(!haveAnswer ? equation + "8" : "8");
                setAnswer(null);
                break;
            case 'nine':
                setEquation(!haveAnswer ? equation + "9" : "9");
                setAnswer(null);
                break;
            default:
                break;
        }

    }
    function Button0({ datext, cval, idval = "None" }) {

        if (cval === "one") {
            return (
                <div className="dabutton">
                    <div className="butt" id={idval} onClick={handleClick}> {datext} </div>
                </div>
            )
        } else if (cval === 'two') {
            return (
                <div className="button2" id={"__" + idval}>
                    <div className="butt2" id={idval} onClick={handleClick}> {datext} </div>
                </div>
            )

        } else if (cval === "three") {
            return (
                <div className="button3" >
                    <div className="butt3" id={idval} onClick={handleClick}> {datext} </div>
                </div>
            )
        }
    }


    return (
        <div className=" container">
            <div className="calculator">
                <textarea className='display' id="display" value={equation} onChange={handleChange}>xz</textarea>
                <div className="keypad">
                    <div className="leftcontainer">
                        <Button0 datext="C" cval="one" idval="clear" />
                        <Button0 datext="÷" cval="one" idval="divide" />
                        <Button0 datext="X" cval="one" idval="multiply" />
                        <Button0 datext="7" cval="one" idval="seven" />
                        <Button0 datext="8" cval="one" idval="eight" />
                        <Button0 datext="9" cval="one" idval="nine" />
                        <Button0 datext="4" cval="one" idval="four" />
                        <Button0 datext="5" cval="one" idval="five" />
                        <Button0 datext="6" cval="one" idval="six" />
                        <Button0 datext="1" cval="one" idval="one" />
                        <Button0 datext="2" cval="one" idval="two" />
                        <Button0 datext="3" cval="one" idval="three" />

                        <div className="lowercontainer">
                            <Button0 datext="0" cval="two" idval="zero" />
                            <Button0 datext="." cval="one" idval="decimal" />
                        </div>
                    </div>
                    <div className="rightcontainer">
                        <Button0 datext="-" cval="one" idval="subtract" />
                        <Button0 datext="+" cval="three" idval="add" />
                        <Button0 datext="=" cval="three" idval="equals" />

                    </div>
                </div>
            </div>
        </div>
    )

}
ReactDOM.render(<Site />, document.getElementById('root'))
export default Site;
