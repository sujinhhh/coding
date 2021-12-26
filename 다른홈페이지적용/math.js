let rectangleArea = (length, width) => {
  return length * width;
};

const countParams = (fn) => {
  return (...params) => {
    if (params.length !== fn.length) {
      throw new Error(`Incorrect Number of Parmameters for${fn.name}`);
    }
    return `너비는 ${fn(...params)}`;
  };
};

const requireIntegers = (fn) => {
  return (...params) => {
    params.forEach((params) => {
      if (!Number.isInteger(params)) {
        throw new TypeError(`Params for ${fn.name} must be intergers`);
      }
    });
    return fn(...params);
  };
};

rectangleArea = countParams(rectangleArea);
rectangleArea = requireIntegers(rectangleArea);
console.log(rectangleArea(4, 8));
