window.onload = function(){
  document.getElementById('bruteforce').style.backgroundColor = "rgba(255, 255, 255, 0.05)";
}

//tab functions
function openInfo(evt, infoName){
	console.log(evt);
  var i, tabContent, tabLinks;
  
  // Get elements with class tabContent and hide
  tabContent = document.getElementsByClassName("tabContent");
  for(i = 0; i < tabContent.length; i++){
    tabContent[i].style.display = "none";
  }
  
  // Get elements with class tabLinks and remove class active
  tabLinks = document.getElementsByClassName("tabLinks");
  for(i = 0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
	  tabLinks[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  }
	
  // Show the current tab, and make it active
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  evt.currentTarget.className += " active";
}

var ope = false;

function aaaaa() {
	var x = document.getElementById("links");
	if (ope) {
		ope = false;
		x.style.animation = "close cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards";

	} else {
		ope = true;
		x.style.display = "block";
		x.style.animation = "open cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards";
			}
}