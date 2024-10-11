export const splitArray = (array: number[], chunkSize: number): number[][] => {
//  const chunkSize = Math.ceil(array.length / numChunks);
  const chunks: number[][] = []; // [[1,2,3,4], [5,6,7,8], [9,10]
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize)); // Basically slicing it by array.slice(0, 4), array.slice(4, 8), array.slice(8, 12)
  }
  return chunks;
};

export const dayCounter = (array: number[], iterations: number): Promise<number[]> => {
  return new Promise((resolve) => {
    for (let count = 0; count < iterations; count++) {
      const newFish = array.filter(num => num === 0).length; // Count how many 0s
      array = array.map(num => (num === 0 ? 6 : num - 1)); // Decrement or reset to 6
      
      // Append new fish after mapping
      for (let i = 0; i < newFish; i++) {
          array.push(9); // Push 9 for each zero found
      }
    }
    resolve(array);
  });
};
