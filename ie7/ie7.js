/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Scicon-Brands\'">' + entity + '</span>' + html;
	}
	var icons = {
		'scicon-apple-inc': '&#xe902;',
		'scicon-arduino': '&#xe903;',
		'scicon-arduino-wordmark': '&#xe904;',
		'scicon-c-lang': '&#xe905;',
		'scicon-c-lang-alt': '&#xe906;',
		'scicon-cpp-lang': '&#xe907;',
		'scicon-c-sharp': '&#xe908;',
		'scicon-css': '&#xe909;',
		'scicon-css-wordmark': '&#xe90a;',
		'scicon-discord': '&#xe90b;',
		'scicon-discord-text': '&#xe90c;',
		'scicon-discord-wordmark': '&#xe90d;',
		'scicon-esa': '&#xe90e;',
		'scicon-esa-text': '&#xe90f;',
		'scicon-esa-wordmark': '&#xe910;',
		'scicon-facebook': '&#xe911;',
		'scicon-facebook-f': '&#xe912;',
		'scicon-fortran': '&#xe913;',
		'scicon-f-sharp': '&#xe914;',
		'scicon-github': '&#xe915;',
		'scicon-github-text': '&#xe916;',
		'scicon-gitlab': '&#xe917;',
		'scicon-gitlab-text': '&#xe918;',
		'scicon-gitlab-wordmark': '&#xe919;',
		'scicon-go-gopher': '&#xe91a;',
		'scicon-go-lang': '&#xe91b;',
		'scicon-google': '&#xe91c;',
		'scicon-google-text': '&#xe91d;',
		'scicon-html5': '&#xe91e;',
		'scicon-html5-wordmark': '&#xe91f;',
		'scicon-ibm': '&#xe920;',
		'scicon-instagram': '&#xe921;',
		'scicon-instagram-alt': '&#xe922;',
		'scicon-java': '&#xe923;',
		'scicon-javascript': '&#xe924;',
		'scicon-javascript-text': '&#xe925;',
		'scicon-java-wordmark': '&#xe926;',
		'scicon-jquery': '&#xe927;',
		'scicon-jquery-slogan': '&#xe928;',
		'scicon-jquery-wordmark': '&#xe929;',
		'scicon-khan-academy': '&#xe92a;',
		'scicon-khan-academy-alt': '&#xe92b;',
		'scicon-khan-academy-text': '&#xe92c;',
		'scicon-khan-academy-wordmark': '&#xe92d;',
		'scicon-linkedin': '&#xe92e;',
		'scicon-linkedin-wordmark': '&#xe92f;',
		'scicon-matlab': '&#xe930;',
		'scicon-mercedes': '&#xe931;',
		'scicon-meta': '&#xe932;',
		'scicon-meta-wordmark': '&#xe933;',
		'scicon-mongodb-leaf': '&#xe934;',
		'scicon-mongodb-wordmark': '&#xe935;',
		'scicon-mysql': '&#xe936;',
		'scicon-mysql-mark': '&#xe937;',
		'scicon-mysql-text': '&#xe938;',
		'scicon-nasa': '&#xe939;',
		'scicon-nasa-worm': '&#xe93a;',
		'scicon-nature': '&#xe93b;',
		'scicon-nature-text': '&#xe93c;',
		'scicon-nodejs': '&#xe93d;',
		'scicon-nodejs-js': '&#xe93e;',
		'scicon-nodejs-wordmark': '&#xe93f;',
		'scicon-nsf': '&#xe940;',
		'scicon-perl': '&#xe941;',
		'scicon-perl-camel': '&#xe942;',
		'scicon-php': '&#xe943;',
		'scicon-php-text': '&#xe944;',
		'scicon-python': '&#xe945;',
		'scicon-quora': '&#xe946;',
		'scicon-quora-alt': '&#xe947;',
		'scicon-react': '&#xe948;',
		'scicon-researchgate': '&#xe949;',
		'scicon-researchgate-alt': '&#xe94a;',
		'scicon-sass': '&#xe94b;',
		'scicon-scihook': '&#xe94c;',
		'scicon-scihook-alt': '&#xe94d;',
		'scicon-scihook-square': '&#xe94e;',
		'scicon-spacex': '&#xe94f;',
		'scicon-spacex-alt': '&#xe950;',
		'scicon-spotify': '&#xe951;',
		'scicon-spotify-text': '&#xe952;',
		'scicon-spotify-wordmark': '&#xe953;',
		'scicon-sqlite': '&#xe954;',
		'scicon-sqlite-wordmark': '&#xe955;',
		'scicon-stackoverflow': '&#xe956;',
		'scicon-stackoverflow-text': '&#xe957;',
		'scicon-stackoverflow-wordmark': '&#xe958;',
		'scicon-telegram': '&#xe959;',
		'scicon-telegram-rounded': '&#xe95a;',
		'scicon-tesla-inc': '&#xe95b;',
		'scicon-tesla-text': '&#xe95c;',
		'scicon-tesla-wordmark': '&#xe95d;',
		'scicon-threads': '&#xe95e;',
		'scicon-tua': '&#xe95f;',
		'scicon-tua-wordmark': '&#xe960;',
		'scicon-tubitak': '&#xe961;',
		'scicon-tubitak-wordmark': '&#xe962;',
		'scicon-twitter': '&#xe963;',
		'scicon-typescript': '&#xe964;',
		'scicon-typescript-rounded': '&#xe965;',
		'scicon-vuejs': '&#xe966;',
		'scicon-wikimedia': '&#xe967;',
		'scicon-wikimedia-text': '&#xe968;',
		'scicon-wikimedia-wordmark': '&#xe969;',
		'scicon-wikipedia': '&#xe96a;',
		'scicon-x-corp': '&#xe96b;',
		'scicon-youtube': '&#xe96c;',
		'scicon-youtube-play': '&#xe96d;',
		'scicon-youtube-text': '&#xe96e;',
		'scicon-youtube-wordmark': '&#xe96f;',
		'scicon-html51': '&#xe900;',
		'scicon-html5-wordmark1': '&#xe901;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/scicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
