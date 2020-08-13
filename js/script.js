function maFonction(){
	var nouvVariable = prompt("Donne la variable : ", "");
	if (nouvVariable) {
		alert("Tu as mis : " + nouvVariable);
	} else {
		alert("Tu n'as rien mis");
	}
}

function maFonction2(){
	var premierChiffre = prompt("Donne le premier chiffre : ", "");
	var calcul = prompt ("Choisir le signe de calcul", "");
	var deuxiemeChiffre = prompt("Donnes le deuxième chiffre :", "");
	if (calcul == "+"){
		var resultat = (parseInt(premierChiffre) + parseInt(deuxiemeChiffre));
		alert("Le résultat de " + premierChiffre + calcul + deuxiemeChiffre + " est : " + resultat);
		return;
	} if (calcul == "-"){
		var resultat = (parseInt(premierChiffre) - parseInt(deuxiemeChiffre));
		alert("Le résultat de " + premierChiffre + calcul + deuxiemeChiffre + " est : " + resultat);
		return;
	} if (calcul == "*"){
		var resultat = (parseInt(premierChiffre) * parseInt(deuxiemeChiffre));
		alert("Le résultat de " + premierChiffre + calcul + deuxiemeChiffre + " est : " + resultat);
		return;
	} if (calcul == "/"){
		var resultat = (parseInt(premierChiffre) / parseInt(deuxiemeChiffre));
		alert("Le résultat de " + premierChiffre + calcul + deuxiemeChiffre + " est : " + resultat);
		return;
	} else {
		alert("Calcul impossible à effectuer");
	}
	
}

function affiche(type, sujet){
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var finalImage = "";
	// var finfin = "";
	var j = 0;
		for (i=1; i<=7; i++){
			if (j == 6) {
				finalImage = finalImage + '<p>';
				j=0;
				i--;
			} else {
			var image = ('<a href="../images/' + type + '/' + sujet + ' (' + i + ').jpg"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></a></img>&ensp&ensp;');
			var newSujet = sujet.ucFirst();
			var deb = ('<h1><a href="../index.html#' + type + '">' + newSujet + '</a></h1>')
			finalImage = finalImage + image;
			j++;
			} 
		}
	document.body.innerHTML = deb + finalImage;	
}

function test(){
	var nom = "MICHEL";
	var prenom = "Florian";
	var tab = [1, 50, true, false, "Text", nom, prenom, [1,2,3], {}, null, NaN];
	var obj = {name:"Toto", age:31, tableau:tab, tabs:["a","b",1], objet:{prop:"valeurs"} };
	
	console.log (nom);
	console.log (prenom);
	console.log (tab);
	console.log (obj);
	console.log (tab[6] + " " + tab[5]);
	console.log (obj.age);
	
	alert ("Tu t'appel : " + tab[6] + " " + tab[5]);
	alert ("Ton age est : " + obj.age + " ans");
	alert ("L'index n°2 du tab est = " + tab[7][1]);
	alert ("L'index n°2 de l'objet est = " + obj.tabs[1]);
	
	test2("Appel de la fonction test2");
}

function test2(parametre){
	alert (parametre);
	var tempo = "Tempo";
	alert (tempo);
}

function employee (name, jobtitle, born){
	this.name=name;
	this.jobtitle=jobtitle;
	this.born=born;
	return (this.name + "\n" + this.jobtitle + "\n");
}

function newEmployee(){
	var fred=new employee("Fred","caverman",1970);
	employee.prototype.salary=null;
	fred.salary=2000;

	alert (fred.name + "\n" + fred.salary + "\n" + fred.jobtitle);
}