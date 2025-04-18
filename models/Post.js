const mongoose =require ('mongoose');

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
    },
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports =mongoose.model("Posts", PostSchema);