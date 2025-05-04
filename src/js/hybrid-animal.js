import { DIET_TYPE } from './diet-type';
import { randomInt } from './math-utils';
// This is a class that represents a builder for a hybrid animal
export class HybridAnimalBuilder {
    name;
    weight;
    diet;
    age;
    // Constructor that takes two animal names and generates a hybrid animal name
    constructor(name1, name2) {
        let splitName1 = this.splitName(name1);
        let splitName2 = this.splitName(name2);
        this.name = splitName1[0] + splitName2[1];
        this.weight = 0;
        this.diet = DIET_TYPE.Herbivore;
        this.age = 0;
    }
    //
    splitName(name) {
        let index = randomInt(1, name.length - 1);
        return [name.slice(0, index), name.slice(index)];
    }
    generateWeight() {
        this.weight = randomInt(100, 2000);
        return this;
    }
    generateAge() {
        this.age = randomInt(1, 200);
        return this;
    }
    generateDiet() {
        this.diet = [DIET_TYPE.Carnivore, DIET_TYPE.Herbivore, DIET_TYPE.Omnivore][randomInt(0, 2)];
        return this;
    }
    build() {
        return {
            name: this.name,
            age: this.age,
            diet: this.diet,
            weight: this.weight,
        };
    }
}
//# sourceMappingURL=hybrid-animal.js.map