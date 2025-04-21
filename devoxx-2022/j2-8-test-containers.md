# REX: TDD avec TestContainers

Tools-in-Action

## Abstract

- Julien Durillon

Après deux ans à travailler sur un projet ayant beaucoup de dépendances (DB, broker, Zookeeper, Warp10…) je vous fais un retour sur TestContainers, le framework permettant de lancer et d'initialiser toutes ces dépendances directement lors du lancement de vos tests.

À travers des exemples de tests et d'API, nous verrons comment utiliser TestContainers.

## Notes

Lancer les tests lors de la PR (à posteriori) c'est trop tard

Lib Java sur Junit qui pilote du docker
Autres langages possible

Permet de reset facilement l'état

L'initialisation est faite par le framework de test : permet d'être plus fin

Annotation sur la classe de test et la variable qui représente le conteneur

Use case :
- communication entre services
- SQL sur moteur cible
- Non regression
- APIs/test de endpoints

TDD : faire le test d'intégration avant le code

Support des différentes technos (classe qui gère l'image) présenté sur le site

Quid de l'intégration avec Spring et autres ? (Junit extensions)
