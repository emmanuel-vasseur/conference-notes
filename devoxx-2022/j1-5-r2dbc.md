# R2DBC = R2D2 + JDBC (enfin presque...)

Tools-in-Action

## Abstract

- Bruno Bonnin

R2DBC ? Quésaco ? Les Reactive Streams, ça vous parle certainement, he bien, R2DBC, c'est de la programmation réactive pour les bases de données. Dans ce quickie, nous aborderons les concepts sous-jacents du projet Reactive Relational Database Connectivity et comment tout ça peut être mise en oeuvre avec notamment Spring Data R2DBC.

## Notes

Etat de l'art des DB avec reactive streams en NoSQL (cassandra ...) et SQL : Oracle (reactive extension), vertex jdbc client

La SPI basée sur les reactive stream

Exemple avec h2 & postgres, Oracle & MySQL supporté, joke sur l'implem DB2 (repo github vide)

Spring data R2DBC :
- DatabaseClient moins bas niveau que le R2DBC de base
- Un template plus haut niveau avec de la DSL
  [!r2dbc-dsl.jpg]
- Repository ReactiveCrudRepository

.log() sur les reactive stream pour logger les infos SQL

Proxy pour ajouter des logs et métriques (listeners)

Jooq & micronaut prennent aussi en charge R2DBC

Questions :
- ne sais pas si pris en charge par quarkus
- bench pas réalisés
- version 1.x prévue cette année

## Links

https://github.com/bbonnin/intro-r2dbc
