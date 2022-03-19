import mongoose from 'mongoose';

const MemberSchema = mongoose.Schema({
    memberId: Number,
    firstName: String,
    lastName: String,
    hoursAvailable: String,
    hoursAllocated: String,
    projects: Array
});

export const Member = mongoose.model('Member', MemberSchema)