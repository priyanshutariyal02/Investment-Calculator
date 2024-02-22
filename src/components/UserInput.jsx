import React, { useState } from 'react'

const UserInput = ({ onChange, userInput }) => {

    // This useState function now use in App.jsx.

    // const [userInput, setUserInput] = useState({
    //     initialInvestment: 10000,
    //     annualInvestment: 1000,
    //     expectedReturn: 6,
    //     duration: 10,
    // }); 

    // This function now use in App.jsx.

    // function handleChange(inputIdentifier, newValue) {
    //     setUserInput(prevUserInput => {
    //         return {
    //             ...prevUserInput,
    //             [inputIdentifier]: newValue,
    //         }
    //     })
    // }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type='number'
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange('expectedInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={(event) => onChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}

export default UserInput;