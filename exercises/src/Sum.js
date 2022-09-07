import React from "react";
export function Sum({ numbers = [9, 5, 4, 3, 1] }) {
    const mySum = numbers.reduce((prev, curr) => prev + curr);
    return <h1>The sum is:{mySum}</h1>
}
//BY PASSING A VALUE TO THE PARAMETER'S FUNCTION...LIKE ABOVE