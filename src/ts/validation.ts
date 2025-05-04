// Checks an html input element for valid input assigns the error message to the error box
export function isValidInput(input: HTMLInputElement, errorBox : HTMLDivElement): boolean {
  if (input.value === '') {
    input.classList.add('is-invalid');
    errorBox.textContent = "Please enter an animal name";
    return false;
  }
  else if(input.value.length < 2) {
    input.classList.add('is-invalid');
    errorBox.textContent = "Please enter a name with at least 2 characters";
    return false;
  }
  else {
    input.classList.remove('is-invalid');
    errorBox.textContent = "";
    return true;
  }
}