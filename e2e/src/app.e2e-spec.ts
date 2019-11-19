import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	// it('should display welcome message', () => {
	// 	page.navigateTo();
	// 	expect(page.getTitleText()).toEqual('thaw-angular-component-library app is running!');
	// });

	it('should be Foo', () => {
		const foo = 'Foo';

		// page.navigateTo();
		expect(foo).toEqual(foo);
	});

	afterEach(async () => {
		// Assert that there are no errors emitted from the browser
		const logs = await browser.manage().logs().get(logging.Type.BROWSER);

		expect(logs).not.toContain(jasmine.objectContaining({
			level: logging.Level.SEVERE,
		} as logging.Entry));
	});
});
