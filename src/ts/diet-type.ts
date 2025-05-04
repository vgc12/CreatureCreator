// This file defines a constant object DIET_TYPE that contains three types of diets: Herbivore, Carnivore, and Omnivore.
export const DIET_TYPE = {
  Herbivore: 'Herbivore',
  Carnivore: 'Carnivore',
  Omnivore: 'Omnivore'
} as const;

export type ObjectValues<T> = T[keyof T];
export type DietType = ObjectValues<typeof DIET_TYPE>;