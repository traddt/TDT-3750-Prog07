// initialize the counter and the array
var numbernames=0;
var names = new Array();

function SortNames() {
	
	// Get the name from the text field and make it uppercase
	thename=(document.theform.newname.value).toUpperCase();
	// Add the name to the array
	names[numbernames]=thename;
	// Increment the counter
	numbernames++;
	// Sort the array
	names.sort();
	
	//Number the List
	var numberednames = new Array();
	for (var i=0; i<numbernames; i++) {
		numberednames[i] = (i+1) + ". " + names[i];
	}
	
	document.theform.sorted.value=numberednames.join("\n");
}

function checkSort() {
	if(event.key === 'Enter') {
		SortNames();
		event.preventDefault();
	}
}

