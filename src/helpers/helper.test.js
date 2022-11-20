var getPercent = require('./helper');

describe('getPercent', () => {
    it('will return the percentage of the participants who chose the option', () => {
        var total = 4;
        var partial = 2;
        var result = getPercent(total,partial);
        expect(result).toEqual(50);
    });

});

