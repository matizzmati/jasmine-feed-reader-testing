/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        
        /* This test is to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */  
        it('all urls are defined and not empty', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });
        


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all names are defined and not empty', function() {
            for (var i=0; i<allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        
        /* This test check if the menu element is
         * hidden by default.
         */
        it('menu is hidden by default', function() {
            var menuHidden = document.querySelector('.menu-hidden');
            expect(menuHidden).not.toBeNull();
        });

         /* This test check if the menu changes
          * visibility when the menu icon is clicked.
          */
        it('menu show and hide on click', function() {
            var button = document.querySelector('.menu-icon-link');
            button.click();
            expect(document.querySelector('.menu-hidden')).toBeNull();
            button.click();
            expect(document.querySelector('.menu-hidden')).not.toBeNull();
        })
        
    });

        
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * LoadFeed() is asynchronous function.
         */
        var entry;
        
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('at least one entry', function(done) {
            var entry = document.querySelectorAll('.feed a').length;
            expect(entry).toBeGreaterThan(0);
            done();
        });
        
    });
    
    describe('New Feed Selection', function() {
        /* That test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                var init = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('check if new feed is loaded on page', function() {
            var newFeed = document.querySelector('.feed').innerHTML;
            expect(newFeed).not.toBe(init);
            
        });
        
    });   
        
}());
