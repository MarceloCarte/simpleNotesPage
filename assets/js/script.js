const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll("inputBox");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = `<p contenteditable="true" class="inputBox">
          <img src="./assets/images/delete.png" />
        </p>`;
  notesContainer.innerHTML += inputBox;
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".inputBox");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
