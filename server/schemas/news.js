const { gql } = require('apollo-server')
const axios = require('axios').default;
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
                const { data } = await axios.get(`https://www.news.developeridn.com/search/?q=${q}`);
                console.log(data.data);
                if (data.data.length % 2 === 0) {
                    return data.data
                } else {
                    data.data.pop();
                    return data.data;
                }
            } catch (error) {
                throw error;
            }
        }
    }
}

module.exports = { typeDefs, resolvers }