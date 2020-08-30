var peuNbrImage = 20;
var beaucoupNbrImage = 41;

var detailAstro = {
	sujet:["Soleil","Mercure","Venus","Terre","Lune","Mars","Jupiter","Saturne","Uranus","Neptune","Pluton","Lointain"], 
	diametre:["","4 880","12 100","12 750","","6 785","143 000","120 000","52 000","48 600","2 400",""], 
	nbSatelite:["","0","0","1","","2","30","40","16","8","1",""],
	tpsRotation:["","59j","244j","24h","","24h 37min","9h 53min","10h 25min","17h 15min","18h 30min","6j 9h"],
	tpsRevolution:["","88j","225j","365j","","687j","11ans 11mois","29ans 6mois","84ans","164ans","248ans"],
	distanceDuSoleil:["0","57","108","149","","228","777","1 428","2 871","4 500","5 912",""],
	distanceDeTerre:[""], 
	diametreAppMaxi:["","13","58","","25","50","20","4","2.5","0.1",""], 
	magnitudeMax:["","-2","-4.4","","-2.8","-3","-0.5","5.9","7.7","13.7",""],
	tpsLumiereDeTerre:[""],
	particularite:["","Rotation sens inverse","Contient de la vie","","Grande tache rouge","Anneaux","Coucher sur son orbite","","",""],

	terre:["","12 750","1"] };

	var jupiter = ["Toto", 31 ];
	var x = [[ "a", "b", "c"] , [ 1,2,3]];
	var y = ["Foo", 52];

function afficheMiniature(type, sujet){
	if (sujet == 'soleil'){
		var chiffre = 0;
	} if (sujet == 'mercure') {
		var chiffre = 1;
	} if (sujet == 'venus'){
		var chiffre = 2;
	}
	//alert (chiffre);
	// alert (sujet);
	// alert (x[0][0]);
	// alert (y[0]);
	//alert (detailAstro.sujet[chiffre] + "\n" + detailAstro.diametre[chiffre]);

	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var finalImage = "";
	// var finfin = "";
	if (sujet == "voie_lactee"){
		var nbrImages = beaucoupNbrImage;
	} else {
		var nbrImages = peuNbrImage;
	}
	var j = 0;
		for (i=1; i<=nbrImages; i++){
			if (j == 5) {
				finalImage = finalImage + '<p>';
				j=0;
				i--;
			} else {
				//var image = ('<a href="../images/' + type + '/' + sujet + ' (' + i + ').jpg"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></a></img>');
			
			//var image = ('<img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></img>');
			//var image = ('<a> <img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></a></img>');
			//var image = ('<a href="diaporama.html?Astro&saturne (1).jpg" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></img></a>');
			//var image = ('<a href="diaporama.html?Astro&saturne" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></img></a>');
				// var image = ('<a href="diaporama.html?' + type + '&' + sujet  + '" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white"></img></a>');
			  //var image = ('<a href="diaporama.html?' + type + '&' + sujet  + ' (' + i + ').jpg" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white"></img></a>');
			var image = ('<a href="diaporama.html?' + type + '&' + sujet  + '&' + i + '" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white"></img></a>');
			//var image = ('<a href="diaporama.html?' + type + '&' + sujet  + '" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white"></img></a>');
			var newSujet = sujet.ucFirst();
			var deb = ('<h1><a href="../index.html#' + type + '">' + newSujet + '</a></h1>')
			finalImage = finalImage + image;
			j++;
			} 
		}
	document.getElementById('div2').innerHTML += finalImage;
}

function afficheInfo(type, sujet){

	var diam = detailAstro.terre[1];

	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var newSujet = sujet.ucFirst();
	if (type == "Astro"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Distance du soleil : </li><li>Diamètre apparent : ' + diam + '</li><li>Distance de la terre : </li><li>Tps que met la lumière à nous atteindre : </li><li>Tps des vidéos : 2 minutes</li><li>Tps de rotation : </li></ol>');
	} if (type == "Paysage"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Lieu : </li><li>Date : </li></ol>');
	} if (type == "Portrait"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li>Lieux : </li><li>Date : </li></ol>');
	}
	document.getElementById('aside1').innerHTML += contains;
}

function menuHorizontal(type, sujet){
	if (type == "Astro"){		
		var contains = ('<a href="../index.html" id="titre"><h2>Astrophotographie</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Astro&soleil" target="">Soleil</a></li><li class="titremenu2"><a href="viewPicture.html?Astro&mercure" target="">Mercure</a></li><li class="titremenu3"><a href="viewPicture.html?Astro&venus" target="">Vénus</a></li><li class="titremenu4"><a href="viewPicture.html?Astro&phenomene" target="">Phénomènes<br> Terrestre</a></li><li class="titremenu5"><a href="viewPicture.html?Astro&lune" target="">Lune</a></li><li class="titremenu6"><a href="viewPicture.html?Astro&mars" target="">Mars</a></li><li class="titremenu7"><a href="viewPicture.html?Astro&jupiter" target="">Jupiter</a></li><li class="titremenu8"><a href="viewPicture.html?Astro&saturne" target="">Saturne</a></li><li class="titremenu9"><a href="viewPicture.html?Astro&voie_lactee" target="">Voie lactée</a></li><li class="titremenu10"><a href="viewPicture.html?Astro&circumPolaire" target="">Circumpolaire</a></li><li class="titremenu11"><a href="viewPicture.html?Astro&ciel_profond" target="">Objets lointains</a></li><li class="titremenu12"><a href="viewPicture.html?Astro&comete" target="">Comète</a></li></ul></section>');
	} if (type == "Paysage"){
		var contains = ('<a href="../index.html" id="titre"><h2>Paysages</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Paysage&canada" target="">Canada</a></li><li class="titremenu2"><a href="viewPicture.html?Paysage&france" target="">France</a></li><li class="titremenu3"><a href="viewPicture.html?Paysage&italie" target="">Italie</a></li><li class="titremenu4"><a href="viewPicture.html?Paysage&japon" target="">Japon</a></li><li class="titremenu5"><a href="viewPicture.html?Paysage&martinique" target="">Martinique</a></li></ul></section>');
	} if (type == "Portrait"){
		var contains = ('<a href="../index.html" id="titre"><h2>Portrait</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Portrait&anais" target="">Anaïs</a></li><li class="titremenu2"><a href="viewPicture.html?Portrait&mathilde" target="">Mathilde</a></li> <li class="titremenu3"><a href="viewPicture.html?Portrait&johan" target="">Johan</a></li><li class="titremenu4"><a href="viewPicture.html?Portrait&marion " target="">Marion </a></li><li class="titremenu5"><a href="viewPicture.html?Portrait&yulia " target="">Yulia </a></li><li class="titremenu6"><a href="viewPicture.html?Portrait&karine " target="">Karine </a></li><li class="titremenu7"><a href="viewPicture.html?Portrait&angelique " target="">Angelique </a></li><li class="titremenu8"><a href="viewPicture.html?Portrait&anais2 " target="">Anais2 </a></li></ul></section>');
	} if (type == "Animaux"){
		var contains = ('<a href="../index.html" id="titre"><h2>Animaux</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Portrait&anais" target="">Anaïs</a></li><li class="titremenu2"><a href="viewPicture.html?Portrait&mathilde" target="">Mathilde</a></li><li class="titremenu3"><a href="viewPicture.html?Portrait&johan" target="">Johan</a></li></ul></section>');
	}
	document.getElementById('div1').innerHTML += contains;
}

// function diaporama(type, sujet){
// 	var contains = ('<a href="diaporama.html?' + type + '&' + sujet +'" target="_blank"><img src="../images/Icon/diaporama.jpg" title="Lire le diaporama"><br>Diaporama</a></img>&emsp;');
// 	document.getElementById('diap').innerHTML += contains;
// }

function accueilDiap(type, sujet, image){
	var srcImageCentral = "../images/" + type + "/" + sujet +" (" + image + ").jpg";
	var contains = ('<IMG id="imageCentrale" SRC=" ' + srcImageCentral + '" name="slider"><br><br><input type="submit" name="Submit" value="Fermer la fen&ecirc;tre" onClick="window.close()" margin="auto" text-align="center">');
	document.getElementById('imageCentr').innerHTML += contains;
 }

function imageSuivante (type, sujet, images){
	// var im = "../images/icon/rightArrow.png";
	var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images + 1) + ").jpg"
	var contains = ('<IMG id="flecheDroite" class="center" SRC=" '+ ima + '" title="Next" margin="auto" width="100%" name="nextPicture"><br><br>Suivante</A>');
	document.getElementById('flecheDroite').innerHTML += contains;
}

function imagePrecedente (type, sujet, images){
	// var im = "../images/icon/leftArrow.png";
	var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images - 1) + ").jpg"
	var contains = ('<IMG id="flecheGauche" SRC=" '+ ima + '" title="Previous" margin="auto" width="100%" name="prevPicture"><br><br>Precedente</A>');
	document.getElementById('flecheGauche').innerHTML += contains;
}
//var image = ('<a href="diaporama.html?Astro&saturne" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white" ></img></a>');


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