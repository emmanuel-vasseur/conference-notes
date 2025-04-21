# Coder pour l'Éternité, comprendre le développement sur la blockchain Ethereum

Conference

## Abstract

- Mathias Herberts

La blockchain est de toutes les discussions, mais trop souvent on assimile blockchain et cryptomonnaies. Quel que soit l'avis que l'on peut avoir sur la question, il ne faut pas oublier que la blockchain c'est avant tout du code qui s'exécute dans un environnement très particulier.

Cette présentation vise à plonger dans les profondeurs de la blockchain Ethereum en couvrant des sujets comme la machine virtuelle sous-jacente, le rôle des mineurs, les contrats intelligents et leur modèle d'exécution, les oracles.

Vous sortirez de là en ayant une compréhension de la blockchain Ethereum du point de vue du code et avec un peu de chance l'envie de laisser une trace pour la postérité en déployant votre propre code sur cette blockchain.

## Notes

Vocabulaire :
- Double spend : le fait de délivrer (garantir) un bien numérique
- UTXO 
- Arbre de Merkle : arbre de hash avec le parent = sum des hash enfants
- Elliptic curve cryptography : permet ?? Meilleur que clé privée-publique
- Wallers : contient les clés (hardware, software/metamask), utilisé pour signer la transaction
- Blockchain : Merkel tree ou chaque block s'empile
- Miners : pool avec des hasheurs (fragmentation des valeurs de hash a trouver)
- World state : l'ensemble des blocks de la blockchain (validés par consensus)

Histoire :

Bitcoin : Blockchain basée sur UTXO limitées - échange de coin uniquement

Naissance de ethereum : decentralized computer
Basée sur une VM (sandboxée) : EVM
Exécution déterministe (reproductible)
Transaction avec frais (fées) + mining renumeration
GAS : coût d'exécution de la transaction - par instruction -> limite de block / GAS pour avoir une intégration de block tous les 14s (10 min pour le bitcoin)

3 types de transaction :
- Envoi d'ETH
- Création smart contract
- Interaction avec smart contract

Reçu (receipt) : résultat de l'intégration dans la blockchain par mining - ou pas si l'intégration est trop longue

Smart contract pas smart
Si pas d'appel à `selfdestruct` le code reste pour l'éternité

Outils : langages, IDE, explorer

Oracle : Pour interagir avec l'extérieur (pont)

Les bugs peuvent coûter cher

Evolution de algo par `consensus proof of state` pour être plus ligth en consommation de ressources

## Links

Liens dans les slides (beaucoup !)
