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
      { task: "B" },
      { task: "C" },
      { task: "D" },
      { task: "E" },
      { task: "F" },
      { task: "G" },
      { task: "H" },
      { task: "I" },
      { task: "J" },
      { task: "K" },
      { task: "L" },
      { task: "M" },
      { task: "N" },
      { task: "O" },
      { task: "P" },
      { task: "Q" },
      { task: "R" },
      { task: "S" },
      { task: "T" },
      { task: "U" },
      { task: "V" },
      { task: "W" },
      { task: "X" },
      { task: "Y" },

    ],
  },
};

async function main() {
  await prisma.user.create({ data: userData });
}

main();
