import { defineStore } from "pinia";

export const useFeedsStore = defineStore('feeds', {
    state: () => ({
        "feeds":[],
        "total": 0,
        "readLater": 0
     }),
    actions: {
        getFeeds() {
        const returnAPI = {
            "feeds":[
               {
                  "link":"https://www.youtube.com/channel/UC4Xj6emHTXnKHUq8btUuN6A",
                  "title":"Retromation",
                  "url":"https://www.youtube.com/feeds/videos.xml?channel_id=UC4Xj6emHTXnKHUq8btUuN6A",
                  "feedUrl":"http://www.youtube.com/feeds/videos.xml?channel_id=UC4Xj6emHTXnKHUq8btUuN6A",
                  "id":"y3MAJqi0DAW9fsXIxl12",
                  "unreadCount":35
               },
               {
                  "paginationLinks":{
                     "self":"https://kotaku.com"
                  },
                  "language":"en",
                  "title":"Kotaku",
                  "link":"https://kotaku.com",
                  "feedUrl":"https://kotaku.com",
                  "description":"Gaming Reviews, News, Tips and More.",
                  "url":"https://kotaku.com/rss",
                  "id":"PlTwm5YFm3NgBuXBzVRC",
                  "unreadCount":365
               },
               {
                  "title":"Polygon -  All",
                  "url":"https://www.polygon.com/rss/index.xml",
                  "lastBuildDate":"2022-11-30T18:26:26-05:00",
                  "link":"https://www.polygon.com/",
                  "id":"02v49MGstdBkWY0CqCXY",
                  "unreadCount":419
               },
               {
                  "title":"Parool: Voorpagina",
                  "url":"https://www.parool.nl/voorpagina/rss.xml",
                  "pubDate":"Fri, 28 Oct 2022 22:05:51 GMT",
                  "image":{
                     "title":"Parool: Voorpagina",
                     "url":"https://www.parool.nl/static/apple-touch-icon-144x144.png",
                     "link":"https://www.parool.nl/voorpagina",
                     "height":"144",
                     "width":"144"
                  },
                  "lastBuildDate":"Thu, 01 Dec 2022 13:29:04 GMT",
                  "description":"Actueel nieuws, speciale aandacht voor cultuur, culinair en Amsterdam.",
                  "language":"nl-NL",
                  "copyright":"De Persgroep Publishing Nederland NV",
                  "link":"https://www.parool.nl/voorpagina",
                  "id":"scKwXEIjs2x9a8z1Mhv1",
                  "unreadCount":731
               }
            ],
            "total":1550,
            "readLater":0
         }
         
         this.feeds = returnAPI.feeds;
         this.totalFeeds = returnAPI.total;
         this.readLater = returnAPI.readLater;
    }
}
});