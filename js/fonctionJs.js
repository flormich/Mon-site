//Test de fonction

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

	var essai = "objet";
	
	// alert ("Tu t'appel : " + tab[6] + " " + tab[5]);
	// alert ("Ton age est : " + obj.age + " ans");
	// alert ("L'index n°2 du tab est = " + tab[7][1]);
	alert ("L'index n°2 de l'objet est = " + obj.tabs[1]);
	alert ("L'essai est : " + obj[essai].prop);
	
	// test2("Appel de la fonction test2");
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
	// alert ("Votre nom est : " + this.name + "\n" + "Votre job est :" + this.jobtitle + "\n" + "Votre année de naissance est : " + this.born);	
	born = parseInt(this.born);
	var aujourdhui = new Date();
	var annee = aujourdhui.getUTCFullYear();
	// alert (typeof born);
	// alert (typeof annee);
	var age = (annee - born);
	document.write ("Résumé :" + "<br>" 
		+ "Votre nom est : " + this.name + "<br>" 
		+ "Votre job est :" + this.jobtitle + "<br>" 
		+ "Votre année de naissance est : " + this.born + "<br>"
		+ "Et tu as : " + age + " ans");	
}

function newEmployee (){
	var name = prompt ("Votre nom");
	var jobtitle = prompt ("Votre métier : ");
	var born = prompt ("Votre annee de naissance");
	var employ = new employee(name, jobtitle, born);
}

// function newEmployee(){
	// var fred=new employee("Fred","caverman",1970);
	// employee.prototype.salary=null;
	// fred.salary=2000;
	// alert (fred.name + "\n" + fred.salary + "\n" + fred.jobtitle);
// }

function pourcentage(){
	var chiffreDepart = prompt('Le chiffre à remiser');
	var pourcentage = prompt('Le pourcentage');
	var signe = prompt ('Si retrancher mettre "-" sion ajout mettre "+"');

	if (signe == "-"){
		var resultat = chiffreDepart - (chiffreDepart * (pourcentage/100));
	} else if (signe == "+") {
		var resultat = parseInt(chiffreDepart) + (parseInt(chiffreDepart) * (pourcentage/100));
	} else {
		var resultat = "Erreur";
	}
	alert ("Le prix ficnal de " + chiffreDepart + " " + signe + " " + pourcentage + "% = " + resultat);
}

function addition(){
	var nombre1 = prompt("Premier nombre = ");
	var nombre2 = prompt("Deuxime nombre = ");
	var sign = prompt("Indiquer le signe");

	if (sign == "+"){
		var result = parseInt(nombre1) + parseInt(nombre2);
	} else if (sign == "-"){
		var result = parseInt(nombre1) - parseInt(nombre2);
	} else if (sign == "*"){
		var result = parseInt(nombre1) * parseInt(nombre2);
	} else if (sign == "/"){
		var result = parseInt(nombre1) / parseInt(nombre2);
	}
	alert ("Le résultat est : " + result);
}

function compare(x, y){
	return x-y;
}

function boucle(){
	var tab = [1, 5, 10, 2, 50, 65, 12];
	for (i=0; i<tab.length; i++){
		console.log ("Le resultat de la clé " + i + " est = " + tab[i] + "\n");
	}
	console.log ("\n");
	var tabSort = tab.sort(compare);
	for (i=0; i<tab.length; i++){
		console.log ("Le resultat de la clé " + i + " est = " + tab[i] + "\n");
	}
}

function ecart(){
	var tab = [1, 5, 10, 2, 50, 65, 12];
	var tabSort = tab.sort(compare);
	alert (tab[1]);
	alert (tab[2]);
	var result = tab[2] - tab[1];
	alert (result);
	// for (i=0; i<tab.length; i++){
	// 	var result = (tab[(i+1)] = tab[i]);
	// 	alert (result);
	// }
}

function ligne(){
	var nbrEtoile = 5;
	var etoile = "*";
	var etoileTotal ="";
	for (i=0; i<nbrEtoile; i++){
		var etoileTotal = etoileTotal + etoile;
	}
	alert (etoileTotal);
}

function triangleRect(){
	console.clear();
	var nbrEtoile = prompt("Indiquez le nombre d'étoile à afficher : ");
	var etoile = "*";
	var etoileTotal ="";
	for (i=0; i<nbrEtoile; i++){
		var etoileTotal = etoileTotal + etoile;
		console.log (etoileTotal + "\n");
	}
}

function pyramide(){
	console.clear();
	var nbrEtoile = prompt("Indiquez un nombre : ");
	if (nbrEtoile%2 != 0 ){	
		var nbrEtoile = nbrEtoile-1;
	} else {
		var nbrEtoile = nbrEtoile;
	}
	var nbrEspace = nbrEtoile /2;
	var etoile = "*";
	var espace = " ";
	var nbEtoile = 1;

	for (i=-1; i<nbrEtoile/2; i++){
		var espaceTot = (`${espace.repeat(nbrEspace)}`);
		console.log (espaceTot + `${etoile.repeat(nbEtoile)}` + espaceTot + "\n");
		nbrEspace --;
		nbEtoile = nbEtoile + 2;
	}
}

function compterFor(){
	console.clear();
	nbrMax = prompt("Nombre max = ");
	for (i=1; i<=nbrMax; i++){
		console.log (i);
	}
}
function compterWhile(){
	console.clear();
	i = 1;
	nbrMax = prompt("Nombre max = ");
	while (i<=nbrMax){
		console.log (i);
		i++;
	}
}
