import React, { useEffect, useState } from 'react';
import StarWarsPlanetContext from './starWarsPlanetContext';
import { getApi } from '../utils/utils';

 type Props = {
   children: React.ReactNode,
 };

function StarPlanetProvider({ children }: Props) {
  const [planetData, setPlanetData] = useState([]);
  console.log(planetData);

  useEffect(() => {
    const data = async () => {
      const apiPlanet = await getApi();
      const results = apiPlanet.map((planet: any) => {
        const { residents, ...rest } = planet;
        return rest;
      });
      setPlanetData(results);
    };
    data();
  }, []);

  const context = {
    planets: planetData,
  };
  return (
    <StarWarsPlanetContext.Provider value={ context }>
      {children}
    </StarWarsPlanetContext.Provider>
  );
}

export default StarPlanetProvider;
