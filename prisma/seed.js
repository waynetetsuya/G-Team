const { Prisma, PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/** @type {Prisma.UserCreateInput} */
const userData = {
  username: "joey",
  password: "1234",
  todos: {
    create: [
      { task: "Water the Plant" },
      { task: "Buy Sugar" },
      { task: "Buy Salt" },
      { task: "Schedule Appointment" },
      { task: "Review for Exam" },
      { task: "Finish the Project" },
      { task: "A" },
      { task: "Go to the Gym" },
      { task: "Read a Book" },
      { task: "Watch a Movie" },
      { task: "Clean the House" },
      { task: "Cook Dinner" },
      { task: "Do Laundry" },
      { task: "Call Mom" },
      { task: "Plan Vacation" },
      { task: "Organize Desk" },
      { task: "Grocery Shopping" },
      { task: "Pay Bills" },
      { task: "Walk the Dog" },
      { task: "Attend Meeting" },
      { task: "Finish Homework" },
      { task: "Practice Coding" },
      { task: "Learn a New Language" },
      { task: "Update Resume" },
      { task: "Volunteer" },
      { task: "Meditate" },
      { task: "Go for a Run" },
      { task: "Try a New Recipe" },
      { task: "Visit a Friend" },
      { task: "Watch a Documentary" },
      { task: "Take a Nap" },
      { task: "Plan a Weekend Trip" },
      { task: "Declutter Room" },
      { task: "Write in Journal" },
      { task: "Practice Guitar" },
      { task: "Attend Workshop" },
      { task: "Explore a New Hobby" },
    ],
  },
};

async function main() {
  await prisma.user.create({ data: userData });
}

main();
