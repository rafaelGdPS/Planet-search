import React, { useEffect, useState } from 'react';
import StarWarsPlanetContext from './starWarsPlanetContext';
import { getApi } from '../utils/utils';
import { PlanetObject } from '../Types/type';

 type Props = {
   children: React.ReactNode,
 };

function StarPlanetProvider({ children }: Props) {
  const [planetData, setPlanetData] = useState<PlanetObject[]>([]);
  const [planetsFiltered, setPlanetFiltered] = useState<PlanetObject[]>([]);
  console.log(planetsFiltered);

  const filterPLanetByName = (name: string) => {
    const filterdPlanet = planetData.filter((planet) => {
      return planet.name.toLowerCase().match(name.toLowerCase());
    });

    if (filterdPlanet) {
      setPlanetFiltered(filterdPlanet);
    } else {
      setPlanetFiltered(planetData);
    }
  };

  useEffect(() => {
    const data = async () => {
      const apiPlanet = await getApi();
      const results = apiPlanet.map((planet: any) => {
        const { residents, ...rest } = planet;
        return rest;
      });
      setPlanetData(results);
      setPlanetFiltered(results);
    };
    data();
  }, []);

  const context = {
    planets: planetsFiltered,
    filterPLanetByName,
  };
  return (
    <StarWarsPlanetContext.Provider value={ context }>
      {children}
    </StarWarsPlanetContext.Provider>
  );
}

export default StarPlanetProvider;
