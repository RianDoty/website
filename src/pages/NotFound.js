import { Link } from 'react-router-dom';
import resolveRoute from '../resolveRoute.js';

export default function NotFound(props) {
	return (
		<main>
			<h1>The page you are looking for is not available.</h1>
			<hr />
			<p>
				If you typed in the URL yourself, please double-check the spelling.
				<br />
				If you got here from a link within our site, please{' '}
				<Link className="theme-link" to={resolveRoute('/', 'contact')}>
					Contact Us
				</Link>
				.
			</p>
		</main>
	);
}
