import React from 'react';

import { shallow } from 'enzyme';
import { POKEMON_MOCK } from '../../mocks/pokemon.mock';
import Card from './card';
import { Sprite } from '../../global/generics/atoms/sprite/sprite';
import { CardHeader } from './styles';

describe('Card Component', () => {
    it('Card should render Pokemon Name and ID', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(CardHeader).text()).toEqual(`${POKEMON_MOCK.name}#${POKEMON_MOCK.id}`);
    });

    it('Card sprite should contain src link given by the API', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Sprite).prop("src")).toEqual(POKEMON_MOCK.sprites.front_default);
    });

    /*it('Card button text changes after click', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

    });*/
});