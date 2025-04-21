# Découvrez la programmation au niveau type et relevez le challenge des types typescript !

Hands-on Labs

## Abstract

- Florent Le Gall
- Gabriel Vergnaud

TypeScript est adopté par 78% des projets web selon le rapport State of JS 2020 et pourtant les fonctionnalités avancées du système de type restent méconnues des développeurs. Et si nous vous disions qu’il est possible d’aller beaucoup plus loin qu’ajouter des définitions de types à son code et d’utiliser ce système comme un langage de programmation pratiquement “turing-complet” ?

Nous vous proposons de découvrir le monde du "type level programming" et d’apprendre à créer de vrais algorithmes uniquement avec des signatures de types. En partant des fondamentaux jusqu'à arriver à certaines des fonctionnalités les plus avancées du type system, nous vous proposerons de résoudre avec nous des "challenges", comme extraire le type contenu dans une promesse, transformer les noms d’une interface de snake case en camelcase ou même parser le type des paramètres de routing à partir d'une URL!

Si vous avez déjà lutté face à des messages d'erreur TypeScript, ou si vous vous êtes déjà senti perdu face à une signature de type qui semble écrite dans un langage venant d'une autre planète, ce workshop est fait pour vous. Plus aucun type ne vous résistera !

## Notes

Exercices sur le type system de typescript : mot clé "type"

assez avancé : branch, loop ...

la data = types

types = sets/ensembles (contient d'autre types)

A & B : toutes les props de A et B

tuple = [A, B] contient A et B

unknown = all
never = none

any specifique ("weird") (désactive le type-checking) :
 A | any = any
 A & any = any

namespace "bonus" dans les exercices : plus dur

**TP à finir**

## Links

- Slides : https://docs.google.com/presentation/d/1FrEoBQ93f396u-6akK61awCGz690ctixBIrFP4LHQnI
- Repo : https://github.com/gvergnaud/type-level-typescript-workshop
- Interactive exercices : https://dtdg.co/types (sauvegardé) - contient les slides en markdown
