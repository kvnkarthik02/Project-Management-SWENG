import { v4 as uuidv4 } from 'uuid';

let members = [];

// gets all member
export const getMembers = (req, res) => {
    console.log(members);
    res.send(members);
}

// get member by id
export const getMemberById = (req, res) => {
    const { id } = req.params;
    const foundMember = members.find((member) => member.id === id);
    res.send(foundMember);
}

// creates a new member
export const createMember = (req, res) => {
    const member = req.body;
    members.push({ ...member, id: uuidv4() });
    res.send(`Member ${member.firstName} added to db`);
}

// partial modification of project by id
export const editMemberById = (req, res) => {
    const { id } = req.params;
    const { FirstName } = req.body;
    const { LastName } = req.body;
    const { HoursAllocated } = req.body;
    const { HoursAvailable } = req.body;
    const { Projects } = req.body;

    const member = members.find((member) => member.id === id);

    if (FirstName) {
        console.log(`FirstName Chaged from ${member.firstName} to ${FirstName}`);
        member.firstName = FirstName;
    }
    if (LastName) {
        console.log(`LastName Chaged from ${member.lastName} to ${LastName}`);
        member.lastName = LastName;
    }
    if (HoursAvailable) {
        console.log(`HoursAvailable Chaged from ${member.hoursAvailable} to ${HoursAvailable}`);
        member.hoursAvailable = HoursAvailable;
    }
    if (HoursAllocated) {
        console.log(`HoursAllocated Chaged from ${member.hoursAllocated} to ${HoursAllocated}`);
        member.hoursAllocated = HoursAllocated;
    }
    if (Projects) {
        console.log(`Projects Chaged from ${member.projects} to ${Projects}`);
        member.projects = Projects;
    }
}

// delete project by id
export const deleteMemberById = (req, res) => {
    const { id } = req.params;
    members = members.filter((member) => member.id !== id);
    res.send(`User with id ${id} deleted`)
}

// check allocated hours for a member by id
// getMembersAllocatedHours()
export const getMembersAllocatedHours = (req, res) => {
    var memberAllocatedHours = members.map((member) => {
        return member.hoursAllocated;
    });
    console.log(memberAllocatedHours);
    res.send(memberAllocatedHours);
}

//check which members have belong in a project by project ID
// getMembersOnProject() 
export const getMembersOnProject = (req, res) => {
    const { projectId } = req.params;

    var projectMembers = members.map((member) => {
        if (member.projects.includes(projectId)) {
            return member;
        }
    });

    console.log(projectMembers);
    res.send(projectMembers);
}