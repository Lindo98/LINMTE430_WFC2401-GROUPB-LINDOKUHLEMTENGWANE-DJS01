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

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (
  accelerationMetersPerSecSquared,
  velocityKmPerHour,
  timeSeconds
) => {
  if (accelerationMetersPerSecSquared < 1) {
    throw new Error("Acceleration must be in meters per second squared.");
  }
  return (
    velocityKmPerHour + accelerationMetersPerSecSquared * 3.6 * timeSeconds
  );
};

const calcDistance = (initialDistance, velocityKmPerHour, timeSeconds) => {
  if (velocityKmPerHour == "km/h") {
    throw new Error("Velocity must be converted to meters per second.");
  }
  return (initialDistance + (velocityKmPerHour / 3.6) * timeSeconds) / 1000;
};

const calcRemainingFuel = (remainingFuel, fuelBurnRate, timeSeconds) => {
  if (remainingFuel < 0) {
    throw new Error("Remaining fuel can not be 0");
  }

  return remainingFuel - fuelBurnRate * timeSeconds;
};

const d2 = calcDistance(initialDistance, velocityKmPerHour, timeSeconds);
const rf = calcRemainingFuel(remainingFuel, fuelBurnRate, timeSeconds);
const vel2 = calcNewVel(
  accelerationMetersPerSecSquared,
  velocityKmPerHour,
  timeSeconds
);

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
