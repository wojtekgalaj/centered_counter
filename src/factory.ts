// Create a function that will return a number starting at start. Each call will retrun an incremented number by step.
//
// @param start - The starting number
// @param step - The step size
export const factory = (start: number, step: number) => {
  let counter = start;

  const count = () => {
    return (counter += step);
  };

  return count;
};
