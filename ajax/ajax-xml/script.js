// JavaScript Document

/* Ajax Asynschronous Request  */


	/* var request = new XMLHttpRequest(); */

	/* Supporting Older IE Browsers */
	var request;

	if(window.XMLHttpRequest){
		request = new XMLHttpRequest();
	}
	else {
		request = new  ActiveXObject("Microsoft.XMLHTTP");
	}


	request.open('GET', 'data.xml');

	request.onreadystatechange = function(){
		if((request.readyState === 4) && (request.status === 200)){
			
			var items = request.responseXML.getElementsByTagName('name');

			var output = "<ul>";

			for (i=0; i< items.length ; i++){
			 	output += "<li>" + items[i].firstChild.nodeValue + "</li>";
			}

			output += "</ul>";

			document.getElementById("update").innerHTML = output;

		}
	};


	request.send();

	

