function calculateArea(length, width) {
  if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
    return undefined; // If either length or width is not a positive number, return undefined.
  }

  const area = length * width;
  return area;
}