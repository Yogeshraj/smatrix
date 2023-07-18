export default function getBoardName(
  important: string,
  urgent: string
): {
  boardName: string;
  boardID: number;
} {
  let boardName, boardID;
  if (important === "yes" && urgent === "yes") {
    boardName = "Do";
    boardID = 1;
  } else if (important === "yes" && urgent === "no") {
    boardName = "Schedule";
    boardID = 2;
  } else if (important === "no" && urgent === "yes") {
    boardName = "Delegate";
    boardID = 3;
  } else if (important === "no" && urgent === "no") {
    boardName = "Limit";
    boardID = 4;
  } else if (important === "yes" && urgent === "neutral") {
    boardName = "Schedule";
    boardID = 2;
  } else if (important === "no" && urgent === "neutral") {
    boardName = "Limit";
    boardID = 4;
  } else if (important === "neutral" && urgent === "yes") {
    boardName = "Delegate";
    boardID = 3;
  } else if (important === "neutral" && urgent === "no") {
    boardName = "Limit";
    boardID = 4;
  } else {
    boardName = "Later";
    boardID = 5;
  }
  return { boardName, boardID };
}
