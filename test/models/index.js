const expect = require('chai').expect; // preference and tested with expect
const models = require('../../src/models');

describe('models/shows', function () {
    it('cast should be formatted and sorted by age descending ', async function () {
        const db = { shows: {} };
        db.shows.cast = async function () {
            return initList;
        };
        const result = await models.shows.cast(db)({});
        expect(result).to.deep.equal(sortedList);
    });
});

const initList = [{
    'id': 270,
    'name': 'The League',
    'cast': [
        {
            person: {
                'id': 8118,
                'name': 'Nick Kroll',
                'birthday': '1978-06-05'
            }
        },
        {
            person: {
                'id': 37525,
                'name': 'Stephen Rannazzisi',
                'birthday': null
            }
        },
        {
            person: {
                'id': 11105,
                'name': 'Mark Duplass',
                'birthday': '1976-12-07'
            }
        },
        {
            person: {
                'id': 37524,
                'name': 'Jon Lajoie',
                'birthday': null
            }
        },
        {
            person: {
                'id': 36542,
                'name': 'Katie Aselton',
                'birthday': '1978-10-01'
            }
        },
        {
            person: {
                'id': 14303,
                'name': 'Paul Scheer',
                'birthday': '1976-01-31'
            }
        }
    ]
}];

const sortedList = [{
    'id': 270,
    'name': 'The League',
    'cast': [
        {
            'id': 36542,
            'name': 'Katie Aselton',
            'birthday': '1978-10-01'
        },
        {
            'id': 8118,
            'name': 'Nick Kroll',
            'birthday': '1978-06-05'
        },
        {
            'id': 11105,
            'name': 'Mark Duplass',
            'birthday': '1976-12-07'
        },
        {
            'id': 14303,
            'name': 'Paul Scheer',
            'birthday': '1976-01-31'
        },
        {
            'id': 37524,
            'name': 'Jon Lajoie',
            'birthday': null
        },
        {
            'id': 37525,
            'name': 'Stephen Rannazzisi',
            'birthday': null
        }
    ]
}];
