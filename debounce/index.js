function debounce(func, timeout = 300) {
  return (...args) => {
    console.log(...args);
  };
}

const test = debounce();

test(1, 2, 3);

// event handler
function handler() {
  console.log('hi');
}

const callback = handler;
callback();
