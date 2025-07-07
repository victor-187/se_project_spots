const editProfilebtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosebtn = editProfileModal.querySelector(".modal__close-btn");

const newPostbtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosebtn = newPostModal.querySelector(".modal__close-btn");

editProfilebtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

editProfileClosebtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

newPostbtn.addEventListener("click", function () {
  newPostModal.classList.add("modal__is-opened");
});

newPostClosebtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal__is-opened");
});
