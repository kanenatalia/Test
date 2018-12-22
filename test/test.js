const assert = require('assert');

describe('Page opening', function () {

    it('get title', function(){
        browser.url('/');
        let title = browser.getTitle();
        assert.equal(title, 'Bug Tracker', 'Title is incorrect');
    })

    it('get header title', function(){
        let title = browser.getText('.custom-header span');
        assert.equal(title, 'BugTracker', 'Title is incorrect');
    })

    it('click registration button', function(){
        browser.click('#registration');
        let result = browser.waitForVisible('button=< Back', 5000);
        assert.equal(result, true, 'Button is not clicked');
    })

});