function afficheMiniature(type, sujet){
	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var finalImage = "";
	// var finfin = "";
	var j = 0;
		for (i=1; i<=7; i++){
			if (j == 4) {
				finalImage = finalImage + '<p>';
				j=0;
				i--;
			} else {
			var image = ('<a href="../images/' + type + '/' + sujet + ' (' + i + ').jpg"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></a></img>');
			var newSujet = sujet.ucFirst();
			var deb = ('<h1><a href="../index.html#' + type + '">' + newSujet + '</a></h1>')
			finalImage = finalImage + image;
			j++;
			} 
		}
	document.getElementById('div2').innerHTML += finalImage;
}

function afficheInfo(type, sujet){
	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var newSujet = sujet.ucFirst();
	if (type == "Astro"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Distance du soleil : </li><li>Diamètre apparent : exemple</li><li>Distance de la terre : </li><li>Tps que met la lumière à nous atteindre : </li><li>Tps des vidéos : 2 minutes</li><li>Tps de rotation : </li></ol>');
	} if (type == "Paysage"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Lieu : </li><li>Date : </li></ol>');
	} if (type == "Portrait"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Lieux : </li><li>Date : </li></ol>');
	}
	document.getElementById('aside1').innerHTML += contains;
}

function menuHorizontal(type, sujet){
	if (type == "Astro"){		
		var contains = ('<a href="../index.html"><h2>Astrophotographie</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Astro&soleil" target="">Soleil</a></li><li class="titremenu2"><a href="viewPicture.html?Astro&mercure" target="">Mercure</a></li><li class="titremenu3"><a href="viewPicture.html?Astro&venus" target="">Vénus</a></li><li class="titremenu4"><a href="viewPicture.html?Astro&terre" target="">Terre</a></li><li class="titremenu5"><a href="viewPicture.html?Astro&lune" target="">Lune</a></li><li class="titremenu6"><a href="viewPicture.html?Astro&mars" target="">Mars</a></li><li class="titremenu7"><a href="viewPicture.html?Astro&jupiter" target="">Jupiter</a></li><li class="titremenu8"><a href="viewPicture.html?Astro&saturne" target="">Saturne</a></li><li class="titremenu9"><a href="viewPicture.html?Astro&ciel_profond" target="">Objets lointains</a></li><li class="titremenu10"><a href="viewPicture.html?Astro&comete" target="">Comète</a></li></ul></section>');
	} if (type == "Paysage"){
		var contains = ('<a href="../index.html"><h2>Paysages</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Paysage&rhone" target="">Dans le Rhone</a></li><li class="titremenu2"><a href="viewPicture.html?Paysage&isere" target="">En Isère</a></li><li class="titremenu3"><a href="viewPicture.html?Paysage&drome" target="">En drôme</a></li><li class="titremenu4"><a href="viewPicture.html?Paysage&savoie" target="">En savoie</a></li><li class="titremenu5"><a href="viewPicture.html?Paysage&savoieHaute" target="">En haute savoie</a></li><li class="titremenu6"><a href="viewPicture.html?Paysage&ardeche" target="">En ardèche</a></li><li class="titremenu7"><a href="viewPicture.html?Paysage&france" target="">autre département</a></li><li class="titremenu8"><a href="viewPicture.html?Paysage&etranger" target="">Hors de France</a></li></ul></section>');
	} if (type == "Portrait"){
		var contains = ('<a href="../index.html"><h2>Portrait</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Portrait&anais" target="">Anaïs</a></li><li class="titremenu2"><a href="viewPicture.html?Portrait&mathilde" target="">Mathilde</a></li><li class="titremenu3"><a href="viewPicture.html?Portrait&johan" target="">Johan</a></li></ul></section>');
	}
	document.getElementById('div1').innerHTML += contains;
}

function diaporama(type, sujet){
	var contains = ('<a href="diaporama.html?' + type + '&' + sujet +'" target="_blank"><img src="../images/Icon/diaporama2.jpg" title="Lire le diaporama"></a></img>&emsp;');
	document.getElementById('diap').innerHTML += contains;
}


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
	// alert ("Votre nom est : " + this.name + "\n" + "Votre job est :" + this.jobtitle + "\n" + "Votre année de naissance est : " + this.born);	
	var born = parseInt(this.born);
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