<script>
    import { beforeUpdate, afterUpdate } from "svelte";
    import { poids, taille, imc } from "./stores";
    import { fly, fade } from 'svelte/transition';

    $: thin = $imc < 18;
    $: bold = $imc > 25;

    $: {
      console.log($poids);
      console.log($taille);
    }

    beforeUpdate(() => {
      console.log("the component is about to update");
    });

    afterUpdate(() => {
      console.log("the component just updated");
    });
</script>

<svelte:head>
  <title>Votre IMC : {$imc}</title>
</svelte:head>

<p class:thin class:bold>
    Votre IMC ({$poids}/{$taille}<sup>2</sup>) est de {$imc}
</p>

<!--
fade : Change l'opacité de l'élément.
blur : Applique un filtre de flou et change l'opacité.
fly : Déplace l'élément et change l'opacité.
slide : Masque ou affiche l'élément par un effet de slide.
scale : Affiche ou masque l'élément en changeant sa taille.
draw : Intéressant pour un SVG pour avoir un effet de dessin par un crayon.
-->
{#if thin}
  <p class="souspoids" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    Vous êtes maigre
</p>
{:else if bold}
  <p class="surpoids" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    Vous êtes en surpoids
</p>
{:else}
  <p class="normal" in:fly="{{ y: 200, duration: 2000 }}" out:fade>
    Vous êtes svelte !
</p>
{/if}

<style>
    .normal {
      color: green;
    }

    .surpoids {
      color: red;
    }

    .souspoids {
      color: orange;
    }
    .thin {
      font-weight: 200;
      font-size: .875rem;
    }
    .bold {
      font-weight: 600;
      font-size: 1.125rem;
    }
</style>
