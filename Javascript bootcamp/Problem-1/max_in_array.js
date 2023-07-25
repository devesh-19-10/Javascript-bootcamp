function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined; // If the input is not an array or the array is empty, return undefined.
  }

  let max = numbers[0]; // Assume the first element is the maximum.

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // If the current element is greater than the current maximum, update max.
    }
  }

  return max;
}