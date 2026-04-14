const personsRouters = require('express').Router()
const Person = require('./models/person')

personsRouters.get('/', (req, res) => {
    Person.find({}).then((persons) => {
        res.json(persons)
    })
})

personsRouters.get('/info', (req, res) => {
    Person.countDocuments({})
        .then((count) => {
            res.send(`<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`)
        })
})

personsRouters.get('/:id', (req, res, next) => {
    const id = req.params.id
    Person.findById(id)
        .then((person) => {
            if (person) {
                res.json(person)
            } else{
                res.status(404).end()
            }
        })
        .catch((err) => {
            next(err)
        })
})

personsRouters.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Person.findByIdAndDelete(id)
        .then(() => {
            res.status(204).end()
        })
        .catch((err) => {next(err)})
})

personsRouters.post('/', (req, res, next) => {
    const body = req.body

    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }

    if (!body['number']) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body['number'],
    })

    person.save()
        .then(person => {
            res.json(person)
        })
        .catch((err) => {next(err)})
})

personsRouters.put('/:id', (req, res, next) => {
    const id = req.params.id
    const number = req.body.number
    const name = req.body.name

    Person.findById(id)
        .then((person) => {
            if (person){
                person.number = number
                person.name = name
                return person.save().then((updated) => {
                    res.json(updated)
                })
                    .catch((err) => next(err))
            } else {
                return res.status(404).end()
            }
        })
        .catch((err) => next(err))
})

module.exports = personsRouters