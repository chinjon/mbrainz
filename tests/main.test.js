require('mocha');
const assert = require('assert');

const mbrainz = require('./../main');

const TEST_NIRVANA_ID = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';
const TEST_A_PRIVATE_UNDERSTANDING_ID = '564c681d-b1bc-4953-91f2-4f052aac4f58';
const A_PRIVATE_UNDERSTANDING = 'A Private Understanding';

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
    
    describe('getDataRecording()', () => {
      it('should return an object', () => {
        mbrainz.getDataRecording(TEST_A_PRIVATE_UNDERSTANDING_ID)
        .then((data) => {
          assert.deepStrictEqual(typeof data, 'object');
        });
      });

      it('should return an object with matching id', () => {
        mbrainz.getDataRecording(TEST_A_PRIVATE_UNDERSTANDING_ID)
          .then((data) => {
            assert.deepStrictEqual(data.id, TEST_A_PRIVATE_UNDERSTANDING_ID);
          });
      });

      it('should return an object with matching title', () => {
        mbrainz.getDataRecording(TEST_A_PRIVATE_UNDERSTANDING_ID)
          .then((data) => {
            assert.deepStrictEqual(data.title, A_PRIVATE_UNDERSTANDING);
          });
      });
   });
});
