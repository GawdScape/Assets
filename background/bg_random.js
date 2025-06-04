/** GawdScape Random Background **/

const img_url = "https://gawdscape.github.io/Assets/background/";

const img_files = [
	'2017-03-15_18.10.55.png',
	'2017-03-15_18.12.41.png',
	'2017-03-15_18.15.56.png',
	'2017-03-15_18.36.36.png',
	'2017-03-15_18.38.23.png',
	'2017-03-15_18.41.33.png',
	'2017-03-15_18.46.27.png',
	'2017-03-15_18.50.11.png',
	'2017-03-15_18.50.11_2.png',
	'2017-03-15_18.51.44.png',
	'2017-03-15_18.52.22.png',
	'2017-03-15_18.54.51.png',
	'2017-03-15_18.58.51.png',
	'2017-03-15_19.16.00.png',
];

function getRandomImage() {
	img_index = Math.floor(Math.random() * img_files.length);
	return img_files[img_index];
}

function loadBackground() {
	img_bg = sessionStorage.getItem("img_bg");
	if (!img_bg) {
		img_bg = getRandomImage();
		sessionStorage.setItem("img_bg", img_bg);
	}
	document.body.style.backgroundImage = `url('${img_url}${img_bg}')`;
}
