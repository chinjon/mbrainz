require('mocha');
const assert = require('assert');

const mbrainz = require('./../main');

const TEST_NIRVANA_ID = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';

describe('main', () => {
  describe('getDataArtist()', () => {
    it('should return an object', () => {
      mbrainz.getDataArtist(TEST_NIRVANA_ID)
        .then((data) => {
          assert.deepStrictEqual(typeof data, "object");
        });
    });

    it('should return an object with matching id', () => {
      mbrainz.getDataArtist(TEST_NIRVANA_ID)
        .then((data) => {
          assert.deepStrictEqual(data.id, TEST_NIRVANA_ID);
        });
    });
  });
});
