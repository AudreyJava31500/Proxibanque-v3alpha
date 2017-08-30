*******************************************************************************************************
*******************************************************************************************************


Application WEB de gestion des Clients "ProxiBanquev2"   --- 21/08/2017-22/08/2017


*******************************************************************************************************
*******************************************************************************************************

Nous vous livrons ce jour l'application Web que vous nous avez commandée.

Vous trouverez ci dessous les directives pour utiliser ladite application.

-------------------------------------------------------------------------------------------------
0 - Serveur Apache 2.4
-------------------------------------------------------------------------------------------------

Vérifier auprès de votre informaticien que le serveur apache est bien installé sur votre poste et 
qu'il est lancé.

-------------------------------------------------------------------------------------------------
1 - Copie du dossier de l'application WEB : "Proxibanque-v2"
-------------------------------------------------------------------------------------------------

Aller dans les fichiers du serveur Apache (version 2.4):

Pour cela: 
--------

Dans C: 
ouvrir le dossier Programme
ouvrir le dossier Apache Software Fondation
ouvrir le dossier Apache 2.4
ouvrir htdocs et y copier le dossier Proxibanque-v2 que nous vous avons fourni. 


-------------------------------------------------------------------------------------------------
2 - Ouverture de l'application "Proxibanque-v2"
-------------------------------------------------------------------------------------------------

Ouvrez votre navigateur et copiez cette URL:

localhost/Proxibanque-v2/WebContent/index.html
 

NB: Il serait préférable de ne pas utiliser Internet Exploreur: la conception est en cours pour ce navigateur.

-------------------------------------------------------------------------------------------------------
3 - Description de l'application "Proxibanque-v2"
-------------------------------------------------------------------------------------------------------


La banque ProxiBanque nous a choisit pour développer une application WEB permettant à ses conseillers de gérer leurs clients et services à forte valeur ajoutée, comme le service de virement compte à compte.


Page d'accueil:
---------------

Sur la page d'accueil, vous identifierez premièrement une barre de navigation.
Cette barre de navigation est notamment à destination du grand public qui souhaite se renseigner sur votre agence.
Elle permet de naviguer entre les différentes pages de présentation de votre banque:
-Notre agence : Informations pratiques et Accès
-Nos conseillers : Présentation des conseillers travaillant dans votre agence
-Nous contacter : Formulaire de contact 

Pour accéder au contenu propre aux conseillers, chaque conseiller doit se connecter en cliquant dans la barre de navigation sur le bouton à droite "Login Conseiller" 

Login:
---------------
Pour s'authentifier, vous devez vous munir de votre identifiant et de votre mot de passe.

Lors du developpement de l'application "Proxibanque-v2" nous avons créé pour les tests deux conseillers fictifs. Vous pouvez utiliser les identifiants et mot de passes de ces deux conseillers pour tester l'application web.

Liste des conseillers:
-------------------
*** Dupont Bernard : identifiant: dupontbernard     mot de passe: 1234
*** Martin Eve : identifiant: martineve     mot de passe: 9876


Bienvenue sur votre espace conseiller
--------------------------------------

Vous pouvez:

Gérer un client	
	* Effectuer une mise à jour des données de votre clients : Editer
	* Afficher la liste des comptes d'un client : Afficher les comptes
	* Effectuer un virement interne entre les comptes d'un même clients

et/ou	Effectuer un virement externe entre les comptes de deux clients de votre agence 
    

	
Pour tester l'application, nous avons créé pour vous une liste de clients:
--------------------------------------------------------------------------
	
Clients affectés à Mr Dupont: 
Bodin Audrey - Rue des Lilas 31500 Toulouse - 0637159874 - bodinaudrey@gmail.com - Numero client:311234A
Bon Jean - Impasse des Platanes 78100 Le chesnay - 0647965241 - bon.jean@gmail.com - Numero client: 786789A


Clients affectés à Mme Martin: 
Thibaut Séverin - Avenue du cul de sac 31430 Toulouse - 0645896312 - thibaut.severin@gmail.com	- Numero client: 315678B
Cantal Chantal - place de Gergovie 63500 Clermont ferrand - 0473587463 - cantal.chantal@gmail.com - Numero client: 636789A


Suite à votre authentification, vous accedez à votre espace personnel et vous voyez votre liste de clients personels.

Dans votre espace, vous pouvez choisir de faire un virement externe entre deux clients de la banque ou de travailler sur un client spécifique.

Pour un client spécifique, pour chaque action de gestion de client, lorque vous accédez aux formulaires ou tableaux, vous avez à disposition un bouton de retour vers votre espace, ou vous pouvez utiliser la barre de navigation.




Bonne navigation à tous!




------------------------------------------------------------------------
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
NB1
------------------------------------------------------------------------
Vous pouvez configurer les tests de cette application en ouvrant les fichiers: 
listeClient.json
listeCompte.json
listeConseiller.json (ouvrir avec notePad ou notePad++ ou un autre éditeur de texte)

qui se trouvent dans le dossier proxibanque-v2, webContent.

------------------------------------------------------------------------
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
NB2
------------------------------------------------------------------------

Certains pages de l'application sont toujours en cours de développement concernant la page de présentation destinée au public.

La partie Espace conseiller est complète.

-----------------------------------------------------------------------------------------------------------------------------------------------------------



		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
		%%	Revsin Alni Team vous remercie pour la confiance que vous nous portez.  %%
		%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


				© Copyright - Tous droits réservés