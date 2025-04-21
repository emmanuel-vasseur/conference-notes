<!--
<script>
    import recettes from "./recettes.json";
</script>
-->
<!--
La fonction load, permet de récupérer plusieurs éléments :

url : Url de la page.
params : Les paramètres de la page (paramètres entre [] dans le nom du fichier).
fetch : Fonction pour faire des appels http, identique à fetch natif, sauf qu'il gère le fait d'être appelé côté serveur ou côté client (enregistre le retour de l'appel côté server pour le serialiser dans le code de la page et réutiliser la valeur côté client).
session : Donnée de session qui est accessible côté serveur et côté client.
stuff : Donnée que l'on réucupère depuis le layout.
La méthode retourne un objet avec les propriétés suivantes :

status : Status HTTP de la page.
error : Si la fonction load a une erreur (status doit alors est de type 4xx ou 5xx)
redirect : Pour rediriger vers une autre page (status doit être de type 3xx)
maxage : indique la durée de mise en cache de la page
props : les informations que l'on passe au composant de la page lors de son affichage
stuff : informations qui est passé aux sous-pages (que l'on récupère ensuite dans les paramètres de la fonction load)
-->
<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const url = `/recettes.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					recettes: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>
<script>
    export let recettes = [];
</script>

<section class="recettes">
    {#each recettes as item, index}
        <article>
            <div>
<!--
                Par défaut, _Svelte_ va intercepter les clics sur les liens `a` pour ne pas recharger la page sur les urls internes.
                Si besoin, nous pouvons désactiver ce comportement en ajoutant l'attribut `rel="external"` sur le lien.
-->
                <h2><a sveltekit:prefetch href="/recettes/{index}">{item.name}</a></h2>
              <p>⏱ {item.totalTime} min 👨‍🍳 {['', 'Très Facile', 'Facile', 'Moyenne', 'Difficile'][item.difficulty || 0]} € {['', 'Bon marché', 'Moyen', 'Assez cher'][item.budget||0]} 😋 {item.people} Personnes</p>
            </div>
            <img src={item.image} alt={item.name}>
        </article>
    {/each}
</section>