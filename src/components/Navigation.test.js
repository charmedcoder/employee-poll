import * as React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';


describe('Navigation', () => {
    it('matches the snapshot when a name is passed', () => {
        var component = render(
            <Navigation authedUser={'Mike'}/>
        );
        expect(component).toMatchSnapshot();
    });

    it('matches the snapshot when no name is passed', () => {
        var component = render(
            <Navigation />
        );
        expect(component).toMatchSnapshot();
    });
});