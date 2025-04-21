# Devenir svelte avec Svelte

Hands-on Labs

## Abstract

- Anthony Le Goas
- Patrice De Saint Steban

Svelte a une approche différente des autres frameworks populaires comme Angular, React ou Vue. Il transforme votre code à la compilation pour générer un code javascript vanilla au lieu d'embarquer le framework au runtime.

Cela offre plusieurs avantages
- Meilleures performances
- Taille finale réduite
- Syntaxe simplifiée
- Analyse du code à la compilation

Durant ce Codelabs vous allez apprendre à aimer Svelte et vous découvrirez les différentes possibilités du compilateur en créant une application avec le framework SvelteKit.

## Notes

un compilateur, pas un framework
+ réactif, pas de virtualdom

Installation :
```
npx degit sveltejs/template my-svelte-project
npx degit zenika/labs-svelte/template labs-svelte

npm install
npm run dev
```

vidéo youtube : Rich Harris - rethinking reactivity

voir le code généré sur le site de svelte pour comprendre comment il identifie les noeuds à modifier

syntaxe réactive : préfixer par `$:`

j'ai du rerun plusieurs fois le `npm run dev` (message hmr failed)

Possibilité de compiler ces composants en webcomponent pour intégration dans autre framework
- svelte-kit package
- /src/lib -> /package
- npm publish ./package

init app : `npm init svelte@next my-app`

SSR : server-side rendering

tests :
`npm install --save-dev jest svelte-jester babel-jest @babel/preset-env`

**TP à finir**

## Links

- https://codelab-svelte.web.app/ (sauvegardé)

