# mbrainz

## Background

A project to use as a wrapper for the Musicbrainz API. This is recommended to be used with another API that leverages Musicbrainz ID such as the Last.fm API. Musicbrainz is a metadata service that is opensource and independent of restrictive music databases such as the Compact Disc Database.

The MusicBrainz API will only return data if a valid MusicBrainz ID value has been inputted. This API does not leverage search queries. 

### Links

- [MusicBrainz Website](https://musicbrainz.org/)
- [MusicBrainz Wikipedia](https://en.wikipedia.org/wiki/MusicBrainz)
- [MusicBrainz API Documentation](https://wiki.musicbrainz.org/Development/JSON_Web_Service)

***

## Development

```
1. Run: git clone "https://github.com/chinjon/mbrainz.git"
2. CD into mbrainz
3. Run: npm install
```

## Testing

```
1. Run `npm run test` in project root.
```

***

## Usage

NOTE, MusicBrainz does not accept search queries. The valid MusicBrainz ID number must be known, which can be obtained via an API such as LastFM.

**Searching for artist data**

```js
const mbrainz = require('mbrainz');
const NIRVANA_MBZ_ID = '5b11f4ce-a62d-471e-81fc-a69a8278c7da';

await mbrainz.getDataArtist(NIRVANA_MBZ_ID)
  .then((artistData) => {
   console.log(artistData);
  });

// RETURNS
/**
  {
    "id": "5b11f4ce-a62d-471e-81fc-a69a8278c7da",
    "name": "Nirvana",
    "sort-name": "Nirvana"
    "type": "Group",
    "country": "US",
    "disambiguation": "90s US grunge band",
    "life-span": {
        "ended": true,
        "begin": "1988-02",
        "end": "1994-04-05"
    },
    "aliases": [ { "name": "Nirvana US", "sort-name": "Nirvana US" } ]]
  }
 *  
```