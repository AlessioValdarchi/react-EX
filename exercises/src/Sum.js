import React from "react";
export function Sum({ numbers = [] }) {
    const mySum = numbers.reduce((prev, curr) => prev + curr);
    return <h1>The sum is:{mySum}</h1>
}