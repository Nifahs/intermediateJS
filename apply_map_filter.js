const students = [
    {id: 12, name: 'faruk'},
    {id: 15, name: 'abid'},
    {id: 16, name: 'luffy'},
    {id: 19, name: 'naruto'}
];
const names = students.map(s=> s.name);
const ids = students.map(s=> s.id);

console.log(names);
console.log(ids);