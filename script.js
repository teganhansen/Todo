let comments = [];
let listTitleName= [];

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
    // document.getElementById("textfield2").value = "";
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
    // const comment = document.querySelector("textarea").value;
    // then display
    addNewComment(username, id);
  }

function addNewComment(username, id) {
    comments.push({
       username,
       id,
    //    array [] 
    });
    renderComments();
}

function renderComments() {
    const commentsElement = document.querySelector("#comments");
    let newInnerHTML = "";
    comments.forEach(commentItem => {
        const { username, id } = commentItem;
        newInnerHTML += `
            <div class="todoListContainer" >
                <a href="#" id="comments" class="list-group-item list-group-item-action" onclick="changeTODOtitle('${username}');">${username}</a>
                 <img data-id="${id}" src="images/trashcan.png" alt="" onclick="deleteListTitle('${id}')">
            </div>
        `;            
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

function changeTODOtitle(username) {
    document.getElementById("TODOlistTitle").value = '${username}';
    // document.getElementById("textfield2").value = "";
}

  window.onload = onPageLoad;
  
 