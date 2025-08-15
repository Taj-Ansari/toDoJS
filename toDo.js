let listItems = [];

let inputAction = prompt("ENTER THE ACTION YOU WANT TO PERFORM");
let action = inputAction.toLowerCase().trim();

while (true) {
  if (action == "list") {
    console.log("-------------------");
    for (let i = 0; i < listItems.length; i++) {
      console.log(i, listItems[i]);
    }
    console.log("-------------------");
  } else if (action == "quit") {
    console.log("QUITTING APP!");
    break;
  } else if (action == "add") {
    let addItem = prompt("ENTER ELEMENT YOU WANT TO ADD");
    listItems.push(addItem.toUpperCase().trim());
    console.log("TASK ADDED: ",addItem.toUpperCase().trim())
  } else if (action == "delete") {
    let delItem = prompt("ENTER INDEX NO. OF ITEM YOU WANT TO DELETE");
    console.log("DELETING: " + listItems[delItem]);
    listItems.splice(delItem, 1);
  } else {
    alert("ENTER THE CORRECT ACTION");
  }


  inputAction = prompt("ENTER THE ACTION YOU WANT TO PERFORM");
  action = inputAction.toLowerCase().trim();
}
