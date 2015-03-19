describe('Protractor Demo App', function() {

  var firstNum = element(by.model('first'));
  var secondNum = element(by.model('second'));
  var operator = element(by.model('operator'));
  var goButton = element(by.id('gobutton'));
  var resultPane = element(by.binding('latest'));

  beforeEach(function() {

    browser.get('http://juliemr.github.io/protractor-demo/');


  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNum.sendKeys(1);
    secondNum.sendKeys(2);
    goButton.click();
    expect(resultPane.getText()).toEqual('3');
  });

  it('should multiply one and two', function() {

    firstNum.sendKeys(1);
    secondNum.sendKeys(2);
    element(by.cssContainingText('option','*')).click();
    goButton.click();
    expect(resultPane.getText()).toEqual('2');
  });


});