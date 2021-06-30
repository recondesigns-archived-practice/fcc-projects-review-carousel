// CardControls helper functions
export function handleNext(state, setter) {
  if (state >= 0) {
    setter(() => state + 1);
  } else if (state < 0) {
    console.log("Less than zero");
  }
}

export function handlePrevious(state, setter) {
  if (state > 0) {
    setter(() => state - 1);
  } else if (state <= 0) {
    console.log("Less than zero, or zero.");
  }
}
