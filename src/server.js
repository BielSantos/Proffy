//Dados

const proffys = [

    { 
        name : "Diego fernandes",
        avatar : "https://avatars1.githubusercontent.com/u/20360685?s=460&v=4",
        whatssap: "89898989898988",
        bio: "Entusiasta das melhores tecnologias de química avançada.",
        subject: "Quimica",
        cost:"20",
        weekday:[0],
        time_from: [720],
        time_to:[1220]
    }
]

const subjects = [

    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Artes"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]


//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1 
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

-function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    
    // se tiver dados
    const isNotEmpty = Object.keys(data).length > 0   
    if (isNotEmpty){
    data.subject = getSubject(data.subject)
    // Adicionar dados ao a lista de proffys
    proffys.push(data) 
    return res.rendirect("/study")    

}
    
    return res.render("give-classes.html", {subjects, weekdays})  
}

// Servidor
const express = require('express')
const server = express()



//configurando o nunjuncks
const nunjuncks = require('nunjucks')

nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

server

server.use(express.static("public"))
.get("/",pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)