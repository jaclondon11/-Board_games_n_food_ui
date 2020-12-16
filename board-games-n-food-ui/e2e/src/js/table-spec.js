describe('table component', function() {
  it('should add a table', function() {
    browser.get('http://localhost:4200/tables');

    element(by.id('code')).sendKeys('table 01');
    element(by.id('addTableButton')).click();

    browser.sleep(5 * 1000);

    var table = element(by.id('table 01'));
    expect(table.getText()).toEqual('table 01');
  });
});
