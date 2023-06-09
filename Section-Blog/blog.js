// Select all elements with the "box" class
const boxes = document.querySelectorAll(".box");

// Create a new Intersection Observer
const options = {
  root: null, // use the viewport as the root
  threshold: 0, // 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;

      let valueDisplays = document.querySelectorAll(".num");
      let interval = 4000;

      valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
          startValue += 1;
          valueDisplay.textContent = startValue;
          if (startValue == endValue) {
            clearInterval(counter);
          }
        }, duration);
      });
    } else {
      entry.target.style.opacity = 0;
    }
  });
}, options);

// Start observing each target element
boxes.forEach((box) => observer.observe(box));
