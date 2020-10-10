import searchEffects from "../components/searcherView/search.effects";

export function addSideEffectsToStore(store) {
  const effects = [searchEffects];
  effects.forEach((effect) => effect(store));
}
