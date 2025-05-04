import { HybridAnimalBuilder } from './hybrid-animal';
const generateButton = document.getElementById("generateAnimal");
generateButton.onclick = () => {
    const animalOne = document.getElementById("animalOne").value;
    const animalTwo = document.getElementById("animalTwo").value;
    const builder = new HybridAnimalBuilder(animalOne, animalTwo);
    const animal = builder
        .generateWeight()
        .generateAge()
        .generateDiet()
        .build();
    alert(animal.name + " is a " + animal.diet + " with a weight of " + animal.weight + " and an age of " + animal.age);
};
