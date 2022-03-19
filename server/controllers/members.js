import { v4 as uuidv4 } from 'uuid';

let members = [];

// gets all member
export const getAllMembers = (req, res) => {
    console.log(members);

    res.send(members);
}

// creates a new member
export const createMember = (req,res) => {
    const member = req.body;

    projects.push({ ...member, id: uuidv4()});

    res.send(`Project ${member.firstName} added to db`);
}

// get project by id
export const getMemberById = (req,res) => {
    const { id } = req.params;

    const foundMember = projects.find((member) => member.id === id);

    res.send(foundProject)
}

// delete project by id
export const deleteMemberById = (req,res) => {
    const { id } = req.params;

    members = members.filter((member) => member.id !== id);

    res.send(`User with id ${id} deleted`)
}

// partial modification of project by id
export const changeMemberById = (req,res) => {
    const { id } = req.params;
    const { FirstName } = req.body;
    const { LastName } = req.body;

    const member = members.find((member) => member.id === id);

    if(FirstName) member.firstName = FirstName;
    if(LastName) member.lastName = LastName;
    // add more values
}

