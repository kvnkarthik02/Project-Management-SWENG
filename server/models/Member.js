import mongoose from 'mongoose';

const SkillSchema = mongoose.Schema({
    name: String,
    level: Number
});

const MemberSchema = mongoose.Schema({
    memberId: String,
    firstName: String,
    lastName: String,
    hoursAvailable: Number,
    hoursAllocated: Number,
    skills: [SkillSchema],
    projects: [String]
});

export const Member = mongoose.model('Member', MemberSchema);
export const Skill = mongoose.model('Skill', SkillSchema)