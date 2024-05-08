### DJS01: Mars Climate Orbiter Challenge

#### Challenge Overview

In this challenge I was tasked to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

##### Problem Areas to Address

1. **Unit Mismatch**:
   -the units were not converted which resulted to the answers being incorrect

2. **Parameter Misalignment**:
   the parameters were not listed the same examp. when the function was initialized the parameters were (vel, acc, time) but when calling the function it was (acc, vel, time)

## Original code

1. **Identify and Understand Errors**: Analyse the provided functions to determine how unit mismatches and parameter misalignments cause incorrect results.

2. **Refactor and Correct**: the function was called before it was initialized. I did the opposite

## Changes made

-I renamed the variables
-used function expression and assigned it an arrow function
-I initialized the functions then called it after
-added a function on each calculation so I can be able to throw errors using an if statement
