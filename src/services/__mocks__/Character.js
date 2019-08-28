export default {
  list:
    {
      code: 200,
      status: 'Ok',
      copyright: '© 2019 MARVEL',
      attributionText: 'Data provided by Marvel. © 2019 MARVEL',
      attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
      etag: '',
      data: {
        offset: 0,
        limit: 9,
        total: 1492,
        count: 9,
        results: [
          {
            id: 1011334,
            name: '3-D Man',
            description: '',
            modified: '2014-04-29T14:18:17-0400',
            thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784', extension: 'jpg' },
            resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
            comics: {
              available: 12,
              collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
                  name: 'Avengers: The Initiative (2007) #14'
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
                  name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)'
                }
              ],
              returned: 3
            },
            stories: {
              available: 2,
              collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/stories',
              items: [
                { resourceURI: 'http://gateway.marvel.com/v1/public/stories/26280', name: 'X-Men: Alpha (1994) #1', type: 'cover' },
                { resourceURI: 'http://gateway.marvel.com/v1/public/stories/38448', name: 'X-Facts', type: '' }],
              returned: 2
            },
            events: {
              available: 1,
              collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010903/events',
              items: [
                { resourceURI: 'http://gateway.marvel.com/v1/public/events/227', name: 'Age of Apocalypse' }
              ],
              returned: 1
            },
            urls: [
              {
                type: 'detail',
                url: 'http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=8ecc5418daf0a0088acf67ed14bf9649'
              },
              {
                type: 'wiki',
                url: 'http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=8ecc5418daf0a0088acf67ed14bf9649'
              }
            ]
          }
        ]
      }
    }
}
