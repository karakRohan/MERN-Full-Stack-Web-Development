let students = [
    {
        name: "aman",
        marks: 95,
    },
    {
        name: "shradha",
        marks: 94.4,
    },
    {
        name: "rajat",
        marks: 92,
    },
];

let gpa = students.map((element) => {
    return element.marks / 10;
});