/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import { Route, Router, Routes } from '@solidjs/router';
import History from './routes/History';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={App} /> 
				<Route path="/history" component={History} />
			</Routes>
		</Router>
	),

	root
);
