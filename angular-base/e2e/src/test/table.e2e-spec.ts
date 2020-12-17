import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { TablePage } from '../page/table/table.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let table: TablePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        table = new TablePage();
    });

    const TABLE_CODE = '001';

    it('Deberia crear mesa', () => {

        page.navigateTo();
        navBar.clickTableMenu();
        table.clickCreateTableMenuButton();
        table.enterCode(TABLE_CODE);
        table.clickCreateTableButton();
    });

    it('Deberia listar mesas', () => {

        page.navigateTo();
        navBar.clickTableMenu();
        table.clickListTableButton();

        expect(table.tableCount()).toBeGreaterThanOrEqual(1);
    });
});
