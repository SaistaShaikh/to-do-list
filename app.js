let userIp = prompt("What you want to perform");
const todos = ["play with oreo"];

while (userIp !== "quit" && userIp !== "q") {
  if (userIp === "list") {
    console.log("************************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("************************");
  } else if (userIp === "delete") {
    const idx = parseInt(prompt("Enter index to delete: "));

    if (!Number.isNaN(idx)) {
      const dltd = todos.splice(idx, 1);
      console.log(`Deleted ${dltd[0]}`);
    } else {
      console.log("Unknown index");
    }
  } else if (userIp === "new") {
    const todo = prompt("Enter a todo");
    todos.push(todo);
    console.log(`${todo} added to the list`);
  }
  userIp = prompt("What you want to perform");
}
console.log("You quit the app!!!");
