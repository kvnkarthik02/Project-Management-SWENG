import { json } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Member } from '../models/Member.js' 

let members = [];

// gets all member
export const getMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members)
    } catch (error) {
        res.json({message: error});
    }
}

// get member by id
export const getMemberById = async (req, res) => {
    try {
        const { memberId } = req.params;
        const members = await Member.find();
        const foundMember = members.find((member) => member.memberId === memberId);
        res.send(foundMember);
    } catch (error) {
        res.json({message: error});
    }
}

// creates a new member
export const createMember = async (req, res) => {
    const member = new Member({
        memberId: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hoursAvailable: req.body.hoursAvailable,
        hoursAllocated: req.body.hoursAllocated,
        projects: req.body.projects
    });
    try {
        const savedMember = await member.save();
        res.json(savedMember);
    } catch (error) {
        res.json({message: error});
    }
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