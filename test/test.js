const assert = require('assert');

describe('Page opening', function () {

    it('get title', function(){
        browser.url('/'); //open baseUrl + string passed in .url() function
        let title = browser.getTitle(); //get page title and assign it to the "title" variable
        assert.equal(title, 'Bug Tracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

    it('get header title', function(){
        let title = browser.getText('.custom-header span');
        assert.equal(title, 'BugTracker', 'Title is incorrect'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

    it('click registration button', function(){
        browser.click('#registration');
        let result = browser.waitForVisible('button=< Back', 5000);
        assert.equal(result, true, 'Button is not clicked'); //compare that "title" variable equals to "Bug Tracker" and error-message if not
    })

});