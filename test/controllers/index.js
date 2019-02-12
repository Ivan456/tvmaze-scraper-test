const expect = require('chai').expect;
const controllers = require('../../src/controllers');

describe('controllers/shows', function () {
    it('should set default values on empty params', function (done) {
        const req = { query: {} };
        const res = {
            status: function () { return res; },
            json: function () { return res; }
        };

        const models = { shows: {} };
        models.shows.cast = () => async function ({ page, size }) {
            expect(page).to.be.equal(0);
            expect(size).to.be.equal(10);
            done();
            return showsCast;
        };
        controllers.shows.cast({}, models)(req, res, done);
    });

    it('should set max size if it exceeds 100', function (done) {
        const req = { query: { size: 1000 } };
        const res = {
            status: function () { return res; },
            json: function () { return res; }
        };
        const models = { shows: {} };
        models.shows.cast = () => async function ({ page, size }) {
            expect(size).to.be.equal(100);
            done();
            return showsCast;
        };
        controllers.shows.cast({}, models)(req, res, done);
    });
});

const showsCast = [{
    'id': 5699,
    'name': 'Wanted Down Under',
    'cast': [
        {
            'id': 84879,
            'name': 'Nicki Chapman',
            'birthday': '1967-01-14'
        }
    ]
}];
