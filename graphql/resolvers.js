// 사용자가 날린 Query를 해결(Resolve)해주는 역할
const jeremy = {
    name: "Jeremy",
    age: 18,
    gender: "male"
};
const resolvers = {
    Query:{
        person: () => jeremy
    }
};
export default resolvers;