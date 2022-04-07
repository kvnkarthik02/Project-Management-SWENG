const sampleTeam = [
    {
        name: "Tim Kelly",
        email: "tim@gmail.com",
        role: "Senior Developer",
        workload: 6,
        capacity: 16,
        avatarColor: "red"
    }, {
        name: "Johnny Shoe",
        email: "jshoe@gmail.com",
        role: "Senior Developer",
        workload: 13,
        capacity: 16,
        avatarColor: "yellow",
    },
    {
        name: "Ben Vaughan",
        email: "ben@gmail.com",
        role: "Senior Developer",
        workload: 10,
        capacity: 16,
        avatarColor: "cyan"
    },
]

const data = sampleTeam.map((emp) => { return { value: emp.name.split(" ")[0], item: emp.name.split(" ")[0], group: emp.role } });

console.log(data)
