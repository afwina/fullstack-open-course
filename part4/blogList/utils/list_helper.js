const _ = require('lodash')
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    if (!blogs){
        return 0
    }

    return blogs.reduce((total, blog) => {return total + blog.likes}, 0)
}

const favoriteBlog = (blogs) => {
    if (!blogs || !blogs.length) {
        return null
    }
    return blogs.reduce((prev, curr) => (prev.likes > curr.likes ? prev : curr));
}

const mostBlogs = blogs => {
    if (!blogs || !blogs.length) {
        return null
    }

    let counts = _.countBy(blogs, 'author')
    let most = _.maxBy(_.toPairs(counts),(pair) => pair[1])

    return {
        author: most[0],
        blogs: most[1]
    }
}

const mostLikes = blogs => {
    if (!blogs || !blogs.length) {
        return null
    }

    let counts = _.groupBy(blogs, 'author')
    let likes = _.map(counts,(items, key) => ({author: key, likes: _.sumBy(items, 'likes')}))
    return _.maxBy(likes,'likes')
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}