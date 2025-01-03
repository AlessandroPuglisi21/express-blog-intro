
// Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

console.log('test')

const express = require('express');
const app = express();
const port = 3000;
const prodotti = require('./prodotti.js')

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.send("SERVER DEL MIO BLOG")
})

app.get("/bacheca", (req,res) => {



    //  const products = [
    //     {titolo: "Ciambellone alla crema",
    //         contenuto : "Goloso ciambellone farcito di crema fatta in casa",
    //         immagine : "public/images/ciambellone.jpeg",
    //         tags : ["pasticceria","crema","goloso"]
    //     },
    //     {titolo: "Cracker alla Barbabietola",
    //         contenuto : "6 Pacchetti di crackers alla farina di barbabietola",
    //         immagine : "public/images/cracker_barbabietola.jpeg",
    //         tags : ["healty","panetteria","barbabietola"]
    //     },
    //     {titolo: "Pane dolce fritto",
    //         contenuto : "Pane fresco fritto in olio di girasole e zuccherato",
    //         immagine : "public/images/pane_fritto_dolce.jpeg",
    //         tags : ["pane","panetteria","pasticceria"]
    //     },
    //     {titolo : "Pasta alla barbabietola",
    //         contenuto : "Pasta trafilata al bronzo con farina di barbabietola",
    //         immagine : "public/images/pasta_barbabietola.jpeg",
    //         tags : ["healty", "pasta","barbabietola"]
    //     },
    //     {titolo : "Torta paesana",
    //         contenuto : "Tipica torta fatta in casa",
    //         immagine : "public/images/torta_paesana.jpeg",
    //         tags : ["pasticceria", "torta", "goloso"]
    //     }
    // ]
         res.json(prodotti)
})





app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})