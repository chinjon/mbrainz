require('es6-promise').polyfill();
require('isomorphic-fetch');

const BASE_URL_MUSICBRAINZ = `https://musicbrainz.org/ws/2/`;


const setMusicbrainzSearchQuery = (musicbrainzId, lookupRequest) => {
  return `${BASE_URL_MUSICBRAINZ}${lookupRequest}/${musicbrainzId}?fmt=json`
}

const getDataArtist = async (musicbrainzId) => {
  try {
    const response = await fetch(setMusicbrainzSearchQuery(musicbrainzId,'artist'));
    const data = await response.json();
    return data ; 
  } catch (error) {
    throw error;
  }
}

module.exports = mbrainz =  {
  getDataArtist: getDataArtist
}