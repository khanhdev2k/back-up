"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatorInvesment(data) {
    const { initialAmount, anualContribution, duaration, expectdReturn } = data;
    if (initialAmount < 0) {
        return "Initial amount must be at least zero";
    }
    if (duaration <= 0) {
        return "No invalid amount of years provided";
    }
    if (expectdReturn < 0) {
        return "Expected return must be at least zero";
    }
    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duaration; i++) {
        // Growth from returns
        total = total * (1 + expectdReturn / 100);
        // Interest earned up to this year
        totalInterestEarned = total - initialAmount - totalContributions;
        // Add annual contribution
        totalContributions += anualContribution;
        total += anualContribution;
        annualResults.push({
            year: i + 1,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        });
    }
    return annualResults;
}
function printResult(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(` Total Amount: $${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(` Total Contributions: $${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(` Total Interest Earned: $${yearEndResult.totalInterestEarned.toFixed(0)}`);
        console.log('---------------------------');
    }
} // => print the output here
const InvestmentData = {
    initialAmount: 35000,
    anualContribution: 12,
    duaration: 10,
    expectdReturn: 23000
};
const results = calculatorInvesment(InvestmentData);
printResult(results);
//# sourceMappingURL=calculator.js.map