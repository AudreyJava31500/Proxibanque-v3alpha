/**
 *
 * LOGIN
 * fonction mycallbackLogin
 * fonction verifier
 *  
 *  CONSEILLER
 * fonction call back()
 * fonction call()
 * fonction afficherconseiller()
 * fonction editer()
 * fonction affichercompte
 * fonction virement interne
 * fonction lancer les fonction  on load
 * 
 * CONTACT 
 * fonction show_alertContact()
 * 
 * 
 * 
 */

//Login.html
let myCallBackLogin = function(reponse) {
		console.log("callback a executer a la reception d'une reponse")
		//alert(reponse.responseText);
		let identifiant = document.getElementById("login").value;
		let motdepasse = document.getElementById("password").value;
		console.log(login);
		console.log("JsonParse")
		let conseillers = JSON.parse(reponse.responseText);

		let loginOk = false;
		let i = 0;
		while (loginOk !== true && i < conseillers.length) {
			let conseiller = conseillers[i];
			if (conseiller.login === identifiant && conseiller.password === motdepasse) {
				loginOk = true;
				var indice_conseiller = i + 1;
				break;
			}i++;
		}
		
		if (loginOk === true) {
			location.href = 'conseiller.html?indice_conseiller='+ indice_conseiller;
		} else {
			let alertId = document.getElementById("alert");
			alertId.className = "alert alert-danger";
			alertId.innerHTML = "<strong>Echec authentification Conseiller :</strong> Essayer à nouveau svp !"
		}
	}

	function verifier() {
		console.log("Appel AJAX");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myCallBackLogin(this);
			}
		}
		xhttp.open("GET", "listeConseiller.json", true);
		xhttp.send();
	}

//conseiller.html	
	let myCallBackconseiller = function(reponse) {
		console.log("callback a executer a la reception d'une reponse")
		//alert(reponse.responseText);	      
		console.log("JsonParse")
		var url_string = window.location.href;
		//alert(url_string)
		var url = new URL(url_string);
		var indice_conseiller = url.searchParams.get("indice_conseiller");
		if (indice_conseiller === null) {
			indice_conseiller = sessionStorage.getItem("indice_conseiller");
		} else {
			sessionStorage.setItem("indice_conseiller",indice_conseiller);
		}
		//alert(indice_conseiller)
		let elements = JSON.parse(reponse.responseText);
		let table = "<tr><th>Numero</th><th>Nom</th><th>Prénom</th><th>Adresse</th><th>Code Postal</th><th>Ville</th><th>Téléphone</th><th>Email</th></tr>";
		let option = "";
		for (i = 0; i < elements.length; i++) {
			let item = elements[i];
			if (indice_conseiller === item.numeroConseiller) {
				table += "<tr><td>" + item.numero + "</td><td>" + item.nom
						+ "</td><td>" + item.prenom + "</td><td>"
						+ item.adresse + "</td><td>" + item.codePostal
						+ "</td><td>" + item.ville + "</td><td>"
						+ item.telephone + "</td><td>" + item.email
						+ "</td></tr>";
				option += '<option value="'+ item.numero +'">' + item.prenom + " " + item.nom
						+ " (" + item.numero + ")</option>";
			}
		}
		let elementTable = document.getElementById("tableResultat");
		elementTable.innerHTML = table;
		let elementList = document.getElementById("sel1");
		elementList.innerHTML = option;

	}

	function callconseiller() {
		console.log("Appel AJAX");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myCallBackconseiller(this);
			}
		}
		xhttp.open("GET", "listeClient.json", true);
		xhttp.send();
	}


	function afficherNomConseiller() {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var url_string = window.location.href;
				//alert(url_string)
				var url = new URL(url_string);
				indice_conseiller = url.searchParams.get("indice_conseiller");
				if (indice_conseiller === null) {
					indice_conseiller = sessionStorage.getItem("indice_conseiller");
				} else {
					sessionStorage.setItem("indice_conseiller",indice_conseiller);
				}
				
				let elements = JSON.parse(this.responseText);
				for (i = 0; i < elements.length; i++) {
					let item = elements[i];
					//console.log(item.numero);
					if (indice_conseiller == item.numero) {
						var nom = item.nom;
						//alert(nom);
						var prenom = item.prenom;
						break;
					}
				}
					let h1Conseiller = document.getElementById("nomConseiller");
					h1Conseiller.innerHTML = "Bienvenue <strong>" + prenom + " " + nom + "</strong> dans votre espace conseiller";
					let photoConseiller = document.getElementById("photoConseiller");
					photoConseiller.src = "Images/"+nom+".jpg";
				
			}
		}
		xhttp.open("GET", "listeConseiller.json", true);
		xhttp.send();
	}


	function editer() {
		let numeroClient = document.getElementById("sel1").value;
		location.href='editer.html?numero_client=' + numeroClient;
	}

	function afficherCompte() {
		let numeroClient = document.getElementById("sel1").value;
		location.href='compteclient.html?numero_client=' + numeroClient;
	}

	function virementInterne() {
		let numeroClient = document.getElementById("sel1").value;
		location.href='virinterne.html?numero_client=' + numeroClient;
	}


/*
	var FunOnl = new Array(); 

	function lancer(fonction) { 

	    FunOnl[FunOnl.length] = fonction; 

	}


	window.onload = function() { 

	    for(var i = 0, longueur = FunOnl.length; i < longueur; i++) 

	        FunOnl[i]();

	};

	lancer(callconseiller);
	lancer(afficherNomConseiller);
	
	*/
	
	
	
// Editer.html	
	let myCallBackEdition = function(reponse) {
		console.log("callback a executer a la reception d'une reponse")
		//alert(reponse.responseText);	      
		console.log("JsonParse")
		var url_string = window.location.href;
		//alert(url_string)
		var url = new URL(url_string);
		var numeroClient = url.searchParams.get("numero_client");
		//alert(indice_conseiller)
		let elements = JSON.parse(reponse.responseText);
		let table = "<tr><th>Indice</th><th>Conseiller</th><th>Numero</th><th>Nom</th><th>Prénom</th><th>Adresse</th><th>Code Postal</th><th>Ville</th><th>Téléphone</th><th>Email</th></tr>";
		let input = "";
		for (i = 0; i < elements.length; i++) {
			let item = elements[i];
			if (numeroClient === item.numero) {
				table += "<tr><td>" + (i + 1) + "</td><td>" + item.conseiller
						+ "</td><td>" + item.numero + "</td><td>" + item.nom
						+ "</td><td>" + item.prenom + "</td><td>"
						+ item.adresse + "</td><td>" + item.codePostal
						+ "</td><td>" + item.ville + "</td><td>"
						+ item.telephone + "</td><td>" + item.email
						+ "</td></tr>";
				input += '<label for="prenom">Prenom :</label><input type="text" class="form-control" name="prenom" id="prenom" value="'+ item.prenom +'"><br>'
						+ '<label for="nom">Nom :</label><input type="text" class="form-control" name="nom" id="nom" value="'+ item.nom +'"><br>'
						+ '<label for="email">Email :</label><input type="email" class="form-control" name="email" id="email" value="'+ item.email +'"><br>'
						+ '<label for="adresse">Adresse :</label><input type="text" class="form-control" name="adresse" id="adresse" value="'+ item.adresse +'"><br>'
						+ '<label for="codePostal">Code Postal :</label><input type="text" class="form-control" name="codePostal" id="codePostal" value="'+ item.codePostal +'"><br>'
						+ '<label for="ville">Ville :</label><input type="text" class="form-control" name="ville" id="ville" value="'+ item.ville +'"><br>';
				break;
			}
		}
		//let elementTable = document.getElementById("tableResultat");
		//elementTable.innerHTML = table;
		let elementList = document.getElementById("modif");
		elementList.innerHTML = input;

	}

	function callEdition() {
		console.log("Appel AJAX");
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				myCallBackEdition(this);
			}
		}
		xhttp.open("GET", "listeClient.json", true);
		xhttp.send();
	}

	function envoyerEdition() {
		let prenom = document.getElementById("prenom").value;
		let nom = document.getElementById("nom").value;
		let email = document.getElementById("email").value;
		let adresse = document.getElementById("adresse").value;
		let codePostal = document.getElementById("codePostal").value;
		let ville = document.getElementById("ville").value;
		alert("Le client possède maintenant les valeurs suivantes :\nprenom : " + prenom
				+ "\nnom : " + nom + "\nemail : " + email + "\nadresse : " + adresse
				+ "\ncode postal : " + codePostal + "\nville : " + ville);
	}
	
	window.onload = callEdition;

//contact.html
function show_alertContact(){
	alert(" Nous avons reçu votre message. Merci. Nous vous répondrons dans les plus brefs délais.");
}

//virement externe
let myCallBackvirexterne = function(reponse) {

	let elements = JSON.parse(reponse.responseText);
	let table = "<tr><th>Numero de compte</th><th>Numero de client</th><th>Type de compte</th><th>Solde (&euro;)</th></tr>";
	let input = "";
	let option = "";
	for (i = 0; i < elements.length; i++) {
		let item = elements[i];
		table += "<tr><td>"+ item.numeroCompte + "</td><td>" + item.numeroClient + "</td><td>" + item.typeCompte
				+ "</td><td>" + item.solde + "</td></tr>";
		option += '<option value="'+ item.solde +'">Compte '
				+ item.typeCompte + " : " + item.numeroCompte
				+ " (Solde : " + item.solde + "&euro;)</option>";

	}
	let elementTable = document.getElementById("tableResultat");
	elementTable.innerHTML = table;
	let elementList1 = document.getElementById("sel1");
	elementList1.innerHTML = option;
	let elementList2 = document.getElementById("sel2");
	elementList2.innerHTML = option;
}

function callvirexterne() {
	console.log("Appel AJAX");
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myCallBackvirexterne(this);
		}
	}
	xhttp.open("GET", "listeCompte.json", true);
	xhttp.send();
}


function virer() {
	let solde1 = Number(document.getElementById("sel1").value);
	let solde2 = Number(document.getElementById("sel2").value);
	let montant = Number(document.getElementById("montant").value);
	let alertId = document.getElementById("alert");

	
	if (montant < 0){
		alertId.className = "alert alert-danger";
		alertId.innerHTML = "<strong>Virement KO ! </strong> Vous ne pouvez pas verser un montant négatif! ";
		
		
	} else{
	if (solde1 >= montant) {
		alertId.className = "alert alert-success";
		alertId.innerHTML = "<strong>Virement OK ! </strong>Le compte débité a maintenant un solde de "
				+ (solde1 - montant)
				+ "&euro; et le compte crédité un solde de "
				+ (solde2 + montant) + "&euro;.";
	} else {
		alertId.className = "alert alert-danger";
		alertId.innerHTML = "<strong>Virement KO ! </strong>Le compte à débiter (solde = "
				+ solde1
				+ "&euro;) "
				+ "ne possède pas un solde suffisant pour effectuer un virement de "
				+ montant + "&euro;.";
	}
}
}

window.onload = callvirexterne;

