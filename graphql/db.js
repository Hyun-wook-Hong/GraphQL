export const people = [
    {
        id: 0,
        name: "Jeremy",
        age: 18,
        gender: "male"
    },
    {
        id: 1,
        name: "Hayley",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "Nakamura",
        age: 40,
        gender: "male"
    },
    {
        id: 3,
        name: "Bob",
        age: 18,
        gender: "male"
    },
    {
        id: 4,
        name: "Ashe",
        age: 18,
        gender: "female"
    },
];
export const getById = id => {
    const filteredPeople = movies.filter(person => people.id === id);
    return filteredPeople[0];
};