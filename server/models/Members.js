import mongoose from 'mongoose';

const MemberSchema = mongoose.Schema({
    memberId : String,
    firstName: String,
    lastName: String,
    projects: Array,
    hoursAvailable: Number,
    hoursAllocated: Number
});

export const Member = mongoose.model('Member',MemberSchema);