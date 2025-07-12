const editProfilebtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosebtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostbtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosebtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const submitProfileForm = newPostModal.querySelector(".modal__form");
const captionInput = newPostModal.querySelector("#card-caption-input");
const linkInput = newPostModal.querySelector("#card-image-input");

editProfilebtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;

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

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddProfileSubmit(evt) {
  evt.preventDefault();

  newPostModal.classList.remove("modal__is-opened");
  console.log(linkInput.value);
  console.log(captionInput.value);
}

submitProfileForm.addEventListener("submit", handleAddProfileSubmit);
