# Dois-je migrer en Reactive et comment ?

Conference

## Abstract

- Christophe Jollivet

Votre manager à vu qu'il faut faire de la programmation réactive, c'est l'avenir, donc vous allez faire de la programmation réactive. Mais qu'est ce que la programmation réactive ? Et surtout, est-ce vraiment ce que vous devez faire ?

Après une petite explication sur la programmation réactive avec ses inconvénients et ses avantages, nous ferons la transformation d'une application en programmation impérative vers une programmation réactive avec Spring Reactor, avec les pièges possibles comme les bibliothèques tierces, les appels à API REST...

## Notes

Pas de gain en vitesse
Gain en scalabilite

Backpressure : request avec n items, ou take(n) sur le flux, queue de données/event si pas assez rapide avec politique de drop / aggregation

Problème de context switch entre threads (informations stockées à propager) :
- Réactif context pour passer le context sécurité/transaction/logging/...
- .subscriberContext()

Réalisation de tests : StepVerifier / .withVirtualTime(...)

Défauts : api contaminante, syntaxe pas évidente à appréhender

Soucis avec le jdbc :
- R2DBC ne charge pas les jointures
- passer à munity (Hibernate panache) ou la solution native jdk

Méthodes synchronized pas reactives
BlockHound pour détecter les appels non bloquants

On passe en revue tous les points avec les adaptations à faire (transaction, sécurité, ...)
