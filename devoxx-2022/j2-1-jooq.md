# JOOQ, joy of SQL

Conference

## Abstract

- Kevin Davin

Et si l'on reprenait le contrôle de nos interactions avec notre base de données préférée? Car en vrai, nos BDD sont des monstres de puissance qui sont souvent sous exploitées 😓.

Nous verrons, avec JOOQ comment écrire des requêtes SQL simples ou évoluées, le tout facilement et de manière type-safe !

Venez découvrir cette superbe librairie OpenSource, compatible Java, Kotlin & Scala, qui va vous permettre de vous simplifier la vie et d'améliorer votre code… et même de découvrir de super fonctionnalités SQL que vous n'imaginiez même pas.

## Notes

### historique

JDBC introduit en Java 1.1 : lib bas niveau

Échec des EJB

Java 8 et les stream -> on passe de l'impératif au déclaratif - déclic pour le speacher

Défauts des ORM (hibernate) :
- JPQL : requêtage au runtime
- criteria : dsl mal ficelé, pas type safe
- couches
- Annotation hell
On doit trouver des solutions aux problèmes que ça amène et qu'on aurait pas eu si pas utilisé

PB des conventions Spring data, quarkus et autre : pas type safe


### jooq

Dsl over SQL

Supporte les records vs les orm ne les supporte pas

Générateur de code (mais pas obligé) très typé avec join et mapper
Génération de dao + entity hibernate via des options dans le plugin de génération

Débug avec le résultat des requêtes

Sucre syntaxique pour simplifier la syntaxe
Système de dialect comme hibernate avec emulation des fonctions natives si pas pris en charge : migration Oracle vers postgres plus facile
OnConflictUpdate, onDuplicateKey pour définir le comportement en cas d'erreur

Requêtes pas évidente avec les multiset

Requêtes à conditions dynamiques très expressives
Exemple avec de la pagination : on selectionne les datas de la table principale et on va ensuite chercher le reste

Utilise les features avancées de SQL via la DSL
Reco traitement SQL plutôt que Java stream
Exemples dans les slides de requêtes balèzes -> (ré)apprentissage SQL

JSONB postgres : killing feature car json indexable -> SQL et nosql à la fois - adaptation pour jooq car opérateurs sur JSON pas porté sur autres SGBD

## Links

