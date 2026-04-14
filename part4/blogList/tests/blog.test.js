const {test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy returns one', () =>{
    const blogs = []
    assert.strictEqual(listHelper.dummy(blogs), 1)
})

const listWithOneBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
    }
]

const listWithManyBlogs = [
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
    },
    {
        _id: "69de47ed4b4cee7c8fbd3e32",
        title: "B",
        author: "A A",
        url: "www.b.com",
        likes: 11,
        __v: 0
    }
]

describe('total likes', () => {
    test("one blog", () => {
        assert.strictEqual(listHelper.totalLikes(listWithOneBlog), 5)
    })

    test("null blog", () => {
        assert.strictEqual(listHelper.totalLikes(null), 0)
    })

    test("empty blogs", () => {
        assert.strictEqual(listHelper.totalLikes([]), 0)
    })

    test("multi blog", () => {
        assert.strictEqual(listHelper.totalLikes(listWithManyBlogs), 26)
    })
})


describe('favorite blog', () => {
    test("one blog", () => {
        assert.deepStrictEqual(listHelper.favoriteBlog(listWithOneBlog), {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
            likes: 5,
            __v: 0
        })
    })

    test("null blog", () => {
        assert.strictEqual(listHelper.favoriteBlog(null), null)
    })

    test("empty blogs", () => {
        assert.strictEqual(listHelper.favoriteBlog([]), null)
    })

    test("multi blog", () => {
        assert.deepStrictEqual(listHelper.favoriteBlog(listWithManyBlogs), {
            _id: "69de47ed4b4cee7c8fbd3e32",
            title: "B",
            author: "A A",
            url: "www.b.com",
            likes: 11,
            __v: 0
        })
    })
})

describe('most blogs', () => {
    test("one blog", () => {
        assert.deepStrictEqual(listHelper.mostBlogs(listWithOneBlog), {author: 'Edsger W. Dijkstra', blogs:1})
    })

    test("null blog", () => {
        assert.strictEqual(listHelper.mostBlogs(null), null)
    })

    test("empty blogs", () => {
        assert.strictEqual(listHelper.mostBlogs([]), null)
    })

    test("multi blog", () => {
        assert.deepStrictEqual(listHelper.mostBlogs(listWithManyBlogs), {author: 'A A', blogs:2})
    })
})

describe('most likes', () => {
    test("one blog", () => {
        assert.deepStrictEqual(listHelper.mostLikes(listWithOneBlog), {author: 'Edsger W. Dijkstra', likes:5})
    })

    test("null blog", () => {
        assert.strictEqual(listHelper.mostLikes(null), null)
    })

    test("empty blogs", () => {
        assert.strictEqual(listHelper.mostLikes([]), null)
    })

    test("multi blog", () => {
        assert.deepStrictEqual(listHelper.mostLikes(listWithManyBlogs), {author: 'A A', likes:21})
    })
})