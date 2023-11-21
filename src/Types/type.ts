export type PlanetObject = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  films: []
  created: string,
  edited: string,
  url: string
};

export type InputValueType = {
  name: string,
  comparison: string,
  colum: string,
  value: string,
};
export type ContextType = {
  planets: PlanetObject[]
  filterPLanetByName: (name: string) => void,
  inputValue: InputValueType,
  setInputValue: React.Dispatch<React.SetStateAction<{
    name: string;
    colum: string;
    comparison: string;
    value: string;
  }>>,
  filterNumeric: (object: InputValueType[]) => PlanetObject[],
  setPlanetFiltered: React.Dispatch<React.SetStateAction<PlanetObject[]>>
};

export const INITIAL_INPUTVALUE = {
  name: '',
  colum: 'population',
  comparison: 'maior que',
  value: '0',
};
