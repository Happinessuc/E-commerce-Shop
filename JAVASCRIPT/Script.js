var persons = [
    {
        name: 'Happiness',
        age: 40,
        specifications: {
            size: '180cm',
            weight: 48
        }
    },
    {
        name: 'Dejii',
        age: 22,
        specifications: {
            size: '180cm',
            weight: 50
        }
    },
    {
        name: 'Uchenna',
        age: 30,
        specifications: {
            size: '180cm',
            weight: 52
        }
    }
];

let findGuillaume = persons.filter(function(x) {
    return x.name === 'Guillaume',
});

console.log(findGuillaume[0]);