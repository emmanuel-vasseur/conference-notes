# Valhalla: To the Hell and Back

Conference

## Abstract

- Remi Forax

Valhalla veut révolutionner Java en introduisant une nouvelle sorte de classe qui marche plus ou moins comme des types primitifs.

Cela génère pas mal de questions, c'est quoi vraiment un type primitif ? Est ce que l'on peut introduire une troisième sorte de type ? Est ce que java.lang.Object est toujours la classe mère de toutes les classes ? Est-ce que l'on a besoin d'un nouveau type de generics ? Doit on mettre à jour le modèle de mémoire (memory model) ? Comment faire tout cela en gardant la compatibilité descendante ? Et plein d'autres questions.

Dans ce talk, je vais expliquer ce que nous avons découvert, où on en est de notre voyage et comment on pense livrer les différentes features de façon incrémentale.

## Notes

Réaligner Java avec les CPU de maintenant : 1 indirection (accès mémoire) coûte beaucoup plus qu'une opération arithmétique
Présentation des travaux en cours, ça peut changer

Goal: utilisation d'objet temporaire "free to cost"
- Optional
- True builder
- Wrapped values
- ...

Solution actuelle : JIT : détecte le cycle complet d'un objet pour ne pas l'instantier et tout placer sur la heap
Problème si un fragment de code n'est pas utilisé, le JIT ne passe pas dessus et il n'y a pas d'optim

Goal 2 : éliminer la densité : header de 32 ou 64 + 64bits : pointeur vers la classe, informations pour le GC ...

Introduction de deux nouveaux types : value et primitive class X

Questions (sans forcément avoir de réponse aujourd'hui) :
- Mutable -> non
- Hérité de Object
- Null
- Default
- Tearable -> écriture du volatile atomique

[!j3-2-valhalla-comparison.jpg]
[!j3-2-valhalla-summary.jpg]

PB des generic avec les primitive class: traité dans un second temps/release
