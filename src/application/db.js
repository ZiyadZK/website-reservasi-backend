// import { PrismaClient } from "@prisma/client";
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
    {
      emit: "event",
      level: "error",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query: " + e.query);
  console.log("Duration: " + e.duration + "ms");
});
