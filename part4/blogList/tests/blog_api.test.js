const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')
const helper = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    await Blog.insertMany(helper.initialBlogs)
})

describe('getting blogs', () => {
    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const response = await api.get('/api/blogs')

        assert.strictEqual(response.body.length, helper.initialBlogs.length)
    })

    test('id is correct', async () => {
        const response = await api.get('/api/blogs')

        assert(response.body[0].id)
    })

})

describe('adding blog', () => {
    test('a valid blog can be added ', async () => {
        const newBlog = {
            title: 'New Blog',
            author: 'B B',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
        }

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogs = await helper.blogsInDb()
        assert.strictEqual(blogs.length, helper.initialBlogs.length+1)

        const contents = blogs.map(blog => blog.title)
        assert(contents.includes('New Blog'))
    })

    test('blog without likes is set to zero', async () => {
        const newBlog = {
            title: 'New Blog',
            author: 'B B',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        }

        const result = await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        assert.equal(result.body.likes, 0)
    })

    test('blog without url or title is rejected', async () => {
        const noTitle = {
            author: 'B B',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
        }

        await api
            .post('/api/blogs')
            .send(noTitle)
            .expect(400)

        const noUrl = {
            title: 'New Blog',
            author: 'B B',
            likes: 5,
        }

        await api
            .post('/api/blogs')
            .send(noUrl)
            .expect(400)
    })
})

describe('delete blog', () => {
    test('delete blog by id', async () => {
        await api
            .delete(`/api/blogs/${helper.initialBlogs[0]._id}`)
            .expect(204)
    })

    test('delete non-existent blog', async () => {
        const id = await helper.nonExistingId()
        await api
            .delete(`/api/blogs/${id}`)
            .expect(204)
    })
})

describe('update blog', () => {
    test('update blog likes', async () => {
        const blog = {...helper.initialBlogs[0], likes: helper.initialBlogs[0].likes+5}
        const result = await api
            .put(`/api/blogs/${helper.initialBlogs[0]._id}`)
            .send(blog)
            .expect(200)

        assert.deepStrictEqual(result.body.likes, helper.initialBlogs[0].likes+5)
    })

    test('update non-existent blog', async () => {
        const id = await helper.nonExistingId()
        const blog = {...helper.initialBlogs[0]}
        await api
            .put(`/api/blogs/${id}`)
            .send(blog)
            .expect(404)
    })
})

after(async () => {
    await mongoose.connection.close()
})