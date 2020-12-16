const { gql } = require('apollo-server')
const axios = require('axios')
// const NodeMailer = require('../helpers/nodeMailer')
const typeDefs = gql`
    type Articles {
        judul: String
        link: String
        poster: String
        tipe: String
        waktu: String
    }
    extend type Query {
        articles(q: String): [Articles] 
    }
`;

const resolvers = {
    Query : {
        articles: async (_, args) => {
            const { q } = args;
            try {
                const response = await axios({
                    url: `https://www.news.developeridn.com/search/?q=${q}`,
                    method: "GET",
                })
                if (response.data.data.length % 2 === 0) {
                    return response.data.data;
                } else {
                    response.data.data.pop();
                    return response.data.data
                }
                
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = { typeDefs, resolvers }