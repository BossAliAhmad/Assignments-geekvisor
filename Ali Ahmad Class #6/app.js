function promptAndCalculate() {
    let expression = prompt("Please enter your full expression (e.g., 5 + 3 * 2):");
    if (expression != null) { 
        try {
            let result = eval(expression);
            alert("The result is: " + result);
            console.log("Calculated result: " + result);
        } catch (error) {
            alert("Invalid input! Please enter a valid expression.");
            console.error("Error calculating expression: ", error);
        }
    }
}
