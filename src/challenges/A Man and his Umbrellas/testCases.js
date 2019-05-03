const testCases = [
  {
    input: {
      weather: ['rainy', 'clear', 'rainy', 'cloudy'],
    },
    output: 2,
  },
  {
    input: {
      weather: ['sunny', 'windy', 'sunny', 'clear'],
    },
    output: 0,
  },
  {
    input: {
      weather: ['rainy', 'rainy', 'rainy', 'rainy', 'thunderstorms', 'rainy'],
    },
    output: 1,
  },
];
