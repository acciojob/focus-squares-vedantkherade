//your JS code here. If required.
let squares = document.querySelectorAll(".square")

squares.forEach((sq) => {
  sq.addEventListener("mouseover", () => {
    squares.forEach((s) => s.style.backgroundColor = "#6F4E37"); // all coffee
    sq.style.backgroundColor = "#E6E6FA"; // hovered one lavender
  });
	
 sq.addEventListener("mouseout", () => {
    squares.forEach((s) => s.style.backgroundColor = "#E6E6FA"); // reset all lavender
  });
})