import { by, element } from 'protractor';

export class TablePage {
    private linkCreateTableMenu = element(by.id('linkCreateTable'));
    private linkCreateTable = element(by.id('addTableButton'));
    private linkListTable = element(by.id('linkListTable'));
    private inputCodeTable = element(by.id('tableCode'));
    private tablesList = element.all(by.css('ul.tables li'));


    async clickCreateTableMenuButton() {
        await this.linkCreateTableMenu.click();
    }

    async clickListTableButton() {
        await this.linkListTable.click();
    }

    async enterCode(tableCode) {
        await this.inputCodeTable.sendKeys(tableCode);
    }

    async tableCount() {
        return this.tablesList.count();
    }

    async clickCreateTableButton() {
      await this.linkCreateTable.click();
    }

    async getTextTableElementFromList(tableIdFromList : string) {
      await element(by.id(tableIdFromList)).getText();
    }

}

