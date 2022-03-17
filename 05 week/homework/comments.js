var commentList = ["this is a very good blog", "what the hell did I just read?", "This is really inspiring"]
let commentBox = document.createElement("ul");
commentSection.appendChild(commentBox)

for (i = 0; i < commentList.length; i ++) { // 1. We create the fardcoded part - user details.
    const imgLogo = document.createElement("img");
    imgLogo.src = "./default-avatar.jpg"
    commentBox.appendChild(imgLogo)
    const userId = document.createElement("p")
    userId.innerHTML = "nettroll@trolling.com"
    commentBox.appendChild(userId)
    // we create each comment from the initial list
    let item = commentList[i];
    let itemHTML = document.createElement("li");
    itemHTML.innerHTML = item
    commentBox.appendChild(itemHTML)
    // we put a delete button for each of them
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    itemHTML.appendChild(deleteButton)
    deleteButton.onclick = function () {
        commentBox.removeChild(imgLogo)
        commentBox.removeChild(userId)
        commentBox.removeChild(itemHTML)
    }
}

let commentInput = document.getElementById("add-text")
commentInput.placeholder = "Write here..."
let addCommentButton = document.getElementById("submit-comment")

addCommentButton.onclick = function () {
    if (commentInput.value.length == 0) {
        alert("Please write a comment first");
    } else { // 1. We create the fardcoded part - user details.
        const imgLogo = document.createElement("img");
        imgLogo.src = "./default-avatar.jpg"
        commentBox.appendChild(imgLogo)
        const userId = document.createElement("p")
        userId.innerHTML = "nettroll@trolling.com"
        commentBox.appendChild(userId)
        // we create the element and append it to the Comment Box
        let itemHTML = document.createElement("li");
        itemHTML.innerHTML = commentInput.value
        commentBox.appendChild(itemHTML)
        // we create the delete button along with the new comments
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        itemHTML.appendChild(deleteButton)
        // we reset the input field
        document.getElementById("add-text").value = ""

        deleteButton.onclick = function () {
            commentBox.removeChild(imgLogo)
            commentBox.removeChild(userId)
            commentBox.removeChild(itemHTML)

        }
    }
}
