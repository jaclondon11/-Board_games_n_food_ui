describe('reservation component', function() {
  it('should add a reservation', function() {
    browser.get('http://localhost:4200/reservation');

    element(by.id('titular')).sendKeys('TITULAR');
    element(by.id('Game')).sendKeys('TITULAR');
    element(by.id('numberPeople')).sendKeys('4');
    element(by.id('reservationDate')).sendKeys('12152020');
    element(by.id('reservationTime')).sendKeys('1700');
    element(by.id('createReservaBtn')).click();

    browser.sleep(5 * 1000);

    // var table = element(by.id('table 01'));
    // expect(table.getText()).toEqual('table 01');
  });
});
