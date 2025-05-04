import { HybridAnimal, HybridAnimalBuilder } from './hybrid-animal';
import * as bootstrap from 'bootstrap';
import { isValidInput } from './validation';

//Get generate button input element
const button = document.getElementById('generateAnimal') as HTMLButtonElement;

//Get animal input elements
const animalOne = document.getElementById('AnimalOne') as HTMLInputElement;
const animalOneError =  document.getElementById("AnimalOneErrorBox") as HTMLDivElement
const animalTwo = document.getElementById('AnimalTwo') as HTMLInputElement;
const animalTwoError =  document.getElementById("AnimalTwoErrorBox") as HTMLDivElement

//Gain access to modal input elements
const animalNameInput = document.getElementById(
  'AnimalName',
) as HTMLInputElement;
const animalAgeInput = document.getElementById('AnimalAge') as HTMLInputElement;
const animalWeightInput = document.getElementById(
  'AnimalWeight',
) as HTMLInputElement;
const animalDietInput = document.getElementById(
  'AnimalDiet',
) as HTMLInputElement;

// Create or get the modal instance
const animalModal = bootstrap.Modal.getOrCreateInstance('#AnimalModal');

//Function that is called when the generate button is clicked
button.onclick = (e) => {
  // if either boxes are null an error will appear and the rest of the function will not be called
  if (!isValidInput(animalOne,animalOneError) || !isValidInput(animalTwo, animalTwoError)) {
    return;
  }

  //Use of the builder pattern to construct the animal object based on the users inputs
  const builder = new HybridAnimalBuilder(animalOne.value, animalTwo.value);
  const animal: HybridAnimal = builder
    .generateWeight()
    .generateAge()
    .generateDiet()
    .build();

  //Set the modal's input boxes to the generated animal's information
  animalNameInput.value = animal.name;
  animalAgeInput.value = animal.age.toString();
  animalWeightInput.value = animal.weight.toString();
  animalDietInput.value = animal.diet;


  //Show the animal modal
  animalModal.show();
};
