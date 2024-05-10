### DJS01: Mars Climate Orbiter Challenge

#### Challenge Overview

In this challenge I was tasked to debug, refactor, and enhance JavaScript functions designed for determining the trajectory of a spacecraft. The initial functions are flawed and may result in incorrect calculations.

##### Problem Areas to Address

1. **Unit Mismatch**:
   -The units were not converted which resulted to the answers being incorrect

2. **Parameter Misalignment**:
   the parameters were not listed the same examp. when the function was initialized the parameters were (vel, acc, time) but when calling the function it was (acc, vel, time)

## Original code

**Identify and Understand Errors**:
-The parameters were not in order as when the function which resulted to an error because the order of the parameters matters when you are calling the function, this won't necessarily give you a syntax error but it will produce incorrect results, resulting to your function not working as expected

-Some of the units were not converted, which resulted to incorrect answers, for an example when calculating the distance the values were provided in different units and I had to convert the velocity if I didn't then it was gonna give me an incorrect answer.

**Refactor and Correct**

## Changes made

-I made the code more readable by renaming the variables so they can make more sense (e.g., I changed vel to velocityKmPerHour)

-I used function expression to have more compact syntax especially because I had to return values

-The functions were called before they were initialized, I refactored the code by initializing the functions first and then called them after.

-We only had one function which was to calculate the velocity, I added functions on each calculation so I can be able to throw errors using an if statement

-I converted some units to achieve the correct results.
