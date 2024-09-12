// The area in which the plants are contained is circular, with a radius of 5 meters.

// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.

const PI = 3.1415;
const radius = 5; // meters
const plantSpace = 0.8; // square meters per plant

// Calculate the area of the circle (Fromular ref line 3.)
const area = PI * radius * radius;

// Calculate maximum capacity of the garden
const maxCapacity = Math.floor(area / plantSpace);

// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

function managePlantGrowth(weeks) {
  const initialPlantCount = 20;
  const plantCount = calculatePlantCount(initialPlantCount, weeks);

// Calculate percentages of the garden capacity
const plantPercentage = (plantCount / maxCapacity) * 100;

if (plantPercentage > 80) {
    console.log("Prune the plants to prevent exceeding garden capacity.");
} else if (plantPercentage >= 50) {
    console.log("Monitor the plant growth as it is growing at an acceptable rate.");
  } else {
    console.log("There is room to plant more plants.");
  }
}
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const weeks = 3; 
managePlantGrowth(weeks);


// Initial conditions
const initialPlantCount = 100;
const weeks = 10;

// Calculate plant count after 10 weeks
const plantCountAfter10Weeks = calculatePlantCount(initialPlantCount, weeks);
console.log("Number of plants after 10 weeks:", plantCountAfter10Weeks);

// Calculate total space required
const totalSpaceRequired = plantCountAfter10Weeks * plantSpace;
console.log("Total space required (in square meters):", totalSpaceRequired);

// Calculate the new radius of the garden
const newRadius = Math.sqrt(totalSpaceRequired / PI);
console.log("New radius of the expanded garden (in meters):", newRadius);