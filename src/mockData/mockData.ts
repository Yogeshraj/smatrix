import { v4 as uuidv4 } from "uuid";

export const initialTasks = {
  Do: [
    {
      id: uuidv4(),
      title: "How to Easily Update Your Objects with the Spread Operator",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "modifying ",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "et porro tempora",
      completed: true,
    },
  ],
  Schedule: [
    {
      id: uuidv4(),
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ],
  Delegate: [
    {
      id: uuidv4(),
      title: "Spreading your objects is an easy operation",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "been spread inside userInfo , resulting in an ",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "fugiat veniam minus",
      completed: false,
    },
  ],
  Limit: [
    {
      id: uuidv4(),
      title: "Two Common Uses",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
  ],
};

export const boards = [
  {
    boardID: 1,
    boardTitle: "Do",
    boardSubtitle: "Important & Urgent",
    boardColor: "green",
  },
  {
    boardID: 2,
    boardTitle: "Schedule",
    boardSubtitle: "Important but not Urgent",
    boardColor: "blue",
  },
  {
    boardID: 3,
    boardTitle: "Delegate",
    boardSubtitle: "Not Important but Urgent",
    boardColor: "yellow",
  },
  {
    boardID: 4,
    boardTitle: "Limit",
    boardSubtitle: "Not Important and not Urgent",
    boardColor: "red",
  },
];
