import React from 'react';

import { shallow } from 'enzyme';
import { POKEMON_MOCK } from '../../mocks/pokemon.mock';
import Card from './card';
import { Sprite } from '../../global/generics/atoms/sprite/sprite';
import { Button, CardHeader } from './styles';

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

    it('Card sprite should contain alt equals to Pokemon Name', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Sprite).prop("alt")).toEqual(POKEMON_MOCK.name);
    });


    it('Card button should display "Favorite" text if Pokemon is not marked as Favorite', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Button).text()).toEqual('Favorite');
    });

    it('Card button color state should be "White" if Pokemon is not marked as Favorite', () => {
        const card = shallow(
            <Card
                pokemon={POKEMON_MOCK}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Button).props('state').state.backgroundColor).toEqual('White');
    });

    it('Card button should display "Unfavorite" text if Pokemon is marked as Favorite', () => {
        const card = shallow(
            <Card
                pokemon={{ ...POKEMON_MOCK, isFavorite: true }}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Button).text()).toEqual('Unfavorite');
    });

    it('Card button color state should be "White" if Pokemon is marked as Favorite', () => {
        const card = shallow(
            <Card
                pokemon={{ ...POKEMON_MOCK, isFavorite: true }}
                displayButton={true}
                display={'flex'}
                cardWidth={null}
            />
        );

        expect(card.find(Button).props('state').state.backgroundColor).toEqual('PokemonYellow');
    });
    /*
        it('Card button text changes from "Favorite" to "Unfavorite" after click', () => {
            const card = shallow(
                <Card
                    pokemon={POKEMON_MOCK}
                    displayButton={true}
                    display={'flex'}
                    cardWidth={null}
                />
            );
    
            card.find(Button).simulate('click');
            expect(card.find(Button).text()).toEqual("Unfavorite");
    
        });
    */
});