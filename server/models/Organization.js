const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrganizationSchema = mongoose.Schema({
  name: { type: String },
  members: [{ user: { id: { type: Schema.Types.ObjectId }, name: String } }],
  projects: [{ project: { type: Schema.Types.ObjectId } }],
});

module.exports = mongoose.model('Organization', OrganizationSchema);
