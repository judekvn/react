const express = require('express')
const router = express.Router()
const { Buyer, validateBuyer } = require('../models/buyer')
const { Book } = require('../models/book')

router.get('/', async (req, res) => {
    const buyer = await Buyer.find().sort('name')
    res.send(buyer)
})

router.post('/', async (req, res) => {
    const {error} = validateBuyer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let buyer = new Buyer({
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    })

    buyer = await buyer.save()
    res.send(buyer)
})

router.get('/:id', async (req, res) => {
    const buyer = await Buyer.findById(req.params.id)
    if (!buyer) res.status(404).send('User not found')
    res.send(buyer)
})

router.put('/:id', async (req, res) => {
    const buyer = await Buyer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phonenumber: req.body.phonenumber,
        email: req.body.email
    }, {new: true})

    if (!buyer) return res.status(404).send('User not found')
    res.send(buyer)
})

router.delete('/:id', async (req, res) => {
    const buyer = Buyer.findByIdAndRemove(req.params.id)
    if (!buyer) return res.status(404).send('User not found')
    res.send(buyer)
})

router.post('/:id/:book', async (req, res) => {
    let buyer = await Buyer.findById(req.params.id)
    const book = await Book.findById(req.params.book)

    let bookAdd = new Book({
        _id: book.id,
        name: book.name,
        author: book.author,
        price: book.price
    })

    buyer.books.push(bookAdd)
    buyer = await buyer.save()

    res.send(buyer)
})

router.put('/:id/:book', async (req, res) => {
    let book = await Book.findById(req.params.book)

    let buyer = await Buyer.findByIdAndUpdate(req.params.id, {
        $pull: { books: { name: book.name} }
    }, {new: true})

    res.send(buyer)
})

module.exports = router;