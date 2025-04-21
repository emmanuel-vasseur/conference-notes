<script>
    import Imc from "./Imc.svelte";
    import Form from "./Form.svelte";

    const name = "Manu";
    let poids = 80;
    let taille = 1.80;

	let historique = [];
    function sauvegarderIMC(event) {
      //historique.push(event.detail);
	  historique = [...historique, event.detail]; // pour que svelte détecte la modif
	  console.log(event.detail)
    }
</script>

<p>Bonjour {name}</p>
<Form bind:poids bind:taille on:sauvegarder={sauvegarderIMC} /> <!-- on peut utiliser on:submit pour simplifier mais pas l'objet du TP -->
<Imc {poids} {taille} />

<h3>Evolution de l'IMC</h3>
<ul>
	{#each historique as item, index}
		<li>{index + 1}: {item.toFixed(2)}</li>
	{/each}
</ul>
