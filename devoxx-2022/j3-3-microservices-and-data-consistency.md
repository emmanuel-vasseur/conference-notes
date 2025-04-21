# Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?

Conference

## Abstract

- Jean-François James

Les architectures microservices ont le vent en poupe. Elles présentent de nombreux avantages pour mettre en place les bonnes pratiques DevOps et faire travailler en parallèle des équipes pluridisciplinaires autonomes.

Evoluer du monolithe vers les microservices n’est pas un long fleuve tranquille… Les challenges ne manquent pas.

L’un d’entre eux, et non des moindres, est la cohérence des données. Un des principes de base est que chaque service possède sa propre base de données.

Quand une transaction métier invoque plusieurs services, on ne peut donc plus compter sur les bonnes vieilles transactions ACID des serveurs SQL. Quant aux transactions distribuées XA/2PC, oubliez les, elles sont jetées au pilori des mauvaises pratiques depuis bien longtemps !

Une fois ce constat établi, on fait quoi concrètement ? Comment peut-on répondre à cette problématique ?

Dans cette présentation, nous verrons comment procéder avec deux approches : les SAGA et les LRA (Long Running Action). Un exemple concret basé sur MicroProfile et le framework Eeventuate Tram vous permettra de les appréhender et de choisir la bonne option pour votre projet Microservices

## Notes

Exemple concret :
- LRA microprofile : Besoin d'un LRA coordinator
- SAGA Eventuate : coordination ou orchestration avec CDC Kafka postgres
c.f. slide comparatif (à récupérer)

La méthode de compensation peut être appelée en concurrence avec la méthode LRA : use case avec un timeout - cancel termine avant la fin du LRA

CDC est fait avec Spring boot (endpoints metrics)

Revoir la prez pour bien comprendre le code SAGA et même la concurrence LRA

[!j3-3-microservices-and-data-consistency.jpg]

++ Saga car asynchrone
++ LRA pour la simplicité

Regarder la prez pour la question sur "comment on fait si la méthode de compensation échoue"

## Links

- https://github.com/jefrajames/lra-demo
- https://github.com/jefrajames/saga-demo