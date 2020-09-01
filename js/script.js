//Tableau
var detailAstronomie = {
	soleil:{distSol:"0",diam:"1,39 millions km",rotation:"28 jours",revolution:"-",sat:"",distTerre:"",diamAppMaxi:"32\'27\"",magnMax:"-26,73",tpsLumTerre:"8 minutes",particularite:"Dégage lumière et chaleur"},
	mercure:{distSol:"57 millions km",diam:"4 879 km",rotation:"59 jours",revolution:"88 jours",sat:"0",distTerre:"",diamAppMaxi:"13\"",magnMax:"-2",tpsLumTerre:"",particularite:"Planéte grillée"},
	venus:{distSol:"108 millions km",diam:"12 100 km",rotation:"244 jours",revolution:"225 jours",sat:"0",distTerre:"108 millions km",diamAppMaxi:"58\"",magnMax:"-4,4",tpsLumTerre:"",particularite:"Rotation en sens inverse"},
	terre:{distSol:"149 millions km",diam:"12 750 km",rotation:"24h",revolution:"365 jours",sat:"1",distTerre:"-",diamAppMaxi:"-",magnMax:"-",tpsLumTerre:"-",particularite:"Contiens de la vie", nomSat:"(Lune)"},
	lune:{distSol:"",diam:"1 474 km",rotation:"29,5 jours",revolution:"29,5 jours",sat:"-",distTerre:"300 000 km",diamAppMaxi:"31\'36\"",magnMax:"-12",tpsLumTerre:"1 sec",particularite:"Sans atmosphere"},
	mars:{distSol:"228 millions km",diam:"6 785 km",rotation:"24h 37min",revolution:"687 jours",sat:"2",distTerre:"",diamAppMaxi:"25\"",magnMax:"-2,8",tpsLumTerre:"4 minutes",particularite:"Plus de champs magnetique"},
	jupiter:{distSol:"777 millions km",diam:"139 820 km",rotation:"9h 53min",revolution:"1ans 11mois",sat:"30",distTerre:"",diamAppMaxi:"50\"",magnMax:"-3",tpsLumTerre:"35 minutes",particularite:"Grande tâche rouge", nomSat:"(Io, Europe, Ganymède, Callisto, etc)"},
	saturne:{distSol:"1 428 millions km",diam:"1116 460 km",rotation:"10h 25min",revolution:"29ans 6mois",sat:"40",distTerre:"",diamAppMaxi:"20\"",magnMax:"-0,5",tpsLumTerre:"71 minutes",particularite:"Anneaux", nomSat:" (Encelade, Dioné, Titans, Japet, etc)"},
	uranus:{distSol:"2 871 millions km",diam:"50 725 km",rotation:"17h 15min",revolution:"84ans",sat:"16",distTerre:"",diamAppMaxi:"4\"",magnMax:"5,9",tpsLumTerre:"2 heures 40",particularite:"Couché sur son orbite"},
	neptune:{distSol:"4 500 millions km",diam:"49 244 km",rotation:"18h 30min",revolution:"164ans",sat:"8",distTerre:"",diamAppMaxi:"2,5\"",magnMax:"7,7",tpsLumTerre:"4 heures",particularite:"Grande tâche bleu"},
	pluton:{distSol:"5 912 millions km",diam:"2 375 km",rotation:"6 jours 9h",revolution:"248ans",sat:"1",distTerre:"",diamAppMaxi:"0,1\"",magnMax:"13,7",tpsLumTerre:"",particularite:""},
	voie_lactee:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info"},
	circumPolaire:{distSol:"Aucune info",diam:"Aucune infom",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info"},
	ciel_profond:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info"},
	comete:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info"}
};
var detailPortrait = {
	anais:{distSol:"0",diam:"1,39 millions km",rotation:"28 jours",revolution:"-",sat:"",distTerre:"",diamAppMaxi:"32\'27\"",magnMax:"-26,73",tpsLumTerre:"8 minutes",particularite:"Dégage lumière et chaleur"},
	anais2:{distSol:"57",diam:"4 879 km",rotation:"59 jours",revolution:"88 jours",sat:"0",distTerre:"",diamAppMaxi:"13\"",magnMax:"-2",tpsLumTerre:"",particularite:"Planéte grillée"},
	angelique:{distSol:"108",diam:"12 100 km",rotation:"244 jours",revolution:"225 jours",sat:"0",distTerre:"108 millions km",diamAppMaxi:"58\"",magnMax:"-4,4",tpsLumTerre:"",particularite:"Rotation en sens inverse"},
	johan:{distSol:"149",diam:"12 750 km",rotation:"24h",revolution:"365 jours",sat:"1",distTerre:"",diamAppMaxi:"",magnMax:"",tpsLumTerre:"-",particularite:"Contiens de la vie"},
	karine:{distSol:"",diam:"1 474 km",rotation:"29,5 jours",revolution:"29,5 jours",sat:"-",distTerre:"300 000 km",diamAppMaxi:"31\'36\"",magnMax:"-12",tpsLumTerre:"1 sec",particularite:"Sans atmosphere"},
	mathilde:{distSol:"228",diam:"6 785 km",rotation:"24h 37min",revolution:"687 jours",sat:"2",distTerre:"",diamAppMaxi:"25\"",magnMax:"-2,8",tpsLumTerre:"4 minutes",particularite:"Plus de champs magnetique"},
	marion:{distSol:"777",diam:"139 820 km",rotation:"9h 53min",revolution:"1ans 11mois",sat:"30",distTerre:"",diamAppMaxi:"50\"",magnMax:"-3",tpsLumTerre:"35 minutes",particularite:"Grande tâche rouge"},
	yulia:{distSol:"1 428",diam:"1116 460 km",rotation:"10h 25min",revolution:"29ans 6mois",sat:"40",distTerre:"",diamAppMaxi:"20\"",magnMax:"-0,5",tpsLumTerre:"71 minutes",particularite:"Anneaux"},
};
var detailPaysage = {
	canada:{Capitale:"Ottawa",Superficie:"9,98 millions km²",Population:"37,6 millions",nbrReg:"10"},
	france:{Capitale:"Paris",Superficie:"643 801 km²",Population:"67 millions",nbrReg:"13"},
	italie:{Capitale:"Rome",Superficie:"301 338 km²",Population:"60,36 millions",nbrReg:"20"},
	japon:{Capitale:"Tokyo",Superficie:"377 915 km²",Population:"126,5 millions",nbrReg:"8"},
	martinique:{Capitale:"Paris / Fort-de-france",Superficie:"1 128 km²",Population:"376 480",nbrReg:"1"},
};

var nbrImageSujet = {
    anais:[15],
    anais2:[6],
    angelique:[0],
    johan:[19],
    karine:[10],
    mathilde:[21],
    marion:[9],
    yulia:[5],

    canada:[24],
    france:[19],
    italie:[15],
    japon:[26],
    martinique:[9],

    bouquetin:[7],
    marmotte:[8],

    soleil:[11],
    mercure:[0],
    venus:[4],
    phenomene:[12],
    lune:[13],
    mars:[4],
    jupiter:[6],
    saturne:[13],
    voie_lactee:[41],
    circumPolaire:[6],
    ciel_prodond:[2],
    comete:[2],	
};

function afficheMiniature(type, sujet){
	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var finalImage = "";

	if (nbrImageSujet[sujet][0] == 0) {
		finalImage = finalImage + '<p>';
		document.getElementById('div2').innerHTML += finalImage + "<br><br><br><br><br><br><br>Aucune images";
	} else {
	var j = 0;
		for (i=1; i<=nbrImageSujet[sujet][0]; i++){
			if (j == 5) {
				finalImage = finalImage + '<p>';
				j=0;
				i--;
			} else {
			var image = ('<a href="diaporama.html?' + type + '&' + sujet  + '&' + i + '" target="_blank"><img src="../images/Miniatures/' + type + '/' + sujet + ' (' + i + ').jpg" border="2px solid white"></img></a>');
			var newSujet = sujet.ucFirst();
			finalImage = finalImage + image;
			j++;
			} 
		}
	document.getElementById('div2').innerHTML += finalImage;
	}
}

function afficheInfo(type, sujet){
	if (sujet == "phenomene"){
		var sujet = "terre";
	}
	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var newSujet = sujet.ucFirst();
	if (type == "Astro"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Distance du soleil : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].distSol + '</li><br><li id="colorTitreTextInfo">Diamètre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].diam + '</li><br><li id="colorTitreTextInfo">Tps de révolution : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].revolution + '</li><br><li id="colorTitreTextInfo">Tps de rotation : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].rotation + '</li><br><li id="colorTitreTextInfo">Nbr de satellite : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].sat + '</li><br><li id="colorTitreTextInfo">Nom satellite : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].nomSat + '</li><br><br><li id="colorTitreTextInfo">Particularité : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].particularite + '</li><br></br><li id="colorTitreTextInfo">Distance de la terre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].distTerre + '</li><br><li id="colorTitreTextInfo">Diamètre apparent max : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].diamAppMaxi + '</li><br><li id="colorTitreTextInfo">Magnitude maxi : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].magnMax + '</li><br><li id="colorTitreTextInfo">Dist. lum. de la terre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].tpsLumTerre + '</li></ol>');
	} if (type == "Paysage"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Capitale : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Capitale + '</li><br><li id="colorTitreTextInfo">Superficie : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Superficie + '</li><br><li id="colorTitreTextInfo">Population : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Population + '</li><br><li id="colorTitreTextInfo">Nombre de région : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].nbrReg + '</li><br></ol> <br><img id="home" src="../images/Miniatures/' + type + '/' + sujet + ' (0).jpg" width="30%" text-align="center" title="Carte"><br></a></img>&emsp;');
	} if (type == "Portrait"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Lieux :&nbsp  </li><br><li>Date : </li></ol>');
	} if (type == "Animaux"){
		var contains = ('<h2>' + newSujet)
	}
	document.getElementById('aside1').innerHTML += contains;
}

function menuHorizontal(type, sujet){
	if (type == "Astro"){		
		var contains = ('<a href="../index.html" id="titre"><h2>Astrophotographie</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Astro&soleil" target="">Soleil</a></li><li class="titremenu2"><a href="viewPicture.html?Astro&mercure" target="">Mercure</a></li><li class="titremenu3"><a href="viewPicture.html?Astro&venus" target="">Vénus</a></li><li class="titremenu4"><a href="viewPicture.html?Astro&phenomene" target="">Phénomènes<br> Terrestre</a></li><li class="titremenu5"><a href="viewPicture.html?Astro&lune" target="">Lune</a></li><li class="titremenu6"><a href="viewPicture.html?Astro&mars" target="">Mars</a></li><li class="titremenu7"><a href="viewPicture.html?Astro&jupiter" target="">Jupiter</a></li><li class="titremenu8"><a href="viewPicture.html?Astro&saturne" target="">Saturne</a></li><li class="titremenu9"><a href="viewPicture.html?Astro&voie_lactee" target="">Voie lactée</a></li><li class="titremenu10"><a href="viewPicture.html?Astro&circumPolaire" target="">Circumpolaire</a></li><li class="titremenu11"><a href="viewPicture.html?Astro&ciel_profond" target="">Objets lointains</a></li><li class="titremenu12"><a href="viewPicture.html?Astro&comete" target="">Comète</a></li></ul></section>');
	} if (type == "Paysage"){
		var contains = ('<a href="../index.html" id="titre"><h2>Paysages</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Paysage&canada" target="">Canada</a></li><li class="titremenu2"><a href="viewPicture.html?Paysage&france" target="">France</a></li><li class="titremenu3"><a href="viewPicture.html?Paysage&italie" target="">Italie</a></li><li class="titremenu4"><a href="viewPicture.html?Paysage&japon" target="">Japon</a></li><li class="titremenu5"><a href="viewPicture.html?Paysage&martinique" target="">Martinique</a></li></ul></section>');
	} if (type == "Portrait"){
		var contains = ('<a href="../index.html" id="titre"><h2>Portrait</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Portrait&anais" target="">Anaïs</a></li><li class="titremenu2"><a href="viewPicture.html?Portrait&anais2 " target="">Anais2 </a></li><li class="titremenu3"><a href="viewPicture.html?Portrait&angelique " target="">Angelique </a></li><li class="titremenu4"><a href="viewPicture.html?Portrait&johan" target="">Johan</a></li><li class="titremenu5"><a href="viewPicture.html?Portrait&karine " target="">Karine </a></li><li class="titremenu6"><a href="viewPicture.html?Portrait&mathilde" target="">Mathilde</a></li><li class="titremenu7"><a href="viewPicture.html?Portrait&marion " target="">Marion </a></li><li class="titremenu8"><a href="viewPicture.html?Portrait&yulia " target="">Yulia </a></li></ul></section>');
	} if (type == "Animaux"){
		var contains = ('<a href="../index.html" id="titre"><h2>Animaux</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Animaux&bouquetin" target="">Bouquetin</a></li><li class="titremenu2"><a href="viewPicture.html?Animaux&marmotte" target="">Marmotte</a></li></ul></section>');
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
	if (images == nbrImageSujet[parameters[1]][0]){
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (1).jpg";
	} else {
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images + 1) + ").jpg";
	}	
	var contains = ('<IMG id="flecheDroite" class="center" SRC=" '+ ima + '" title="Next" margin="auto" width="100%" name="nextPicture"><br><br>Suivante</A>');
	document.getElementById('flecheDroite').innerHTML += contains;
}

function imagePrecedente (type, sujet, images){
	// var im = "../images/icon/leftArrow.png";
	if (images == 1){
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (nbrImageSujet[parameters[1]][0]) + ").jpg";
	} else {
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images - 1) + ").jpg";
	}
	var contains = ('<IMG id="flecheGauche" SRC=" '+ ima + '" title="Previous" margin="auto" width="100%" name="prevPicture"><br><br>Precedente</A>');
	document.getElementById('flecheGauche').innerHTML += contains;
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