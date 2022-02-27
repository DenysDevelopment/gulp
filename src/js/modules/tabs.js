export const tabs = () => {
	let tabs = document.querySelectorAll('[data-tabs]');
	for (let index = 0; index < tabs.length; index++) {
		const bemBlock = tabs[index].dataset.tabs.split(',')[0];
		const bemElem = tabs[index].dataset.tabs.split(',')[1] || 'item';
		const bemPanel = tabs[index].dataset.tabs.split(',')[2] || 'panel';
		const bemActive = tabs[index].dataset.tabs.split(',')[3] || 'active';
		console.dir(tabs[index].dataset.tabs);
		let tab = tabs[index];
		let tabsItems = tab.querySelectorAll(`.${bemBlock}__${bemElem}`);
		let tabsBlocks = tab.querySelectorAll(`.${bemBlock}__${bemPanel}`);
		for (let index = 0; index < tabsItems.length; index++) {
			let tabsItem = tabsItems[index];
			tabsItem.addEventListener('click', function (e) {
				for (let index = 0; index < tabsItems.length; index++) {
					let tabsItem = tabsItems[index];
					tabsItem.classList.remove(`${bemBlock}__${bemElem}--${bemActive}`);
					tabsBlocks[index].classList.remove(
						`${bemBlock}__${bemElem}--${bemActive}`,
					);
				}
				tabsItem.classList.add(`${bemBlock}__${bemElem}--${bemActive}`);
				tabsBlocks[index].classList.add(
					`${bemBlock}__${bemElem}--${bemActive}`,
				);
				e.preventDefault();
			});
		}
	}
};
