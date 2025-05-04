import { HybridAnimal, HybridAnimalBuilder } from './hybrid-animal.js';

const button = document.getElementById("generateAnimal") as HTMLButtonElement;

const animalOne = (document.getElementById("AnimalOne") as HTMLInputElement);
const animalTwo = (document.getElementById("AnimalTwo") as HTMLInputElement);

const animalNameLabel = (document.getElementById("AnimalName") as HTMLInputElement);
const animalAgeLabel = (document.getElementById("AnimalAge") as HTMLInputElement);
const animalWeightLabel = (document.getElementById("AnimalWeight") as HTMLInputElement);
const animalDiet = (document.getElementById("AnimalDiet") as HTMLInputElement);

button.onclick = (e) => {

  const builder = new HybridAnimalBuilder(animalOne.value, animalTwo.value);
  const animal : HybridAnimal = builder
    .generateWeight()
    .generateAge()
    .generateDiet()
    .build();

  animalNameLabel.value = animal.name;
  animalAgeLabel.value = animal.age.toString();
  animalWeightLabel.value = animal.weight.toString();
  animalDiet.value = animal.diet;


}
