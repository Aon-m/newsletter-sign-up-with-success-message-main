const closeDialogBtn = document.querySelector("#close-dialog-btn");
const successDialog = document.querySelector("#success-dialog");
const form = document.querySelector("#form");
const errorMessage = document.querySelector("#error-message");
const errorBackground = document.querySelector("#error-background");
const errorInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  emailValidation(formData);
});

errorInput.addEventListener("click", removeErrorBackground);

closeDialogBtn.addEventListener("click", () => {
  successDialog.close();
});

function emailValidation(element) {
  const email = element.get("email");

  switch (true) {
    case email.trim() === "":
      error();
      return;
    case !email.includes("@"):
      error();
      return;
    case email.trim() !== "" && email.includes("@"):
      clearError();
      successDialog.showModal();
      errorInput.value = "";
  }
}

function error() {
  errorMessage.classList.remove("hidden");
  errorBackground.classList.add("error");
  errorInput.classList.add("error__input");
}

function clearError() {
  errorMessage.classList.add("hidden");
  errorBackground.classList.remove("error");
  errorInput.classList.remove("error__input");
}

function removeErrorBackground() {
  errorBackground.classList.remove("error");
}
