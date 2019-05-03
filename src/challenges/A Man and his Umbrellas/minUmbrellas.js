function minUmbrellas(weather) {
  let state = [0, 0];
  let index = 0;
  weather.forEach(w => {
    const nextIndex = index === 0 ? 1 : 0;
    if (w === 'rainy' || w === 'thunderstorms') {
      state[nextIndex]++;
      state[index] > 0 && state[index]--;
    }
    index = nextIndex;
  });
  return state[0] + state[1];
}

export default minUmbrellas;