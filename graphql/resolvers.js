import { getMovies,  } from "./db";
// 사용자가 날린 Query를 해결(Resolve)해주는 역할
const resolvers = {
    Query:{
        movies: (_, {rating, limit}) => getMovies(limit, rating),
    },
};
export default resolvers;