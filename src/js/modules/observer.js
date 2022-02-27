export const observer = () => {
	const observer = new IntersectionObserver(
		(entries, observer) => {
			console.log(entries, observer);
		},
		{
			root: document.querySelector('.main'),
			threshold: 0.7,
			rootMargin: '5px',
		},
	);

	document.querySelector('.section').forEach((section) => {});
};
