import recettes from "./recettes.json";

/*
La fonction doit retourner un objet avec les propriétés suivantes :

status : Status HTTP de la réponse, si celui-ci n'est pas indiqué, indique le status 200.
headers : Si nous voulons indiquer des headers. À ajouter soit sous la forme d'une liste de string ou d'un objet clé/valeur.
body : Si le body est de type object et que nous n'avons pas donné de contentType dans les headers, alors l'objet est automatiquement transformé en json.
*/
export function get() {
	return {
        body: recettes.map(({ ingredients, steps, credit, ...rest }) => rest)
    };
}
