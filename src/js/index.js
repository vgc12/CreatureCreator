import { HybridAnimalBuilder } from './hybrid-animal';
import * as bootstrap from 'bootstrap';
import { isValidInput } from './validation';
//Get generate button input element
const button = document.getElementById('generateAnimal');
//Get animal input elements
const animalOne = document.getElementById('AnimalOne');
const animalOneError = document.getElementById("AnimalOneErrorBox");
const animalTwo = document.getElementById('AnimalTwo');
const animalTwoError = document.getElementById("AnimalTwoErrorBox");
//Gain access to modal input elements
const animalNameInput = document.getElementById('AnimalName');
const animalAgeInput = document.getElementById('AnimalAge');
const animalWeightInput = document.getElementById('AnimalWeight');
const animalDietInput = document.getElementById('AnimalDiet');
// Create or get the modal instance
const animalModal = bootstrap.Modal.getOrCreateInstance('#AnimalModal');
//Function that is called when the generate button is clicked
button.onclick = (e) => {
    // if either boxes are null an error will appear and the rest of the function will not be called
    if (!isValidInput(animalOne, animalOneError) || !isValidInput(animalTwo, animalTwoError)) {
        return;
    }
    //Use of the builder pattern to construct the animal object based on the users inputs
    const builder = new HybridAnimalBuilder(animalOne.value, animalTwo.value);
    const animal = builder
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
//# sourceMappingURL=index.js.map