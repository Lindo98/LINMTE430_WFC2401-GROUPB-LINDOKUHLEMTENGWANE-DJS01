// I have named my variables using full names to clearly indicate what they are for

const velocityKmPerHour = 10000;
const accelerationMetersPerSecSquared = 3;
const timeSeconds = 3600;
const initialDistance = 0;
const remainingFuel = 5000;
const fuelBurnRate = 0.5;

// This is a function to calculate a new velocity, I used function expression
// I declared the calcNewVel then assigned it an arrow function then added some parameters
//
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

const calcNewDistance = (initialDistance, velocityKmPerHour, timeSeconds) => {
  if (velocityKmPerHour == "km/h") {
    throw new Error("Velocity must be converted to meters per second.");
  }
  return (initialDistance + (velocityKmPerHour / 3.6) * timeSeconds) / 1000;
};

const calcRemainingFuel = (remainingFuel, fuelBurnRate, timeSeconds) => {
  if (remainingFuel < 0) {
    throw new Error("Need more fuel");
  }

  return remainingFuel - fuelBurnRate * timeSeconds;
};

const d2 = calcNewDistance(initialDistance, velocityKmPerHour, timeSeconds);
const rf = calcRemainingFuel(remainingFuel, fuelBurnRate, timeSeconds);
const vel2 = calcNewVel(
  accelerationMetersPerSecSquared,
  velocityKmPerHour,
  timeSeconds
);

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);
