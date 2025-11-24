type InvestmentData = {
    initialAmount: number;
    anualContribution: number,
    duaration: number,
    expectdReturn: number
}

type InvestmentResult = {
    year: string,
    totalAmount: number,
    totalContributions: number,
    totalInterestEarned: number
}

type CalculationResult = InvestmentResult[] | string // if the duaration is invalid, return string message

function calculatorInvesment(data: InvestmentData): CalculationResult {
    const { initialAmount, anualContribution, duaration, expectdReturn } = data;

    if( initialAmount < 0 ){
        return "Initial amount must be at least zero"
    }
    
    if( duaration <= 0) {
        return 'No invalid amount of years provided'
    }

    if( expectdReturn < 0 ){
        return "Expected return must be at least zero"
    }

    let total = initialAmount;
    let totalContributions = 0 ;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duaration; i++) {
        total = total * (1 + expectdReturn / 100); // expectdReturn is in percentage
        totalInterestEarned = total - initialAmount - totalContributions;
        totalContributions += anualContribution;

        total += anualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions
        })

    }

    return annualResults

}

function printResult(results: CalculationResult) {
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
}

