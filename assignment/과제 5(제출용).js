function handleResize() {
  let WindowInnerWidth = window.innerWidth;
  
  if(WindowInnerWidth < 600) {
    document.body.style.backgroundColor = '#3498db'
  } else if(WindowInnerWidth < 1100) {
    document.body.style.backgroundColor = '#9b59b6'
  } else {
    document.body.style.backgroundColor = '#f39c12'
  }
}

window.addEventListener("resize", handleResize);