const mongoose = require("mongoose");


/* technicalQuestionSchema subSchema created */
const technicalQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Technical question is required"]
  },
  intention: {
    type: String,
    required: [true, "Intention is required"]
  },
  answer: {
    type: String,
    required: [true, "Answer question is required"]
  },
}, { _id: false });

/* behavioralQuestionSchema subSchema created */
const behavioralQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Technical question is required"]
  },
  intention: {
    type: String,
    required: [true, "Intention is required"]
  },
  answer: {
    type: String,
    required: [true, "Answer question is required"]
  },
}, { _id: false })

/* skillGapSchema subSchema created */
const skillGapSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: [true, "Skill is required"],
  },
  severity: {
    type: String,
    enum: ["low", "mediun", "high"],
    required: [true, "Severity is required"],
  },
})

/* preperationPlanSchema subSchema created */
const preperationPlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: [true, "Day is required"],
  },
  focus: {
    type: String,
    required: [true, "Focus is required"],
  },
  tasks: {
    type: String,
    required: [true, "Task is required"],
  },
})


/*  interviewReportSchema created */
const interviewReportSchema = new mongoose.Schema({
  jobDescription: {
    type: String,
    required: [true, "Job description is required"],
  },

  resume: {
    type: String,
  },

  selfDescription: {
    type: String,
  },

  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },

  technicalQuestions: [technicalQuestionSchema],

  behavioralQuestions: [behavioralQuestionSchema],

  skillGaps: [skillGapSchema],

  preperationPlan: [preperationPlanSchema]
},
  {
    timestamps: true,
  }
);


/* interviewReportModel created */
const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema);

module.exports = interviewReportModel;
