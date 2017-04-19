const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ActSchema = new Schema({
    parentId: String,
    title: String,
    desc: String,
    benefit: String,
    focusId: String,
    phaseId: String,
    cost: Number,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    sponsor: [String],
    assignee: [String],
    percentage: Number,
    catId: String,
    deptId: [String],
    visId: [String],
    statusId: String,
    kpiId: String,
    createdAt: { type: Date, default: Date.now },
    createdBy: String,
    updatedAt: { type: Date, default: Date.now },
    updatedBy: String,
    level: { type: Number, default: 0 },
    projDetail: String,
    docLink: String,
    outOfScope: String,
    challenge: String,
    nextStep: String,
    monitored: Boolean,
    chartered: Boolean

});
module.exports = mongoose.model('Activity', ActSchema)