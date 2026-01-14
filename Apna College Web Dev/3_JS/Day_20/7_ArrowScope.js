const student = {
    name: "Aman",
    marks: 95,
    prop: this, // Global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // Parent's Scope -> Window Object
        return this.marks;
    },

    getInfo1: function () {
        setTimeout(() => {
            console.log(this); // Student Object
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // Window Object
        }, 2000);
    },
};