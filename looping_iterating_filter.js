const people = [
  {
    birthday: "April 22, 1993",
    names: {
      first: "Keith",
      last: "Buckley",
    },
  },
  {
    birthday: "January 3, 1975",
    names: {
      first: "Larry",
      last: "Heep",
    },
  },
  {
    birthday: "February 12, 1944",
    names: {
      first: "Linda",
      last: "Bermeer",
    },
  },
];

const cleanPeople = people.map(function(person) {
    const birthday = new Date(person.birthday);
    const now = Date.now();
    const age = Math.floor((now - birthday) / 31536000000);
    return {
        age,
        name: `${person.names.first} ${person.names.last}`, 
    };
});

const overForty = cleanPeople.filter(person => person.age > 40);

console.table(overForty);




