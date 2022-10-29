"use strict";
const courses = [
  {
    _id: "1",
    title: "sistemas digitales",
    teacher: "indiri",
    description: "...",
    topic: "sistemas",
  },
  {
    _id: "2",
    title: "etica",
    teacher: "chaparro",
    description: "...",
    topic: "humanidades",
  },

  {
    _id: "3",
    title: "epistemologia",
    teacher: "chaparro",
    description: "...",
    topic: "humanidades",
  },
];

module.exports = {
  getCourses: () => {
    return courses;
  },
};  
