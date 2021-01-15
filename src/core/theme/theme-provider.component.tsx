import * as React from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseLine from '@material-ui/core/CssBaseline';
import StylesProvider from  '@material-ui/styles/StylesProvider';
import { theme } from './theme';

export const ThemeProviderComponent : React.FC  = props => {
    const {children} = props;

    return (
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseLine />
                {children}
            </ThemeProvider>
        </StylesProvider>

    );

};