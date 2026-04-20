const blogsRouters = require('express').Router()
const Blog = require('../models/blog')

blogsRouters.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouters.post('/', async (request, response) => {

    if (!request.body.title) {
        return response.status(400).json({
            error: 'title missing'
        })
    }

    if (!request.body.url) {
        return response.status(400).json({
            error: 'url missing'
        })
    }

    const blog = new Blog(request.body)
    const result = await blog.save()
    response.status(201).json(result)
})


blogsRouters.delete('/:id', async (request, response) => {
    const id = request.params.id
    await Blog.findByIdAndDelete(id)
    response.status(204).end()
})


blogsRouters.put('/:id', async (request, response) => {
    const id = request.params.id

    const blog = await Blog.findById(id)
    console.log("here!")
    if (!blog) {
        response.status(404).end()
    }

    blog.title = request.body.title
    blog.url = request.body.url
    blog.likes = request.body.likes
    const result = await blog.save()
    return response.json(result)
})

module.exports = blogsRouters