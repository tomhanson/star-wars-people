import React from 'react';

import Logo from './Logo';

const Header = props => {
	return (
		<header className="App-header">
			<audio preload="auto">
				<source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
				<source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
			</audio>
			<Logo />
			<h1 className="App-title"> People finder </h1>
		</header>
	);
};

export default Header;
