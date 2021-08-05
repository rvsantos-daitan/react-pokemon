import { shallow } from 'enzyme';
import React from 'react';
import { FilterHeader } from '../../global/generics/atoms/styles';

import SearchBar from './searchbar';

describe('Searchbar Component', () => {
    it('Should Render the Input Label', () => {
        const searchbar = shallow(
            <SearchBar />
        );

        expect(searchbar.find(FilterHeader).text()).not.toBeFalsy();
    });

    /*it('Should render the Input Empty', () => {
        const searchbar = shallow(
            <SearchBar />
        );

        expect(searchbar.find(SearchBar).text()).toBeEmpty();
    })
    */
})