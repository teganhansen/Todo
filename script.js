let comments = [];

// add button listener
function onPageLoad() {
    makeButtonWork();
}

// waits for button to be presssed, then calls "handleOnClick function"
function makeButtonWork() {
    const buttonElement = document.querySelector("button");
    
    buttonElement.addEventListener("click", handleOnClick);
}

// clear submit textarea
function ClearFields() {
    document.getElementById("todolistinput").value = "";
}

// clear ALL todo titles
function clearAllButton() {
    comments.length = 0;
    renderComments();
}

function handleOnClick() {
    // grab the input for the username
    const username = document.querySelector("#todolistinput").value;
    const id = makeid(5);

    // grab the input for the text area
    // then display
    addNewComment(username, id);
    renderComments();
    changeTODOtitle(username, id);
  }

function addNewComment(username, id) {
    comments.push({
       username,
       id,
       arrayOfTasks: []
    });
}

function renderComments() {
    const commentsElement = document.querySelector("#comments");
    let newInnerHTML = "";
    comments.forEach(commentItem => {
        const { username, id } = commentItem;
        newInnerHTML += `
            <div class="todoListContainer" >
                <a href="#" id="comments" class="list-group-item list-group-item-action" onclick="changeTODOtitle('${username}', '${id}');">${username}</a>
                <img id="${id}" src="images/trashcan.png" alt="" onclick="deleteListTitle('${id}')">
                </div>
                `;
                console.log(renderTask);

        
    });
    

    commentsElement.innerHTML = newInnerHTML; 
    ClearFields();  
}


function deleteListTitle(id) {
    // getindex(id);
    // search through the array to find one with the id of delete 
    // button and delete based off it
    comments.splice(findIndexNum(id), 1);
    renderComments();
}

function findIndexNum(id) {
    // array id not being found
    let foundid = comments.findIndex(element => element.id === id )
    return foundid;
}

function getindex(id) {
    let indexnum = comments.indexOf(id);
    console.log(indexnum);
}

// random string generator
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}





// right section


function changeTODOtitle(username, id) {
    // document.getElementById("TODOlistTitle").innerHTML = `${username}`;
        document.getElementById("TODOlistTitle").innerHTML = `${username}`;
        createTaskSubmitButton(username, id);
        renderTask(id);
}

// create task title and submit button
function createTaskSubmitButton(username, id) {
    const contentElement = document.querySelector("#createcontent");
    // let newInnerHTML = "";
    comments.forEach(() => {
        newInnerHTML = `
        <input id="taskInputBox" class="contentinput" type="text" placeholder="Create task">
        <button onclick="handleTaskInput('${id}');" id="${id}" class="contentbutton">Submit</button>
        `;
    });
    
    contentElement.innerHTML = newInnerHTML; 
}

function handleTaskInput(commetsId) {
    let newId = makeid(5)
    const tasktext = document.querySelector("#taskInputBox").value;

    addTaskToArray(newId, tasktext, commetsId);
}

function addTaskToArray(newId, tasktext, commentsId) {
    let index = comments.findIndex(element => element.id === commentsId);
    comments[index].arrayOfTasks.push( {task : tasktext , taskId : newId , select : false});

    renderTask(commentsId, select);
}
function findindexofarray(commentsId) {
    let index = comments.findIndex(element => element.id === commentsId);
    return index;
}

// creates the roundboxes
function renderTask(commentsId, select) {
//    let index = findindexofarray(commentsId);
    const arrayOfTasksElement = document.querySelector("#taskbox");
    let newInnerHTML = "";
    comments[findindexofarray(commentsId)].arrayOfTasks.forEach(commentItem => {
        const { task, taskId } = commentItem;
        newInnerHTML += `
        <div class="roundedbox" onclick=" id='completedTask'" >
            <div class="pinLogoContainer">
                <img class="pinLogo" src="images/todo icon darkpurple.png" alt="">
                <img onclick="deleteRoundBox('${taskId}', '${commentsId}')" class="pin2Logo" src="images/trashcan.png" alt="">
            </div>
            <h1>${task}</h1>
        </div>
        `;
    });
    ClearTaskBoxInput();

    arrayOfTasksElement.innerHTML = newInnerHTML;
}

function deleteRoundBox(taskId, commentsId) {
   let index = findindexofarray(commentsId);
   let taskIndex = comments[index].arrayOfTasks.findIndex(element => element.taskId === taskId);

   comments[index].arrayOfTasks.splice(taskIndex , 1);    
   renderTask(commentsId);
}

// clear task submit textarea
function ClearTaskBoxInput() {
    document.getElementById("taskInputBox").value = " ";
    // createTaskSubmitButton();
}

// clear ALL todo tasks
function clearTaskButton() {
    comments.arrayOfTasks.length = 0;
    // comments.arrayOfTasks = [];
    renderTask();
}

window.onload = onPageLoad;
  
 