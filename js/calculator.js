"use strict";

 
function inputClick(value) {
	
	var viewValue = document.getElementById("view").value;
	
//	var var1 = document.getElementById("view").addEventListener
	var var3 = viewValue.slice(-1);
	
	if (value!="AC" && value!="=" && value != "."){		//sprawdzamy czy znaki są różne od AC, "." oraz "="
		document.getElementById("view").value += value;  //wpolu wprowadzenia dodajekolejne liczby i znaki działania
	} else if (value =="AC") {		//jeśli nacisne przycisk AC, to czysci caly kod
		document.getElementById("view").value = "";
	} else if (value =="."){		//jesli ostatni znak jest kropka to nic sie nie dodaje 
		if (viewValue.slice(-1) != ".") {
			document.getElementById("view").value += value;  //jesli nie jes kropka to dodajemy znak . w polu wprowadzania
		}
	}
	 else {
		 	if (isNaN(var3) || viewValue.indexOf("/0") > -1) { //true jezeli nie jest liczba i indexOf sprawdza czy znajduje sie taki ciąg znakow
				document.getElementById("view").value = "Error!";
			} else {
			var result = eval(viewValue);  				//funkcja eval wylicza wynik i wyświetla w polu wprowadzania
			document.getElementById("view").value = result;		//jeśli ostatni znak nie jest liczbą, to zwraca błąd
			}
	}
	
}