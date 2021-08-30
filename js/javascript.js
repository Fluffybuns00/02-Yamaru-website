var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName('project');
var spans=document.getElementsByClassName("close");

// for every button (is every project), display the modal on click. 
for(let i=0;i<btns.length;i++){
  btns[i].onclick = function() {
      modals[i].style.display = "block";
  }
}

//for each span in the modals, when clicked, modals display turns to none.
for(let i=0;i<spans.length;i++){
  spans[i].onclick = function() {
      modals[i].style.display = "none";
  }
}

//for each modal, if window is pressed while a particular modal is display block, turn into display none.
for(let i=0;i<modals.length;i++){
  window.addEventListener("click", function(event) {
    if (event.target == modals[i])  {
    modals[i].style.display = "none";}
  });
}
