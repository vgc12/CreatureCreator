export const DIET_TYPE = {
  Herbivore: 'Herbivore',
  Carnivore: 'Carnivore',
  Omnivore: 'Omnivore'
} as const;

export type ObjectValues<T> = T[keyof T];
export type DietType = ObjectValues<typeof DIET_TYPE>;