function clickHandler() {
  alert("click");
}

function restartHandler() {
  alert("restart!");
}

click.addEvertListener("click", clickHandler);
restart.addEvertListener("click", restartHandler);
