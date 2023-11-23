import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import StarPlanetProvider from '../Context/starPlanetProvider';
import userEvent from '@testing-library/user-event'
import { expect, vi } from 'vitest'
import { planetMock } from './Mock/planetMock';

describe('Testando aplicação no APP', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => (planetMock),
    } as Response);
  });
  
  afterEach(() => {
    vi.clearAllMocks();
  });

  const user = userEvent.setup()

  test('verificando todos os itens na tela', async () => {
    render(
    <StarPlanetProvider>
      <App />;
    </StarPlanetProvider>
    )
    

    const allButtons = screen.getAllByRole('button')
    const inputName = screen.getByRole('searchbox', { name: /starwars planet/i})
    const planets = await screen.findAllByTestId('planet-name')
    const tableTitles = screen.getAllByRole('columnheader')
    const cellPlanet = await screen.findAllByRole('cell')
    const rows = await screen.findAllByRole('row')

    expect(rows.length).toBe(11)
    expect(planets).toHaveLength(10)
    expect(allButtons).toHaveLength(3)
    // await user.type( inputName,'a')
    // expect(rows).toHaveLength(7)
  });

  test('Testar ordenaçao', async () => {
    render(
      <StarPlanetProvider>
        <App />;
      </StarPlanetProvider>
      )
      const btnAsc = screen.getByRole('radio', {name: /asc/i})
      const btnDsc = screen.getByText(/dsc/i)
      const btnOrder = screen.getByRole('button', {name: /ordenar/i})
      const collumOrder = screen.getByRole('combobox', {name: /ordenar/i})

      await user.click(btnAsc)
      await user.click(btnOrder)

      await user.click(btnDsc)
      await user.click(btnOrder)


  })
})

