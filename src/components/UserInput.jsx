import React, { useState } from 'react'

const UserInput = () => {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1000,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            }
        })
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => handleChange('initialInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type='number' required value={userInput.annualInvestment}
                        onChange={(event) => handleChange('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type='number' required
                        value={userInput.expectedReturn}
                        onChange={(event) => handleChange('expectedInvestment', event.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type='number' required value={userInput.duration}
                        onChange={(event) => handleChange('duration', event.target.value)} />
                </p>
            </div>
        </section>
    )
}

export default UserInput;