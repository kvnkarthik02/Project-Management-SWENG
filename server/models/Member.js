import mongoose from 'mongoose';

const MemberSchema = mongoose.Schema({
    memberId: String,
    firstName: String,
    lastName: String,
    hoursAvailable: Number,
    hoursAllocated: Number,
    projects: Array
});

export const Member = mongoose.model('Member', MemberSchema)