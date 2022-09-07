var express = require("express")
var mysql = require("mysql")
var app = express()

app.use(express.json())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce'
})


con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('connexion établie');
    }
})


app.get('/', (req, res)=>{
    res.send('je suis le nacteur waip');
})


//get.app est la pour recuperer les infos sur la table chaussure

// selectionne toutes les informations sur la table chaussure
app.get('/api/chaussures', (req, res)=>{
    
    con.query('SELECT * FROM chaussures',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})


//la selection d'une chaussure
app.get('/api/chaussure/:id', (req, res)=>{
    node
    con.query('SELECT * FROM chaussures WHERE id_Chaussures=?',[req.params.id_Chaussures],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})


// ajoute une info dans la table chaussure 
app.post('/api/chaussure/ajout', (req, res)=>{
    const marque = req.body.marque;
    const pointure = req.body.pointure;
    const couleur = req.body.couleur;
    const prix = req.body.prix;
    const nom_chaussure = req.body.nom_chaussure;

    
    con.query('INSERT INTO chaussures VALUES(NULL,?,?,?,?,?)',[id_marque,pointure,couleur,prix,nom_chaussure],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('cool joel a send dans la table chaussure waip');
    }
    })
})




// config du port

app.listen(2500, (err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('on port 2500');
    }
})

// pour mettre toujours en ligne les infos on ecrit sur le terminal : node main.js