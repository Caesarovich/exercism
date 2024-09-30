/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer) {
  if (timer === undefined) return 'You forgot to set the timer.';
  if (timer <= 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  const qty = {
    noodles: 0,
    sauce: 0,
  };

  for (const layer of layers) {
    if (layer === 'noodles') qty.noodles += 50;
    if (layer === 'sauce') qty.sauce += 0.2;
  }

  return qty;
}

export function addSecretIngredient(friendList, myList) {
  myList.push(friendList.at(-1));
}

export function scaleRecipe(recipe, scale = 2) {
  const scaledRecipe = {};

  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = (recipe[ingredient] / 2) * scale;
  }

  return scaledRecipe;
}
