import { DIET_TYPE, DietType } from './diet-type.js';
import { randomInt } from './math-utils.js';


export type HybridAnimal = {
  name: string;
  weight: number;
  diet: DietType
  age: number;
};

export class HybridAnimalBuilder {
  public name: string;
  public weight: number;
  public diet: DietType
  public age: number;

  constructor(name1: string, name2: string) {
    let splitName1 = this.splitName(name1);
    let splitName2 = this.splitName(name2);

    this.name = splitName1[0] + splitName2[1];
    this.weight = 0;
    this.diet = DIET_TYPE.Herbivore;
    this.age = 0;
  }

  splitName(name: string): string[] {
    let index = randomInt(1, name.length - 1);
    return [name.slice(0, index), name.slice(index)];
  }

  generateWeight(): this {
    this.weight = randomInt(100, 2000);
    return this;
  }

  generateAge(): this {
    this.age = randomInt(1, 200);
    return this;
  }

  generateDiet(): this {
    this.diet = [DIET_TYPE.Carnivore, DIET_TYPE.Herbivore, DIET_TYPE.Omnivore][
      randomInt(0,2)
      ];
    return this;
  }

  build(): HybridAnimal {
    return {
      name: this.name,
      age: this.age,
      diet: this.diet,
      weight: this.weight,
    };
  }
}