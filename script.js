let comments = [];

      function onPageLoad() {
        // add button listener
        makeButtonWork();
      }

      function makeButtonWork() {
        const buttonElement = document.querySelector("button");

        buttonElement.addEventListener("click", handleOnClick);
      }

      function handleOnClick() {
        // grab the input for the username
        const username = document.querySelector("#todolistinput").value;
    
        // grab the input for the text area
        // const comment = document.querySelector("textarea").value;
        // then display
        addNewComment(username);
      }

      function addNewComment(username) {
        comments.push({
          username,
        });

        renderComments();
      }

      function renderComments() {
        const commentsElement = document.querySelector("#comments");
        let newInnerHTML = "";
        comments.forEach((commentItem) => {
          const { username } = commentItem;
          newInnerHTML += `<div id="todoListContainer">
          <a href="#" id="comments" class="list-group-item list-group-item-action">${username}</a>
          <img id="closeWindowIcon" src="images/trashcan.png" alt="">
      </div>
                            `;
        });

        commentsElement.innerHTML = newInnerHTML;
      }

      window.onload = onPageLoad;


      
    // function addItem(){
    //     var li = document.createElement("LI");  
    //     var input = document.getElementById("add");
    //     li.innerHTML = input.value;
    //     input.value = "";

    //     document.getElementById("faves").appendChild(li);
    // }