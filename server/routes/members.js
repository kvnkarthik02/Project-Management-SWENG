import express from 'express';
import {
    getAllMembers,
    getMemberById,
    createMember,
    editMemberById,
    deleteMemberById,
    getMembersAllocatedHours,
    getMembersOnProject,
    editMemberSkill,
    addMemberSkill,
    getSkilledMembers,
    checkHours,
} from '../controllers/members.js';

const router = express.Router();

// get all Members
router.get('/', getAllMembers);

// get member by id
router.get('/:id', getMemberById);

//add new member
router.post('/', createMember);

// edit member by id
router.patch('/:id', editMemberById);

// delete member by id
router.delete('/:id', deleteMemberById);

// check allocated hours for a member by id
router.get('/:id/hours', getMembersAllocatedHours);

// get all Members
router.get('/', getAllMembers);

// check if employee is available
router.get('/:id/checkHours', checkHours);

//check which members have belong in a project by project ID
router.get('/:projectId', getMembersOnProject);

// AddMemberSkill
router.patch('/:id/addSkill', addMemberSkill);

// edit skill already assigned to a member
router.patch('/:id/editSkill', editMemberSkill);


export default router;