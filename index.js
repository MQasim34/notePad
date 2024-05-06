const createNote = document.querySelector("#createNote");
const noteContainer = document.querySelector("#noteContainer");

const notes = document.querySelectorAll(".input-box");

function shownotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function update() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createNote.addEventListener("click", function () {
  //add p element
  let notespara = document.createElement("p");
  notespara.classList = "input-box";
  notespara.setAttribute("contenteditable", "true");
  // create img
  let deleteImg = document.createElement("img");
  deleteImg.src = "delete.png";
  deleteImg.classList = "deleteIcon";
  noteContainer.appendChild(notespara);
  notespara.appendChild(deleteImg);
  //   update();
});

noteContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    update();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        update();
      };
    });
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
