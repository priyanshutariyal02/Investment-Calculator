// In this component, we calculate result data.
import React from 'react'
import { calculateInvestmentResults } from "../util/investment.js";

const Result = ({ input }) => {

    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);

    return (
        <div> Result...</div> // this is for temporary. we can replace it later.
    )
}

export default Result;


// if you managing your state differently, or you use different property names in your user input state you of course first must transform your input object, or create a new user input object.