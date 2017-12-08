function loadFichier(fic){
  return 'Jon Snow!Westeros - Nord!Roi!Jon Snow!1!Stark!Meneur dhommes!Arreter les marcheurs blancs!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones \
  Arya Stark!Westeros - Nord!Combattante!Jon Snow!2!Stark!Tueuse/Determinee!Se venger!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones \
  Sansa Stark!Westeros - Nord!Reine!Jon Snow!2!Stark!Determinee!Reigner sur le nord!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones \
  Bran Stark!Westeros - Nord!Change-peau!Jon Snow!2!Stark!Predire le futur!Comprendre son passe!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Catelyn Tully!Westeros - Nord!Reine!Aucun!2!Stark!Sagesse!Proteger ses enfants!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Daenerys Targaryen!Westeros - Essos!Reine!Aucun!1!Targaryen!Insensible au feu/aura naturelle!Reigner sur westeros!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Ramsay Bolton!Westeros - Nord!Roi!Aucun!2!Bolton!Pret a tout!Reigner sur le nord!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Walder Frey!Westeros!Roi!Aucun!1!Frey!Fourbe!Se venger des starks!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Theon Greyjoy!Westeros!Bras droit!Yara Greyjoy!2!Greyjoy!Peureux!Redorer son image!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Yara Greyjoy!Westeros!Reine!Aucun!1!Greyjoy!Forte!Defendre les interets de son peuple!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Euron Greyjoy!Westeros!Roi!Aucun!1!Greyjoy!Combattant aguerri!Se marier avec Cersei!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Tyrion Lannister!Westeros - Essos!Main!Daenerys Targaryen!2!Lannister!Intelligent/droit!Profiter de la vie!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Jaime Lannister!Westeros - Kings Landing!Main!Cersei Lannister!2!Lannister!droit/devoue!Defendre Cersei!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Cersei Lannister!Westeros - Kings Landing!Reine!Aucun!1!Lannister!Determinee/pret a tout!Conserver son throne!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Tywin Lannister!Westeros - Kings Landing!Roi!Aucun!1!Lannister!Meticuleux!Conserver son throne!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Oberyn Martell!Dorne!Roi!Aucun!1!Martell!Maniement de lepee!Profiter de la vie!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Ellaria Sand!Dorne!Reine!Aucun!2!Martell!Combattante agile!Venger son mari!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Hodor!Westeros - Nord!Valet!Bran Stark!3!Peuple de Westeros!Force incroyable!Defendre Brann!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Jorah Mormont!Westeros - Essos!Conseiller!Daenerys Targaryen!2!Targaryen!Courageux!Defendre sa reine!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Daario Naharis!Essos!Combattant!Daenerys Targaryen!3!Targaryen!Combattant aguerri!Defendre sa reine!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Missandei!Essos!Conseiller!Daenerys Targaryen!2!Targaryen!Devoue/attentionnee!Servir sa reine!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Olenna Tyrell!Westeros!Reine!Aucun!1!Tyrell!Femme daffaire!Proteger ses enfants!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Margaery Tyrell!Westeros!Reine!Aucun!2!Tyrell!Manipulatrice!Le pouvoir!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Loras Tyrell!Westeros!Prince!Aucun!2!Tyrell!Combattant aguerri!Profiter de la vie!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Petyr Baelish!Westeros!Conseiller!Aucun!2!Peuple de Westeros!Manipulateur!Se marier avec Sansa!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Varys!Westeros!Conseiller!Aucun!2!Peuple de Westeros!Fin startege!Controler le monde!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Le Grand Moineau!Westeros!Religieux!Aucun!3!Peuple de Westeros!Persuasif!Diffuser sa religion!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Brienne de Torth!Westeros!Chevalier!Sansa Stark!3!Peuple de Westeros!Devoue!Defendre Sansa!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
  Bronn!Westeros!Mercenaire!Aucun!3!Peuple de Westeros!Combattant aguerri!Profiter de la vie!fr.wikipedia.org/wiki/Personnages_de_Game_of_Thrones\
';
}



var fichier = loadFichier("Data_GOT.csv").split(" \ "); //TODO
var data = [];
for (var i = 0, len = fichier.length; i < len; i++) {
  data[i]=(fichier[i].split("!"));
}


function getRole(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return "Son role est : " + data[i][2]
    }
  }
  return mot;
}

function getLive(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return nom + " vit actuellement à : " + data[i][1]
    }
  }
  return mot;
}

function getWant(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return "Le but de "+ nom + " est : " + data[i][7]
    }
  }
  return mot;
}

function getQual(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return "Pour moi, la principale qualité de  "+ nom + " est : " + data[i][6]
    }
  }
  return mot;
}

function getResp(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return "Le responsable de " + nom + " est : " + data[i][3]
    }
  }
  return mot;
}

function getWiki(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][0].toLowerCase().indexOf(nom) != -1){
      return nom + " est un " + data[i][2] + " qui ne vit que pour " + data[i][7] +  ". N'hesite pas a visiter sa page wiki : " + data[i][8]
    }
  }
  return mot;
}
function getAll(mot){
  var debut = mot.indexOf("[");
  var fin = mot.indexOf("]");
  if (debut == -1 || fin == -1){
    return mot;
  }
  var nom = mot.substring(debut+1, fin);

  var liste = "Les " + nom + " sont composés de "

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][5].toLowerCase().indexOf(nom) != -1){
      liste = liste + data[i][0] + " "
    }
  }
  return liste
}

function cutQuotes(mot){
  var newmot=""
for (i=1;i<mot.length-1;i++){
  newmot+=mot.charAt(i)
  }
  return newmot;
}

function analyse(mot){
  if (mot.indexOf("wiki") != -1 ) {mot = getWiki(mot);}
  if (mot.indexOf("role") != -1 ) {mot = getRole(mot);}
  if (mot.indexOf("live") != -1 ) {mot = getLive(mot);}
  if (mot.indexOf("getAll") != -1 ) {mot = getAll(mot);}
  if (mot.indexOf("resp") != -1 ) {mot = getResp(mot);}
  if (mot.indexOf("want") != -1 ) {mot = getWant(mot);}
  if (mot.indexOf("qual") != -1 ) {mot = getQual(mot);}
  return mot;
}
