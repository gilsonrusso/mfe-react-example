// @ts-nocheck
import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App'

import '@testing-library/jest-dom/extend-expect'

describe('Login component tests', () => {

    it('Renders correctly initial document', async () => {

        render(<App />)

        const appComponent = screen.getByText('Container From Counter');

        expect(appComponent).toBeInTheDocument();
    });

});