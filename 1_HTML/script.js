const draggable = document.getElementById("draggable");

let offsetX,
  offsetY,
  isDragging = false;

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  if (isDragging) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
  }
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}
