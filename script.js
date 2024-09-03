/**
 * Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Primo esercizio con VUE !',
            text: 'text-center',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXcsSR1OkxWMkBcWopiYvywDBlCjdy7570Rg&s'
        }
    }
}).mount('#app')

