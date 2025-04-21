# Micronaut AOT: optimiser vos applications pour le JIT et GraalVM

Conference

## Abstract

- Cédric Champeau

Micronaut est un framework performant, parti d'une feuille vierge, qui vise à maximiser la productivité des développeurs sans compromission sur les performances: reflection-free, feedback à la compilation au lieu du runtime, génération de code,... Micronaut est déja particulièrement compétitif lorsque l'on souhaite compiler des images natives avec GraalVM.

Le dernier né de la famile s'appelle Micronaut AOT. Il s'agit d'une extension de Micronaut qui permet d'optimiser vos applications en précalculant lors du packaging de l'application des informations qui sont normalement connues au runtime (analyse dynamique).

Par exemple, Micronaut AOT est capable de convertir vos fichiers de configuration yaml en configuration Java, évitant de parser des fichiers au démarrage de l'application, ou encore d'optimiser le chargement des classes via le service loader.

Si vous souhaitez voir un microservice Java démarrer en moins de 10ms, ce talk est fait pour vous: nous montrerons comment utiliser Micronaut AOT et optimiser des applications Micronaut traditionelles sur la JVM, mais aussi les binaires natifs compilés avec GraalVM.

## Notes

Like quarkus (build-time, apps native avec graalvm)

Générateur d'applis

Code sur appli démo

Pas vu grand chose car en retransmission
-> création controller, test avec injection easy du client

Micronaut AOT : optimisation des déploiements : optimise le build pour avoir un meilleur run -> long, pas à faire en mode dev
Passe en revue toutes les optims

Explique le fonctionnement du profiling qui permet d'identifier ce qui prend du temps et de la place
Le profiling est processus iteratif : teste et raffine configurations pour voir ce qui est le plus performant

Ajouter ses optimisations. Exemple : récupérer les metadata auth2 au build time

Attention lors de l'activation des optimisations, vérifier que le contexte de build est identique à celui cible car il sera en dur dans le code optimisé

## Links

- https://micronaut.io/launch
- https://micronaut-projects.github.io/micronaut-aot/latest
- https://micronaut-projects.github.io/micronaut-maven-plugin/latest/examples/aot.html
