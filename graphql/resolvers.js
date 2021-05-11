import { getMovies, getById, addMovie } from "./db";
// 사용자가 날린 Query를 해결(Resolve)해주는 역할
const resolvers = {
    Query:{
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
};
export default resolvers;