const { gql } = require('apollo-server')
const axios = require('axios')

const typeDefs = gql`
    type Articles {
        source: Source
        author: String
        title: String
        description: String
        url: String
        urlToImage: String
        publishedAt: String
        content: String 
    }

    type Source {
        id: String
        name: String
    }

    extend type Query {
        articles(country: String) : [Articles] 
        everything(q: String) : [Articles]
    }
`;

const resolvers = {
    Query : {
        articles: async (_, args) => {
            const { country } = args

            const apiKey = 'a5e4c8cbdc66490bb551195f44a50a39'
            try {
                const response = await axios({
                    url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`,
                    method: "GET",
                })
                return response.data.articles
            } catch (error) {
                console.log(error)
            }
        },

        everything: async (_, args) => {
            const { q } = args

            const apiKey = 'a5e4c8cbdc66490bb551195f44a50a39'
            try {
                const response = await axios({
                    url: `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`,
                    method: "GET",
                })
                return response.data.articles
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = { typeDefs, resolvers }