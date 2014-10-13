describe('our homepage', function() {

    it('should say Allo', function() {

        //The browser.get function defines the URL of the page you'd want Protractor to navigate to.
        browser.get('http://localhost:9000/#/');

        //by.tagName selector to locate the h1 tag
        var heading = element(by.tagName('h1'))

        //get the text within it and verify that it matches "'Allo, 'Allo!".
        expect(heading.getText()).toEqual("'Allo, 'Allo!")

    });

    it('should not be greater than 940px', function() {
        browser.get('http://localhost:9000/#/')

        //using the by.className selector to identify the container div and using the getSize property we check to
        //make sure that the width is not greater than 950px.
        element(by.className('container')).getSize().then(function(size) {  //Notice that the .then() function is a part
                                                                            // of a promise, which ensures that the code
                                                                            // waits for the result to be returned.
            expect(size.width).toBeLessThan(950)
        })
    })
});