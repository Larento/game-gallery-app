import { createGlobalStyle } from 'styled-components';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	h1, h2, h3, p {
		margin-bottom: 0.5rem;
	}

	html, body {
		height: 100%;
	}

	html {
		font-family: ${inter.style.fontFamily};
	}

	#__next {
		height: 100%;
	}

`;

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
