//your JS code here. If required.
function removeSelectedColor(){
	const colorSelect=document.getElementById('colorSelect');
	if(colorSelect.selectedIndex!==-1){
		colorSelect.remove(colorSelect.selectedIndex);
	}else{
		console.log("please select a color to remove")
	}}
	const removeButton=document.getElementById('removeButton');

removeButton.addEventListener('click',removeSelectedColor);