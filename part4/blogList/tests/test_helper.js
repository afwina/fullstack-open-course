const Blog = require('../models/blog')

const initialBlogs = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    },
    {
        _id: "69de47db4b4cee7c8fbd3e31",
        title: "A",
        author: "A A",
        url: "www.a.com",
        likes: 10,
        __v: 0
    }
]

const nonExistingId = async () => {
    const blog = new Blog({ title: 'a', url:'a' })
    await blog.save()
    await blog.deleteOne()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb
}