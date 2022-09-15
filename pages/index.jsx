import { Header } from '../src/components/header/';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/globalStyles';
import { theme } from '../src/styles/theme';

const Homepage = () => {
    return (
        <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Header/>
        </ThemeProvider>
        </>
    );
}

export default Homepage;
