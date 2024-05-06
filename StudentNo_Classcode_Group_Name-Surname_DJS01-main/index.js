/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityKmPerHour = 10000; // velocity (km/h)
const accelerationMetersPerSecSquared = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const remainingFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

const d2 = (initialDistance + (velocityKmPerHour / 3.6) * timeSeconds) / 1000; //calcultes new distance
const rf = remainingFuel - fuelBurnRate * timeSeconds; //calculates remaining fuel
const vel2 = calcNewVel(
  accelerationMetersPerSecSquared,
  velocityKmPerHour,
  timeSeconds
); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(
  accelerationMetersPerSecSquared,
  velocityKmPerHour,
  timeSeconds
) {
  if (
    typeof velocityKmPerHour !== "number" ||
    typeof accelerationMetersPerSecSquared !== "number" ||
    typeof velocityKmPerHour !== "number"
  ) {
    console.log("invalid input. Parameters must be numbers");
  }
  return (
    velocityKmPerHour + accelerationMetersPerSecSquared * 3.6 * timeSeconds
  );
}

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
