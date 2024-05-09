const fs = require('fs')

const frontFile = (req, res) => {

    res.sendFile(__dirname + '/index.html')
}


const getSongs = (req, res) => {

    const todos = JSON.parse(fs.readFileSync('todos.json', 'utf8'))
    res.json(todos)
}

const createSong = (req, res) => {

    const title = req.body.title

    const todos = JSON.parse(fs.readFileSync('todos.json', 'utf8'))

    const newTodo = {
        id: todos.length + 1,
        title,
        done: false
    }

    todos.push(newTodo)


    fs.writeFileSync('todos.json', JSON.stringify(todos))

    res.json(newTodo)
}

const updateSong = (req, res) => {

    const { id } = req.params

    const todos = JSON.parse(fs.readFileSync('todos.json', 'utf8'))

    const updateTodos = todos.map(todo => todo.id == id ? { ...todo, done: !todo.done } : todo);


    fs.writeFileSync('todos.json', JSON.stringify(updateTodos))

    res.status(200).send('Todo modificado')
}

const deleteSong = (req, res) => {
    const { id } = req.params

    const todos = JSON.parse(fs.readFileSync('todos.json', 'utf8'))

    const filteredTodos = todos.filter(todo => todo.id != id);


    fs.writeFileSync('todos.json', JSON.stringify(filteredTodos))

    res.status(200).send('Eliminado')
}


module.exports = {
    frontFile,
    updateSong,
    createSong,
    deleteSong,
    getSongs
}