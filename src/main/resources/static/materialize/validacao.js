function validaCheckbox(){
    	if(document.getElementById("disponivelS").checked) {
    	    document.getElementById('disponivelN').disabled = true;
    	}
 }

function validaCheckboxCategoria(){
	if(document.getElementById("disponivelS").checked) {
	    document.getElementById('disponivelN').disabled = true;
	}
	
	if(document.getElementById("2saboresS").checked) {
	    document.getElementById('2saboresN').disabled = true;
	}
	
	if(document.getElementById("precoMedioS").checked) {
	    document.getElementById('precoMedioN').disabled = true;
	}
}