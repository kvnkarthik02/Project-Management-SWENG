import express from 'express';
import { Member } from '../models/Member.js'
import {
    getMembers,
    getMemberById,
    createMember,
    editMemberById,
    deleteMemberById,
    getMembersAllocatedHours,
    getMembersOnProject,
} from '../controllers/members.js'

const router = express.Router();

// get all Members
router.get('/', getMembers);

// get member by id
router.get('/:id', getMemberById);

//add new member
router.post('/', createMember);

// edit member by id
router.get('/:id', editMemberById);

// delete member by id
router.delete('/:id', deleteMemberById);

// check allocated hours for a member by id
router.get('/', getMembersAllocatedHours);

//check which members have belong in a project by project ID
router.patch('/:projectId', getMembersOnProject);

export default router;