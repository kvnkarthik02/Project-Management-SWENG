import { json } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Member, Skill } from '../models/Member.js'

let members = [];

// gets all member
export const getAllMembers = async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members)
    } catch (error) {
        res.json({ message: error });
    }
}

// http://localhost:8000/skilledMembers?name=React
export const getSkilledMembers = async (req, res) => {
    const name = req.query.name
    const level = req.query.level

    if (level == null) {
        try {
            const members = await Member.find({
                "skills": {
                    $elemMatch: {
                        name: name
                    }
                }
            });
            res.json(members)
        } catch (error) {
            res.json({ message: error });
        }
    } else {
        try {
            const members = await Member.find({
                "skills": {
                    $elemMatch: {
                        name: name,
                        level: level
                    }
                }
            });
            res.json(members)
        } catch (error) {
            res.json({ message: error });
        }
    }


}

// get member by id
export const getMemberById = async (req, res) => {
    try {
        const { id } = req.params;
        const members = await Member.find();
        const foundMember = members.find((member) => member.memberId === id);
        res.send(foundMember);
    } catch (error) {
        res.json({ message: error });
    }
}

// creates a new member
export const createMember = async (req, res) => {
    const skills = [];
    for (let i = 0; i < req.body.skills.length; i++) {
        skills[i] = new Skill({
            name: req.body.skills[i].name,
            level: req.body.skills[i].level
        })
    }

    const member = new Member({
        memberId: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        email: req.body.email,
        avatarColor: req.body.avatarColor,
        hoursAvailable: req.body.hoursAvailable,
        hoursAllocated: req.body.hoursAllocated,
        projects: req.body.projects,
        skills: skills
    });
    console.log();
    try {
        const savedMember = await member.save();
        res.json(savedMember);
    } catch (error) {
        res.json({ message: error });
    }
}

// partial modification of member by id
export const editMemberById = async (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const role = req.body.role;
    const email = req.body.email;
    const avatarColor = req.body.avatarColor;
    const hoursAllocated = req.body.hoursAllocated;
    const hoursAvailable = req.body.hoursAvailable;
    const projects = req.body.projects;

    try {
        if (firstName) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { firstName: req.body.firstName } }
                );
                res.json(updatedMember);
            } catch (error) {
                res.json(error);
            }
        }
        if (lastName) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { lastName: req.body.lastName } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (role) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { role: req.body.role } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (email) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { email: req.body.email } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (avatarColor) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { avatarColor: req.body.avatarColor } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (hoursAvailable) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { hoursAvailable: req.body.hoursAvailable } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (hoursAllocated) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { hoursAllocated: req.body.hoursAllocated } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        if (projects) {
            try {
                const updatedMember = await Member.updateOne(
                    { memberId: req.params.id },
                    { $set: { projects: req.body.projects } }
                );
                res.json(updatedMember)
            } catch (error) {
                res.json(error);
            }
        }
        // if (skills) {


        // }
    } catch (error) {
        res.json({ message: error });
    }

}

// delete project by id
export const deleteMemberById = async (req, res) => {
    try {
        const removedMember = await Member.deleteOne({ memberId: req.params.id });
        res.json(removedMember);
    } catch (error) {
        res.json({ message: error });
    }
}

// check allocated hours for a member by id
// getMembersAllocatedHours()
export const getMembersAllocatedHours = async (req, res) => {
    try {
        const { id } = req.params;
        const members = await Member.find();
        const foundMember = members.find((member) => member.memberId === id);
        res.json(foundMember.hoursAllocated);
    } catch (error) {
        res.json({ message: error });
    }
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

    res.send(projectMembers);
}

export const editMemberSkill = async (req, res) => {
    const name = req.body.skills.name;
    const level = req.body.skills.level;

    try {
        const updatedSkill = await Member.updateOne(
            { memberId: req.params.id },
            {
                $set: {
                    skills: [
                        {
                            name: req.body.skills[0].name,
                            level: req.body.skills[0].level
                        }
                    ]
                }
            }
        );
        res.json(updatedSkill);
    } catch (error) {
        res.json(error);
    }
}

export const addMemberSkill = async (req, res) => {
    try {
        const updatedSkill = await Member.updateOne(
            { memberId: req.params.id },
            {
                $push: {
                    skills: [
                        {
                            name: req.body.name,
                            level: req.body.level
                        }
                    ]
                }
            }
        );
        res.json(updatedSkill);
    } catch (error) {
        res.json(error);
    }
}
