import express from 'express'
const app = express();
const port = 3000;

const restaurants = [
    (
        name = "spicy",
        address = "Le Lamentin"
    )
]

app.set('view engine', 'ejs')
app.get('/',  (req, res) => (
    res.render ('home.ejs', (
        title: "Accueil",
        list: restaurants
    ))
    ))
    app.get(/about', (req, res) => {
        res.render('about.ejs')
    ])

    app.listen(port, () => {
console.log('Example app listening on port $[port]')*
    })