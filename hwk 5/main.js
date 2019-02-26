//function 1 - open tip
const openTip1 = function (e) {
	const t1 = document.getElementsByClassName('tip')[0];
	t1.style.display = "inline";
}

//function 2 - close tip
const closeTip = function (e) {
	const alltips = document.getElementsByClassName('tip');
	for (let a of alltips){
		a.style.display = "none";
	}
}

//assign kimchi node to list of all imgs
const kimchi = document.getElementsByClassName('galleryentry-1col');

//add the mouseout listener and closeTip on all the imgs
for (let l of kimchi){
	l.addEventListener('mouseout', closeTip);
}

//creating new node from the first element of class galleryentry-1col, then we are adding mouseover listener
const kimchi1 = document.getElementsByClassName('galleryentry-1col')[0];
kimchi1.addEventListener('mouseover', openTip1);


//create a div named tip1, create text node named text
const tip1 = document.createElement('div');
const text1 = document.createTextNode('Eat Me');

//attach text to div
tip1.appendChild(text1);

//attach the div to first img 
kimchi1.appendChild(tip1);

//give tip1 class tip
tip1.classList.add('tip');





