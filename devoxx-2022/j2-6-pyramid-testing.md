# S'affranchir de la Pyramide des Tests

Conference

## Abstract

- Jonathan Boccara

Tester son code c'est facile à dire, mais écrire des tests utiles dans du code en entreprise, c'est pas toujours facile à faire.

En théorie les tests doivent nous aider, pourtant: - Le code ne se prête pas toujours aux tests unitaires, - On se retrouve parfois à refactorer les tests quand on refactore le code, - La pyramide des tests est souvent inversée, - Certains tests sont toujours verts, sauf quand ils sont rouges pour de mauvaises raisons, - On a beau tester le code, on a toujours des bugs, - Etc.

La meilleure façon d'éviter ces problèmes est d'avoir les clefs pour choisir le bon test à écrire (ou à ne pas écrire!) en fonction du code à tester.

Le but de cette présentation est de vous rendre autonome sur votre stratégie de tests, en vous présentant les tenants et aboutissants des différents types de test et du testing en général.

En particulier vous verrez:
- pourquoi la pyramide des tests est contre-productive
- quand écrire des tests unitaires et quand ne surtout pas en écrire,
- comment rédiger des tests robustes et clairs
- les différentes abstractions que l'on peut tester

Venez prendre du recul sur le testing et faites les bons choix dans vos tests!

## Notes

Très porté sur la réflexion

Pas de pyramide chez doctolib, plutôt 1/3 1/3 1/3, et pourtant ça marche bien.

La pyramide de tests encore d'actualité à notre époque ?

Cas d'exemple de coût des tests unitaires quand on refacto (changement de l'interface)

Les tests figent le contrat d'interface -> coût d'engagement

Cas où ça coûte :
- Design bancal

Cas où ça ne coûte pas :
- Algo
- Api publique

Quelle niveau/type d'interface tester ?

Exemple de tests frontend-backend avec du mock : engagement sur le contrat front-back : tests front + tests back + tests contract

Principes :
- rendre le code des tests expressifs (sans détail technique)
- "test interfaces that are worth committing to"
- qualité du code de test et du tooling
- trad-off/compromis :
  - choix unit-tests/e2e
  - coût des test e2e -> slow but cheap, fast but expensive, cheap and fast but complex
- les tests doivent refleter l'usage du produit : le dev doit être sensible au produit

Pattern Page objects : .... (revoir la vidéo pour reprendre le concept)

Qu'est ce qu'on veut tester : ce qu'on ne veut pas que l'on casse
- Use cases
- Sécurité
- Metrics, logs

N'a pas évoqué les tests fonctionnels, ni le "milieu" de la pyramide de tests : n'a pas voulu s'engoufrer dedans

Très bonne question sur le TDD :
- est-ce qu'on conserve tous les tests ?
- est-ce qu'on met à la poubelle et on refait lorsqu'on casse le contrat d'interface ?

Comment on identifie quel test e2e passe par telle feature / telle classe :
- avec le coverage on peut stocker où le test passe pour voir par où il passe
- ça permet de faire du "cheap and fast but complex" (tests conditionnels)
