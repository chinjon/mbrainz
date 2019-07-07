require('mocha');
const assert = require('assert');

const mbrainz = require('./../main');

const testVariablesArtist = {
  artist: {
    name: 'Nirvana'
  },
  id: '5b11f4ce-a62d-471e-81fc-a69a8278c7da'
}

const testVariablesRecording = {
  track: {
    title: 'A Private Understanding'
  },
  id: '564c681d-b1bc-4953-91f2-4f052aac4f58'
}

const testVariablesLabel = {
  label: {
    name: "Warp"
  },
  id: '46f0f4cd-8aab-4b33-b698-f459faf64190'
}

describe('main', () => {
  
  describe('getDataArtist()', () => {

    it('should return an object', async () => {
      await mbrainz.getDataArtist(testVariablesArtist.id)
        .then((artistData) => {
          assert.deepStrictEqual(typeof artistData, "object");
        });
    });

    it('should return an object with matching id', async () => {
     await mbrainz.getDataArtist(testVariablesArtist.id)
        .then((artistData) => {
          assert.deepStrictEqual(artistData.id, testVariablesArtist.id);
        });
    });

    it('should return an object with correct artist name', async () => {
      await mbrainz.getDataArtist(testVariablesArtist.id)
        .then((artistData) => {
          assert.deepStrictEqual(artistData.name, testVariablesArtist.artist.name);
        });
    });
  });

  describe('getDataLabel()', () => {

    it('should return an object', async () => {
      await mbrainz.getDataLabel(testVariablesLabel.id)
        .then((labelData) => {
          assert.deepStrictEqual(typeof labelData, "object")
        });
    });

    it('should return an object with matching id', async () => {
      await mbrainz.getDataLabel(testVariablesLabel.id)
        .then((labelData) => {
          assert.deepStrictEqual(labelData.id, testVariablesLabel.id)
        });
    });

    it('should return an object with correct label name', async () => {
      await mbrainz.getDataLabel(testVariablesLabel.id)
        .then((labelData) => {
          assert.deepStrictEqual(labelData.name, testVariablesLabel.label.name);
        });
    });
  });
    
  describe('getDataRecording()', () => {

    it('should return an object', async () => {
      await mbrainz.getDataRecording(testVariablesRecording.id)
      .then((data) => {
        assert.deepStrictEqual(typeof data, 'object');
      });
    });

    it('should return an object with matching id', async () => {
      await mbrainz.getDataRecording(testVariablesRecording.id)
        .then((data) => {
          assert.deepStrictEqual(data.id, testVariablesRecording.id);
        });
    });

    it('should return an object with matching title', async () => {
     await mbrainz.getDataRecording(testVariablesRecording.id)
        .then((data) => {
          assert.deepStrictEqual(data.title, testVariablesRecording.track.title);
        });
    });
  });

});
