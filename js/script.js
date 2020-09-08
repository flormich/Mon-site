//Tableau
// require("/mymodule.js");
var detailAstronomie = {
	soleil:{distSol:"0",diam:"1,39 millions km",rotation:"28 jours",revolution:"-",sat:"-",distTerre:"149 millions km",diamAppMaxi:"32\'27\"",magnMax:"-26,73",tpsLumTerre:"8 minutes",particularite:"Dégage lumière et chaleur", nomSat:"-"},
	mercure:{distSol:"57 millions km",diam:"4 879 km",rotation:"59 jours",revolution:"88 jours",sat:"0",distTerre:"92 millions km",diamAppMaxi:"13\"",magnMax:"-2",tpsLumTerre:"5 minutes 6 sec",particularite:"Planète grillée", nomSat:""},
	venus:{distSol:"108 millions km",diam:"12 100 km",rotation:"244 jours",revolution:"225 jours",sat:"0",distTerre:"41 millions km",diamAppMaxi:"58\"",magnMax:"-4,4",tpsLumTerre:"2 minutes 16 sec",particularite:"Rotation en sens inverse", nomSat:""},
	terre:{distSol:"149 millions km",diam:"12 750 km",rotation:"24h",revolution:"365 jours",sat:"1",distTerre:"-",diamAppMaxi:"-",magnMax:"-",tpsLumTerre:"-",particularite:"Contiens de la vie", nomSat:"(Lune)"},
	lune:{distSol:"",diam:"1 474 km",rotation:"29,5 jours",revolution:"29,5 jours",sat:"-",distTerre:"300 000 kms",diamAppMaxi:"31\'36\"",magnMax:"-12",tpsLumTerre:"1 seconde",particularite:"Sans atmosphere", nomSat:"-"},
	mars:{distSol:"228 millions km",diam:"6 785 km",rotation:"24h 37min",revolution:"687 jours",sat:"2",distTerre:"79 millions km",diamAppMaxi:"25\"",magnMax:"-2,8",tpsLumTerre:"4 minutes",particularite:"Plus de champs magnetique", nomSat:"(Phobos et Deimos)"},
	jupiter:{distSol:"777 millions km",diam:"139 820 km",rotation:"9h 53min",revolution:"1ans 11mois",sat:"30",distTerre:"628 millions km",diamAppMaxi:"50\"",magnMax:"-3",tpsLumTerre:"35 minutes",particularite:"Grande tâche rouge", nomSat:"(Io, Europe, Ganymède, Callisto, etc)"},
	saturne:{distSol:"1 428 millions km",diam:"1116 460 km",rotation:"10h 25min",revolution:"29ans 6mois",sat:"40",distTerre:"1 279 millions km",diamAppMaxi:"20\"",magnMax:"-0,5",tpsLumTerre:"1 heure 11 minutes",particularite:"Anneaux", nomSat:" (Encelade, Dioné, Titans, Japet, etc)"},
	uranus:{distSol:"2 871 millions km",diam:"50 725 km",rotation:"17h 15min",revolution:"84ans",sat:"16",distTerre:"2 722 millions km",diamAppMaxi:"4\"",magnMax:"5,9",tpsLumTerre:"2 heures 40",particularite:"Couché sur son orbite", nomSat:""},
	neptune:{distSol:"4 500 millions km",diam:"49 244 km",rotation:"18h 30min",revolution:"164ans",sat:"8",distTerre:"4 351 millions km",diamAppMaxi:"2,5\"",magnMax:"7,7",tpsLumTerre:"4 heures",particularite:"Grande tâche bleu", nomSat:""},
	pluton:{distSol:"5 912 millions km",diam:"2 375 km",rotation:"6 jours 9h",revolution:"248ans",sat:"1",distTerre:"5 763 millions km",diamAppMaxi:"0,1\"",magnMax:"13,7",tpsLumTerre:"5 heures 20 minutes ",particularite:"", nomSat:""},
	voie_lactee:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info", nomSat:""},
	circumPolaire:{distSol:"Aucune info",diam:"Aucune infom",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info", nomSat:""},
	ciel_profond:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info", nomSat:""},
	comete:{distSol:"Aucune info",diam:"Aucune info",rotation:"Aucune info",revolution:"Aucune info",sat:"Aucune info",distTerre:"Aucune info",diamAppMaxi:"Aucune info",magnMax:"Aucune info",tpsLumTerre:"Aucune info",particularite:"Aucune info", nomSat:""}
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
	ecureuil:[0],
	marmotte:[8],
	
	urbex:[0],

    soleil:[11],
    mercure:[0],
    venus:[4],
    phenomene:[12],
    lune:[13],
    mars:[4],
    jupiter:[5],
    saturne:[12],
    voie_lactee:[41],
    circumPolaire:[6],
    ciel_profond:[2],
    comete:[2],	
};
var detailInfoPanorama = {
	soleil:{1:{titre:"Tâche solaire", lieu:"Bourg-en-bresse (01)", date:"20/05/2000", heure:"17h00", objectif:"Celestron 203 + oculaire 26mm", materielPhoto:"Canon 500N", typePhoto:"Argentique", sensibilite:"200 iso", focale:"2 000mm", tpsPose:"1/1000sec", NbrPhoto:"1"},
			2:{titre:"Eclipse totale", lieu:"St Avold (57)", date:"11/08/1999", heure:"12h00", objectif:"Teleobjectif 150 mm + doubleur", materielPhoto:"Canon 500N", typePhoto:"Argentique", sensibilite:"200 iso", focale:"f11", tpsPose:"1/1000 sec", NbrPhoto:"1"},
			3:{titre:"Eclipse totale", lieu:"St Avold (57)", date:"11/08/1999", heure:"12h15", objectif:"Teleobjectif 300 mm + doubleur", materielPhoto:"Canon 500N", typePhoto:"Argentique", sensibilite:"200 iso", focale:"f11", tpsPose:"1/1000 sec", NbrPhoto:"1"},
			4:{titre:"Eclipse totale", lieu:"St Avold (57)", date:"11/08/1999", heure:"12h26", objectif:"Teleobjectif 300 mm + doubleur", materielPhoto:"Canon 500N", typePhoto:"Argentique", sensibilite:"200 iso", focale:"f11", tpsPose:"1/1000 sec", NbrPhoto:"1"},
			5:{titre:"Eclipse totale", lieu:"St Avold (57)", date:"11/08/1999", heure:"12h29", objectif:"Teleobjectif 300 mm + doubleur", materielPhoto:"Canon 500N", typePhoto:"Argentique", sensibilite:"200 iso", focale:"f11", tpsPose:"1/1000 sec", NbrPhoto:"1"},
			6:{titre:"Eclipse annulaire", lieu:"Cullera (Espagne)", date:"03/10/2005", heure:"9h47", objectif:"Telescope C8", materielPhoto:"Canon 500N au foyer", typePhoto:"Argentique", sensibilite:"200 iso", focale:"-", tpsPose:"1/1500 sec", NbrPhoto:"1"},
			7:{titre:"Eclipse annulaire", lieu:"Cullera (Espagne)", date:"03/10/2005", heure:"10h15", objectif:"Telescope C8", materielPhoto:"Canon 500N au foyer", typePhoto:"Argentique", sensibilite:"200 iso", focale:"-", tpsPose:"1/1000 sec", NbrPhoto:"1"},
			8:{titre:"Eclipse annulaire", lieu:"Cullera (Espagne)", date:"03/10/2005", heure:"11h01", objectif:"Telescope C8", materielPhoto:"Canon 500N au foyer", typePhoto:"Argentique", sensibilite:"200 iso", focale:"-", tpsPose:"1/30 sec", NbrPhoto:"1"},
			9:{titre:"Eclipse annulaire", lieu:"Cullera (Espagne)", date:"03/10/2005", heure:"12h05", objectif:"Telescope C8", materielPhoto:"Canon 500N au foyer", typePhoto:"Argentique", sensibilite:"200 iso", focale:"-", tpsPose:"1/1500 sec", NbrPhoto:"1"},
			10:{titre:"Eclipse partielle", lieu:"", date:"", heure:"", objectif:"", materielPhoto:"", typePhoto:"Numérique", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:"1"},
			11:{titre:"Eclipse partielle", lieu:"", date:"", heure:"", objectif:"", materielPhoto:"", typePhoto:"Numérique", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:"1"},
	},
	mercure:{1:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	venus:{1:{titre:"Vénus", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
			2:{titre:"Passage de vénus devant le soleil", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
			3:{titre:"Passage de vénus devant le soleil", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
			4:{titre:"Passage de vénus devant le soleil", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	phenomene:{1:{titre:"Orage", lieu:"Demigny", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		6:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		7:{titre:"Orage", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		8:{titre:"Orage", lieu:"Noyer-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		9:{titre:"Cassiopé", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		10:{titre:"Arc-en-ciel", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		11:{titre:"Arc-en-ciel", lieu:"Saint Trivier sur Moignans", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		12:{titre:"Arc-en-ciel", lieu:"Saint Trivier sur Moignans", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	lune:{1:{titre:"Dernier quartier", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Croissant", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Premier quartier", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Croissant", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		6:{titre:"Mer des crises", lieu:"Mont july (01)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		7:{titre:"", lieu:"Mont july (01)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		8:{titre:"Lune cendrée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		9:{titre:"Partie de lune", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		10:{titre:"Dernier quartier", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		11:{titre:"Croissant", lieu:"", date:"Pact (38)", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		12:{titre:"Croissant", lieu:"", date:"Pact (38)", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		13:{titre:"Dernier quartier", lieu:"Bren (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	mars:{1:{titre:"Mars", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Mars", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Mars", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Mars", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	jupiter:{1:{titre:"Jupiter", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Jupiter", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Jupiter", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Jupiter", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Jupiter", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	saturne:{1:{titre:"Premiere saturne", lieu:"Bourg-en-bresse (01)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Premiere saturne", lieu:"Bourg-en-bresse (01)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Saturne", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Saturne", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Saturne", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		6:{titre:"Saturne", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		7:{titre:"Saturne", lieu:"Menthon saint bernard (74)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		8:{titre:"Saturne", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		9:{titre:"Saturne", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		10:{titre:"Occultation Saturne", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		11:{titre:"Occultation Saturne", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		12:{titre:"Occultation Saturne", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	uranus:{1:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	neptune:{1:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	pluton:{1:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	voie_lactee:{1:{titre:"Voie lactée", lieu:"Lesches-en-Diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Voie lactée", lieu:"Lesches-en-Diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		6:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		7:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		8:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		9:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		10:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		11:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		12:{titre:"Voie lactée", lieu:"Noyers-sur-Jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		
		13:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		14:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		15:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		16:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		17:{titre:"Voie lactée", lieu:"Sanary sur mer (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		18:{titre:"Voie lactée", lieu:"Sanary sur mer (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		19:{titre:"Voie lactée", lieu:"Le Noyer", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		20:{titre:"Voie lactée", lieu:"Le Noyer", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		21:{titre:"Voie lactée", lieu:"Le Noyer", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		22:{titre:"Voie lactée", lieu:"Le Noyer", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	
		23:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		24:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		25:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		26:{titre:"Voie lactée", lieu:"Lesches en diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		27:{titre:"Voie lactée", lieu:"Lesches en diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		28:{titre:"Voie lactée", lieu:"Lesches en diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		29:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		30:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		31:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		32:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},

		33:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		34:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		35:{titre:"Voie lactée", lieu:"Vallon combeau (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		36:{titre:"Voie lactée", lieu:"Vallon combeau (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		37:{titre:"Voie lactée", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		38:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		39:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		40:{titre:"Voie lactée", lieu:"Lesches en diois (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		41:{titre:"Voie lactée", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		
	},
	circumPolaire:{1:{titre:"Filé détoile", lieu:"Demigny (71)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Filé détoile", lieu:"Villefontaine (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"Filé détoile", lieu:"Blieux (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"Filé détoile", lieu:"Noyers-sur-jabron (04)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		5:{titre:"Filé détoile", lieu:"Vallon de combeau (26)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		6:{titre:"Filé détoile", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	ciel_profond:{1:{titre:"Galaxie d'andromède", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Galaxie d'andromède", lieu:"Pact (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
	comete:{1:{titre:"Neowise", lieu:"Villefontaine (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		2:{titre:"Neowise", lieu:"Villefontaine (38)", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		3:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
		4:{titre:"", lieu:"", date:"", heure:"", ojectif:"", materielPhoto:"", typePhoto:"", sensibilite:"", focale:"", tpsPose:"", NbrPhoto:""},
	},
};

function menuHorizontal(type, sujet){
	if (type == "Astro"){		
		var contains = ('<a href="../index.html" id="titre"><h2>Astrophotographie</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Astro&soleil" target="">Soleil</a></li><li class="titremenu2"><a href="viewPicture.html?Astro&mercure" target="">Mercure</a></li><li class="titremenu3"><a href="viewPicture.html?Astro&venus" target="">Vénus</a></li><li class="titremenu4"><a href="viewPicture.html?Astro&phenomene" target="">Phénomènes<br> Terrestre</a></li><li class="titremenu5"><a href="viewPicture.html?Astro&lune" target="">Lune</a></li><li class="titremenu6"><a href="viewPicture.html?Astro&mars" target="">Mars</a></li><li class="titremenu7"><a href="viewPicture.html?Astro&jupiter" target="">Jupiter</a></li><li class="titremenu8"><a href="viewPicture.html?Astro&saturne" target="">Saturne</a></li><li class="titremenu9"><a href="viewPicture.html?Astro&voie_lactee" target="">Voie lactée</a></li><li class="titremenu10"><a href="viewPicture.html?Astro&circumPolaire" target="">Circumpolaire</a></li><li class="titremenu11"><a href="viewPicture.html?Astro&ciel_profond" target="">Objets lointains</a></li><li class="titremenu12"><a href="viewPicture.html?Astro&comete" target="">Comète</a></li></ul></section>');
	} if (type == "Paysage"){
		var contains = ('<a href="../index.html" id="titre"><h2>Paysages</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Paysage&canada" target="">Canada</a></li><li class="titremenu2"><a href="viewPicture.html?Paysage&france" target="">France</a></li><li class="titremenu3"><a href="viewPicture.html?Paysage&italie" target="">Italie</a></li><li class="titremenu4"><a href="viewPicture.html?Paysage&japon" target="">Japon</a></li><li class="titremenu5"><a href="viewPicture.html?Paysage&martinique" target="">Martinique</a></li></ul></section>');
	} if (type == "Portrait"){
		var contains = ('<a href="../index.html" id="titre"><h2>Portrait</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Portrait&anais" target="">Anaïs</a></li><li class="titremenu2"><a href="viewPicture.html?Portrait&anais2 " target="">Anais2 </a></li><li class="titremenu3"><a href="viewPicture.html?Portrait&angelique " target="">Angelique </a></li><li class="titremenu4"><a href="viewPicture.html?Portrait&johan" target="">Johan</a></li><li class="titremenu5"><a href="viewPicture.html?Portrait&karine " target="">Karine </a></li><li class="titremenu6"><a href="viewPicture.html?Portrait&mathilde" target="">Mathilde</a></li><li class="titremenu7"><a href="viewPicture.html?Portrait&marion " target="">Marion </a></li><li class="titremenu8"><a href="viewPicture.html?Portrait&yulia " target="">Yulia </a></li></ul></section>');
	} if (type == "Animaux"){
		var contains = ('<a href="../index.html" id="titre"><h2>Animaux</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Animaux&bouquetin" target="">Bouquetin</a></li><li class="titremenu2"><a href="viewPicture.html?Animaux&ecureuil" target="">Ecureuil</a></li><li class="titremenu3"><a href="viewPicture.html?Animaux&marmotte" target="">Marmotte</a></li></ul></section>');
	} if (type == "Miniature"){
		var contains = ('<a href="../index.html" id="titre"><h2>Miniatures</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Miniature&miniature1" target="">Miniatures1</a></li><li class="titremenu2"><a href="viewPicture.html?Miniature&miniature2" target="">Miniatures2</a></li><li class="titremenu3"><a href="viewPicture.html?Miniature&miniature3" target="">Miniatures3</a></li></ul></section>');
	} if (type == "Urbex"){
		var contains = ('<a href="../index.html" id="titre"><h2>Urbex</h2></a><section><ul><li class="titremenu1"><a href="viewPicture.html?Urbex&urbex1" target="">Urbex1</a></li><li class="titremenu2"><a href="viewPicture.html?Urbex&urbex2" target="">Urbex2</a></li><li class="titremenu3"><a href="viewPicture.html?Urbex&urbex3" target="">Urbex3</a></li></ul></section>');
	}
	document.getElementById('div1').innerHTML += contains;
}

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
	if (sujet == "voie_lactee"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo" margin="auto">Photos prisent entre 20 et 30 secondes avec une grande ouverture afin d\'imprimer la faible lumière des étoiles. <br><br> Eclairage du premier plan avec une lampe.</br> </li></ol>');
	} else
		if (sujet == "circumPolaire"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo" text-align="center">Assemblage de plusieurs photos de même durée, focal, iso, etc... afin de faire apparaitre le déplacement des étoiles sans avoir la contrainte d\'augmenter la pollution lumineuse </li></ol>');
	} else
	if (sujet == "comete"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo" margin="auto">Photos des différentes comètes passants à proximité de la terre</li></ol>');
	} else
	if (sujet == "ciel_profond"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo" margin="auto">Photos de nébuleuses, galaxies, amas globulaire</br> </li></ol>');
	} else
	if (type == "Astro"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Distance du soleil : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].distSol + '</li><br><li id="colorTitreTextInfo">Diamètre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].diam + '</li><br><li id="colorTitreTextInfo">Tps de révolution : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].revolution + '</li><br><li id="colorTitreTextInfo">Tps de rotation : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].rotation + '</li><br><li id="colorTitreTextInfo">Nbr de satellite : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].sat + '</li><br><li id="colorTitreTextInfo">Nom satellite : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].nomSat + '</li><br><br><li id="colorTitreTextInfo">Particularité : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].particularite + '</li><br></br><li id="colorTitreTextInfo">Distance de la terre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].distTerre + '</li><br><li id="colorTitreTextInfo">Diamètre apparent max : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].diamAppMaxi + '</li><br><li id="colorTitreTextInfo">Magnitude maxi : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].magnMax + '</li><br><li id="colorTitreTextInfo">Dist. lum. de la terre : &nbsp </li><li id="colorTextInfo"> ' + detailAstronomie[sujet].tpsLumTerre + '</li></ol>');
	} if (type == "Paysage"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Capitale : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Capitale + '</li><br><li id="colorTitreTextInfo">Superficie : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Superficie + '</li><br><li id="colorTitreTextInfo">Population : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].Population + '</li><br><li id="colorTitreTextInfo">Nombre de région : &nbsp </li><li id="colorTextInfo"> ' + detailPaysage[sujet].nbrReg + '</li><br></ol> <br><img id="home" src="../images/Miniatures/' + type + '/' + sujet + ' (0).jpg" width="30%" text-align="center" title="Carte"><br></a></img>&emsp;');
	} if (type == "Portrait"){
		var contains = ('<h2>' + newSujet +'</h2><ol><li id="colorTitreTextInfo">Lieux :&nbsp  </li><br><li>Date : </li></ol>');
	} if (type == "Animaux"){
		var contains = ('<h2>' + newSujet)
	} if (type == "Miniature"){
		var contains = ('<h2>' + newSujet)
	} if (type == "Urbex"){
		var contains = ('<h2>' + newSujet)
	}
	document.getElementById('aside1').innerHTML += contains;
}

function afficheInfoDiaporama(type, sujet, number){
	if (sujet == "phenomene"){
		var sujet = "terre";
	}
	//Fait un UpperCase
	String.prototype.ucFirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1);}
	var newSujet = sujet.ucFirst();
	if (type == "Astro"){
		document.getElementById('asideDiaporama').innerHTML = '<ul><li id="colorTextInfo">' + "Objectif : " + detailInfoPanorama[sujet][thisImg].objectif + "<br>" + "Materiel Photo : " + detailInfoPanorama[sujet][thisImg].materielPhoto + "<br>" + "Type photo : "+ detailInfoPanorama[sujet][thisImg].typePhoto + "<br><br>" + "Sensibilite : " + detailInfoPanorama[sujet][thisImg].sensibilite + "<br>" + "focale : " + detailInfoPanorama[sujet][thisImg].focale + "<br>" + "Tps de pose : " + detailInfoPanorama[sujet][thisImg].tpsPose + "<br>" + "Nbr photo superposé : " + detailInfoPanorama[sujet][thisImg].NbrPhoto + "<bt></li></ul>" ;
	} else {
		document.getElementById('asideDiaporama').innerHTML = "<ul><li>Aucune information</li></ul>";
	}
	// document.getElementById('asideDiaporama').innerHTML = "Lieu : " + detailInfoPanorama[sujet][number].lieu + "<br>" + "Photos prise le : " + parameters[0] + "<br>" + "Photos prise le : " + parameters[1];
	// document.getElementById('asideDiaporama').innerHTML = "<ul><li>" + "Lieu : " + detailInfoPanorama[sujet][thisImg].lieu + "<br>" + "Date : " + detailInfoPanorama[sujet][thisImg].date + "<br>" + "Heure : " + detailInfoPanorama[sujet][thisImg].heure + "</li><br><li>" + "Objectif : " + detailInfoPanorama[sujet][thisImg].objectif + "<br>" + "Materiel Photo : " + detailInfoPanorama[sujet][thisImg].materielPhoto + "<br>" + "Type photo : "+ detailInfoPanorama[sujet][thisImg].typePhoto + "</li><br><li>" + "Sensibilite : " + detailInfoPanorama[sujet][thisImg].sensibilite + "<br>" + "focale : " + detailInfoPanorama[sujet][thisImg].focale + "<br>" + "Temps de pose : " + detailInfoPanorama[sujet][thisImg].tpsPose + "<br>" + "Nombre de photo superposé : " + detailInfoPanorama[sujet][thisImg].NbrPhoto + "<bt></li></ul>" ; 
}


// function diaporama(type, sujet){
// 	var contains = ('<a href="diaporama.html?' + type + '&' + sujet +'" target="_blank"><img src="../images/Icon/diaporama.jpg" title="Lire le diaporama"><br>Diaporama</a></img>&emsp;');
// 	document.getElementById('diap').innerHTML += contains;
// }

function accueilDiap(type, sujet, image){
	var srcImageCentral = "../images/" + type + "/" + sujet +" (" + image + ").jpg";
	var valueSubmit = "Fermer&nbsp;la&nbsp;fen&ecirc;tre";	
	var backgroundColor = "background-color:grey";
	// if (type == "Astro"){
	// 	var contains = ('<br><div id="titreDiap">' + detailInfoPanorama[sujet][image].titre + '</div><IMG id="imageCentrale" SRC=" ' + srcImageCentral + '" name="slider"><br><br><input id="submit" type="submit" name="submit" value=' + valueSubmit +' onClick="window.close()" margin="auto" text-align="center" style=' + backgroundColor +'>');
	// } else {
		var contains = ('<br><IMG id="imageCentrale" SRC=" ' + srcImageCentral + '" name="slider"><br><br><input id="submit" type="submit" name="submit" value=' + valueSubmit +' onClick="window.close()" margin="auto" text-align="center" style=' + backgroundColor +'>');
	// }
	document.getElementById('imageCentr').innerHTML += contains;
}

function imageSuivante (type, sujet, images){
	// var im = "../images/icon/rightArrow.png";
	if (images == nbrImageSujet[parameters[1]][0]){
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (1).jpg";
	} else {
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images + 1) + ").jpg";
	}	
	var contains = ('<IMG id="flecheDroite" class="center" SRC=" '+ ima + '" title="Next" margin="auto" name="nextPicture"><br>Suivante</A>');
	document.getElementById('flecheDroite').innerHTML += contains;
}

function imagePrecedente (type, sujet, images){
	// var im = "../images/icon/leftArrow.png";
	if (images == 1){
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (nbrImageSujet[parameters[1]][0]) + ").jpg";
	} else {
		var ima = "../images/Miniatures/" + type + "/" + sujet +" (" + (images - 1) + ").jpg";
	}	
	var contains = ('<IMG id="flecheGauche" class="center" SRC=" '+ ima + '" title="Previous" margin="auto" name="prevPicture"><br>Precedente </A>');
	document.getElementById('flecheGauche').innerHTML += contains;
}

function titrePhotoPano (){
	imgCt = nbrImageSujet[parameters[1]][0];
	if (parameters[0] == "Astro"){
		//Affiche le titre
		document.getElementById('titreDiap').innerHTML = '<div id="titreDiap" >' + detailInfoPanorama[parameters[1]][thisImg].titre + '</div><br><ul id="infoTps"><li id="colorTextInfo">' + 'Lieu : ' + detailInfoPanorama[parameters[1]][thisImg].lieu + '<br>' + 'Date : ' + detailInfoPanorama[parameters[1]][thisImg].date + '<br>' + 'Heure : ' + detailInfoPanorama[parameters[1]][thisImg].heure + '</li></ul><br>' ;
	}
}

// function infoDatePano (){
// 	imgCt = nbrImageSujet[parameters[1]][0];
// 	if (parameters[0] == "Astro"){
// 		//Affiche le titre
// 		document.getElementById('infoDatePano').innerHTML = '<ul id="infoTps"><li>' + 'Lieu : ' + detailInfoPanorama[parameters[1]][thisImg].lieu + '<br>' + 'Date : ' + detailInfoPanorama[parameters[1]][thisImg].date + '<br>' + 'Heure : ' + detailInfoPanorama[parameters[1]][thisImg].heure + '</li></ul><br>' ;
// 	}
// }

function detailPhoto (){
	imgCt = nbrImageSujet[parameters[1]][0];
	if (parameters[0] == "Astro"){
		// Affiche les détails de la photo sur le diaporama
		document.getElementById('asideDiaporama').innerHTML = "<ul><li>" + "Objectif : " + detailInfoPanorama[sujet][thisImg].objectif + "<br>" + "Materiel Photo : " + detailInfoPanorama[sujet][thisImg].materielPhoto + "<br>" + "Type photo : "+ detailInfoPanorama[sujet][thisImg].typePhoto + "<br><br>" + "Sensibilite : " + detailInfoPanorama[sujet][thisImg].sensibilite + "<br>" + "focale : " + detailInfoPanorama[sujet][thisImg].focale + "<br>" + "Tps de pose : " + detailInfoPanorama[sujet][thisImg].tpsPose + "<br>" + "Nbr photo superposé : " + detailInfoPanorama[sujet][thisImg].NbrPhoto + "<bt></li></ul>" ;
	}
}

function newSlide(direction) {
	imgCt = nbrImageSujet[parameters[1]][0];
	if (document.images) {
		thisImg = thisImg + direction;
		if (thisImg < 1) {
			thisImg = imgCt;
		}
		if (thisImg > imgCt) {
			thisImg = 1;
		}
		document.slider.src = "../images/" + parameters[0] + "/" + parameters[1] +" (" + thisImg + ").jpg";
		// document.getElementById('asideDiaporama').innerHTML = "Photos prise le : " + thisImg + "<br>" + "Photos prise le : " + parameters[0] + "<br>" + "Photos prise le : " + parameters[1];
		// alert (parameters[0] + " " + parameters[1] + " " + thisImg);
		// document.getElementById('asideDiaporama').innerHTML = "Lieu : " + detailInfoPanorama[sujet][thisImg].lieu + "<br>" + "Date : " + detailInfoPanorama[sujet][thisImg].date + "<br>" + "Heure : " + detailInfoPanorama[sujet][thisImg].heure;
		if (parameters[0] == "Astro"){
			//Affiche le titre +  les détails de la photo sur le diaporama
			document.getElementById('titreDiap').innerHTML = '<div id="titreDiap">' + detailInfoPanorama[parameters[1]][thisImg].titre + '</div><br><ul id="infoTps"><li id="colorTextInfo">' + 'Lieu : ' + detailInfoPanorama[parameters[1]][thisImg].lieu + '<br>' + 'Date : ' + detailInfoPanorama[parameters[1]][thisImg].date + '<br>' + 'Heure : ' + detailInfoPanorama[parameters[1]][thisImg].heure + '</li></ul><br>' ;
			document.getElementById('asideDiaporama').innerHTML = '<ul><li id="colorTextInfo">' + "Objectif : " + detailInfoPanorama[parameters[1]][thisImg].objectif + "<br>" + "Materiel Photo : " + detailInfoPanorama[parameters[1]][thisImg].materielPhoto + "<br>" + "Type photo : "+ detailInfoPanorama[parameters[1]][thisImg].typePhoto + "<br><br>" + "Sensibilite : " + detailInfoPanorama[parameters[1]][thisImg].sensibilite + "<br>" + "focale : " + detailInfoPanorama[parameters[1]][thisImg].focale + "<br>" + "Tps de pose : " + detailInfoPanorama[parameters[1]][thisImg].tpsPose + "<br>" + "Nbr photo superposé : " + detailInfoPanorama[parameters[1]][thisImg].NbrPhoto + "<bt></li></ul>" ;
		}

		if (thisImg == imgCt){
			document.nextPicture.src = "../images/Miniatures/" + parameters[0] + "/" + parameters[1] + " (1).jpg";
			document.getElementById('submit').value = "Dernière photo Fermer la fenêtre";
			document.getElementById('submit').style = "background-color:green";
		} else if (thisImg != imgCt) {
			document.nextPicture.src = "../images/Miniatures/" + parameters[0] + "/" + parameters[1] + " (" + (thisImg + 1) + ").jpg";                        
			document.getElementById('submit').value = "Fermer la fenêtre";
			document.getElementById('submit').style = "background-color:grey";
		}

		if (thisImg == 1){
			document.prevPicture.src = "../images/Miniatures/" + parameters[0] + "/" + parameters[1] + " (" + (nbrImageSujet[parameters[1]][0]) + ").jpg";
		} else {
			document.prevPicture.src = "../images/Miniatures/" + parameters[0] + "/" + parameters[1] + " (" + (thisImg - 1) + ").jpg";
		}
	}
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