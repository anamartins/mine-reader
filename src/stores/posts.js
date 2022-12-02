import { defineStore } from "pinia";

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        total: 0,

    }),
    actions: {
        getPosts() {
            const returnAPI = {
                "total":1786,
                "items":[
                   {
                      "guid":"88dd710",
                      "link":"https://www.parool.nl/uit-in-amsterdam/amsterdam-light-festival-is-weer-begonnen-5-kunstwerken-die-je-moet-zien~b88dd710/",
                      "pubDate":"Fri, 02 Dec 2022 08:20:00 GMT",
                      "content":"",
                      "title":"De 5 mooiste werken van het  Amsterdam Light Festival 2022",
                      "isRead":false,
                      "isReadLater":false,
                      "contentSnippet":"",
                      "feed":{
                         "title":"Parool: Voorpagina",
                         "id":"scKwXEIjs2x9a8z1Mhv1"
                      },
                      "isoDate":"2022-12-02T08:20:00.000Z",
                      "tags":[
                         
                      ],
                      "media:content":[
                         {
                            "$":{
                               "url":"https://images0.persgroep.net/rcs/_CDnfki7xGIWl6z7zHbsN9-jXW4/diocontent/224763560/_crop/1089/1090/2720/2720/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85",
                               "type":"image/jpeg"
                            },
                            "media:thumbnail":[
                               {
                                  "$":{
                                     "url":"https://images0.persgroep.net/rcs/_CDnfki7xGIWl6z7zHbsN9-jXW4/diocontent/224763560/_crop/1089/1090/2720/2720/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85"
                                  }
                               }
                            ]
                         }
                      ],
                      "feedId":"scKwXEIjs2x9a8z1Mhv1",
                      "id":"iY0u5cDlh7OsRFowuBaR"
                   },
                   {
                      "tags":[
                         
                      ],
                      "media:content":[
                         {
                            "media:thumbnail":[
                               {
                                  "$":{
                                     "url":"https://images0.persgroep.net/rcs/NpglJ_74XG3Oc775MIIr3n3gd1Q/diocontent/224027276/_focus/0.5/0.5/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85"
                                  }
                               }
                            ],
                            "$":{
                               "type":"image/jpeg",
                               "url":"https://images0.persgroep.net/rcs/NpglJ_74XG3Oc775MIIr3n3gd1Q/diocontent/224027276/_focus/0.5/0.5/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85"
                            }
                         }
                      ],
                      "pubDate":"Fri, 02 Dec 2022 07:05:29 GMT",
                      "content":"",
                      "feedId":"scKwXEIjs2x9a8z1Mhv1",
                      "link":"https://www.parool.nl/nederland/ouderwetse-zwarte-piet-sterft-langzaam-uit~bea63ab7/",
                      "feed":{
                         "id":"scKwXEIjs2x9a8z1Mhv1",
                         "title":"Parool: Voorpagina"
                      },
                      "isoDate":"2022-12-02T07:05:29.000Z",
                      "isRead":false,
                      "isReadLater":false,
                      "title":"'Ouderwetse Zwarte Piet sterft langzaam uit'",
                      "guid":"ea63ab7",
                      "contentSnippet":"",
                      "id":"L15TvK90OXibzIfZaPoa"
                   },
                   {
                      "pubDate":"Fri, 02 Dec 2022 06:54:16 GMT",
                      "feedId":"scKwXEIjs2x9a8z1Mhv1",
                      "content":"",
                      "isRead":false,
                      "media:content":[
                         {
                            "media:thumbnail":[
                               {
                                  "$":{
                                     "url":"https://images0.persgroep.net/rcs/XyKaT0yVDJbBC04cZ3gCEwBSwzA/diocontent/224793973/_focus/0.5/0.5/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85"
                                  }
                               }
                            ],
                            "$":{
                               "url":"https://images0.persgroep.net/rcs/XyKaT0yVDJbBC04cZ3gCEwBSwzA/diocontent/224793973/_focus/0.5/0.5/_fill/320/320?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.85",
                               "type":"image/jpeg"
                            }
                         }
                      ],
                      "feed":{
                         "title":"Parool: Voorpagina",
                         "id":"scKwXEIjs2x9a8z1Mhv1"
                      },
                      "isReadLater":false,
                      "tags":[
                         
                      ],
                      "contentSnippet":"",
                      "title":"Twitter schorst account Kanye 'Ye' West na posten foto hakenkruis",
                      "link":"https://www.parool.nl/wereld/twitter-schorst-account-kanye-ye-west-na-posten-foto-hakenkruis~bea96448/",
                      "isoDate":"2022-12-02T06:54:16.000Z",
                      "guid":"ea96448",
                      "id":"axeIrB6TNbNvRt1yaIbT"
                   },
                   {
                      "contentSnippet":"Image: Firaxis Games/2K Games via Johnny Yu for Polygon\n    \n\n  \nForge friendships off the battlefield to help you on your missions\nContinue reading...",
                      "id":"vixTwOITBwkRCPk4GkOM",
                      "isoDate":"2022-12-02T05:01:00.000Z",
                      "isRead":false,
                      "title":"How to increase friendship level in Marvel's Midnights Suns",
                      "link":"https://www.polygon.com/guides/23477190/friendship-hangouts-gifts-clubs-havens-passive-combo-ability-abbey-compliment-team",
                      "author":"Johnny Yu",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "isReadLater":false,
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "feed":{
                         "title":"Polygon -  All",
                         "id":"02v49MGstdBkWY0CqCXY"
                      },
                      "content":"  \n\n    <figure>\n      <img alt=\"Peter Parker and the Hunter in casual attire playing video games in the living room of the Abbey\" src=\"https://cdn.vox-cdn.com/thumbor/p7B1chA3JVgGtwXMOYyQ7vdc1fw=/0x0:1422x800/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699482/peterparkerhuntervideogames.0.png\" />\n        <figcaption>Image: Firaxis Games/2K Games via Johnny Yu for Polygon</figcaption>\n    </figure>\n\n  <p>Forge friendships off the battlefield to help you on your missions</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23477190/friendship-hangouts-gifts-clubs-havens-passive-combo-ability-abbey-compliment-team\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "tags":[
                         
                      ]
                   },
                   {
                      "id":"op9fFhXyIxdglMThe9xn",
                      "title":"The Callisto Protocol's best early-game weapon is easy to miss",
                      "content":"  \n\n    <figure>\n      <img alt=\"Jacob Lee inspects the Skunk shotgun in a screenshot from The Callisto Protocol\" src=\"https://cdn.vox-cdn.com/thumbor/bB_9axPWHjOuMQ3SBvobylt9oAI=/0x0:3840x2160/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699489/The_Callisto_Protocol__20221201174036.0.jpg\" />\n        <figcaption>Image: Striking Distance Studios/Krafton via Polygon</figcaption>\n    </figure>\n\n  <p>Here's where to find the Skunk Gun schematic</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23488501/callisto-protocol-skunk-gun-schematic-location-shotgun-best-gun\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "link":"https://www.polygon.com/guides/23488501/callisto-protocol-skunk-gun-schematic-location-shotgun-best-gun",
                      "isReadLater":false,
                      "tags":[
                         
                      ],
                      "feed":{
                         "title":"Polygon -  All",
                         "id":"02v49MGstdBkWY0CqCXY"
                      },
                      "isoDate":"2022-12-02T05:01:00.000Z",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "contentSnippet":"Image: Striking Distance Studios/Krafton via Polygon\n    \n\n  \nHere's where to find the Skunk Gun schematic\nContinue reading...",
                      "author":"Diego Nicolás Argüello",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "isRead":false
                   },
                   {
                      "author":"Diego Nicolás Argüello",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "isoDate":"2022-12-02T05:01:00.000Z",
                      "isRead":false,
                      "content":"  \n\n    <figure>\n      <img alt=\"A mutated human tries to eat an engineer in The Callisto Protocol.\" src=\"https://cdn.vox-cdn.com/thumbor/jFen57mVLo6j4u9zkFBW8NdtWkM=/0x0:1920x1080/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699491/callisto_protocol_ewwwwwww.0.jpg\" />\n        <figcaption>Image: Striking Distance/Krafton</figcaption>\n    </figure>\n\n  <p>Go ahead and spend those Callisto Credits (smartly)</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23488152/callisto-protocol-best-upgrades-perks-skills-grp-baton-health-ammo-weapon\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "title":"What you should upgrade first in The Callisto Protocol",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "id":"o92Rd4xFfluTVqJi1enH",
                      "isReadLater":false,
                      "contentSnippet":"Image: Striking Distance/Krafton\n    \n\n  \nGo ahead and spend those Callisto Credits (smartly)\nContinue reading...",
                      "feed":{
                         "title":"Polygon -  All",
                         "id":"02v49MGstdBkWY0CqCXY"
                      },
                      "link":"https://www.polygon.com/guides/23488152/callisto-protocol-best-upgrades-perks-skills-grp-baton-health-ammo-weapon",
                      "tags":[
                         
                      ]
                   },
                   {
                      "id":"juMVvduzrZu3oIssUjS5",
                      "tags":[
                         
                      ],
                      "link":"https://www.polygon.com/guides/23473610/tips-tricks-beginners-guide-heroes-abbey-hunter-friendship-heroism",
                      "title":"10 things to know before starting Marvel's Midnight Suns",
                      "content":"  \n\n    <figure>\n      <img alt=\"Doctor Strange, Iron Man, and the Scarlet Witch standing menacingly showing their strength with their abilities out.\" src=\"https://cdn.vox-cdn.com/thumbor/EVoIu1GRY_dZyLr1Q4mC9c70I7o=/0x0:1920x1080/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699479/midnightsunslede.0.jpg\" />\n        <figcaption>Image: Firaxis Games/2K Games</figcaption>\n    </figure>\n\n  <p>Plan ahead with the support of Earth's most powerful heroes</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23473610/tips-tricks-beginners-guide-heroes-abbey-hunter-friendship-heroism\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "contentSnippet":"Image: Firaxis Games/2K Games\n    \n\n  \nPlan ahead with the support of Earth's most powerful heroes\nContinue reading...",
                      "isReadLater":false,
                      "isoDate":"2022-12-02T05:01:00.000Z",
                      "isRead":false,
                      "author":"Johnny Yu",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "feed":{
                         "title":"Polygon -  All",
                         "id":"02v49MGstdBkWY0CqCXY"
                      }
                   },
                   {
                      "content":"  \n\n    <figure>\n      <img alt=\"Gothic castle on the edge of a cliff surrounded by woods\" src=\"https://cdn.vox-cdn.com/thumbor/veJzOC9-NCj3AK8Gild5fqt5BA8=/205x0:1716x850/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699484/abbeyday.0.png\" />\n        <figcaption>Image: Firaxis Games/2K Games</figcaption>\n    </figure>\n\n  <p>The Hunter's HQ is way more than just a social space</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23486793/marvels-midnight-suns-abbey-mystery-words-of-power-friendship-forge-yard-central\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "contentSnippet":"Image: Firaxis Games/2K Games\n    \n\n  \nThe Hunter's HQ is way more than just a social space\nContinue reading...",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "author":"Johnny Yu",
                      "title":"Why it's worth exploring the Abbey in Marvel's Midnight Suns",
                      "link":"https://www.polygon.com/guides/23486793/marvels-midnight-suns-abbey-mystery-words-of-power-friendship-forge-yard-central",
                      "isRead":false,
                      "tags":[
                         
                      ],
                      "id":"cIvINk2TZtPUkrk2Rgvx",
                      "feed":{
                         "id":"02v49MGstdBkWY0CqCXY",
                         "title":"Polygon -  All"
                      },
                      "isReadLater":false,
                      "isoDate":"2022-12-02T05:01:00.000Z"
                   },
                   {
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "tags":[
                         
                      ],
                      "title":"Every hero in Marvel's Midnight Suns and what they do",
                      "isRead":false,
                      "link":"https://www.polygon.com/guides/23477195/marvels-midnight-suns-full-hero-list-hunter-iron-man-captain-america-wolverine-spider-man-blade",
                      "content":"  \n\n    <figure>\n      <img alt=\"12 of Marvel's Midnight Suns heroes walking in their matching black and yellow/gold uniforms in front of the forge.\" src=\"https://cdn.vox-cdn.com/thumbor/3AwggsNS-kLmMQMihnm9-yVpPnM=/0x0:1248x702/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699486/marvelmidnightsunheroes.0.jpg\" />\n        <figcaption>Image: Firaxis Games/2K</figcaption>\n    </figure>\n\n  <p>Learn more about the heroes and who they pair well with</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23477195/marvels-midnight-suns-full-hero-list-hunter-iron-man-captain-america-wolverine-spider-man-blade\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "contentSnippet":"Image: Firaxis Games/2K\n    \n\n  \nLearn more about the heroes and who they pair well with\nContinue reading...",
                      "isReadLater":false,
                      "feed":{
                         "id":"02v49MGstdBkWY0CqCXY",
                         "title":"Polygon -  All"
                      },
                      "author":"Johnny Yu",
                      "id":"B6TcWdBv2GpjrohkH95k",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "isoDate":"2022-12-02T05:01:00.000Z"
                   },
                   {
                      "id":"AG9Rq4wsMmg3Xh11DM1j",
                      "contentSnippet":"Image: Striking Distance/Krafton via Polygon\n    \n\n  \nYes, you can check your GRP level\nContinue reading...",
                      "isRead":false,
                      "feed":{
                         "title":"Polygon -  All",
                         "id":"02v49MGstdBkWY0CqCXY"
                      },
                      "author":"Diego Nicolás Argüello",
                      "pubDate":"2022-12-02T05:01:00.000Z",
                      "isReadLater":false,
                      "link":"https://www.polygon.com/guides/23488001/callisto-protocol-beginners-tips-tricks-loot-grp-level",
                      "content":"  \n\n    <figure>\n      <img alt=\"An engineer in a space suit walks through a frozen morass covered in corpses in The Callisto Protocol.\" src=\"https://cdn.vox-cdn.com/thumbor/eAU3XMA_qPPuAEVEkkRGQKIYcPo=/0x0:1920x1080/640x360/cdn.vox-cdn.com/uploads/chorus_image/image/71699477/callisto_protocol_beginner_s_guide.0.jpg\" />\n        <figcaption>Image: Striking Distance/Krafton via Polygon</figcaption>\n    </figure>\n\n  <p>Yes, you can check your GRP level</p>\n  <p>\n    <a href=\"https://www.polygon.com/guides/23488001/callisto-protocol-beginners-tips-tricks-loot-grp-level\">Continue reading&hellip;</a>\n  </p>\n\n",
                      "isoDate":"2022-12-02T05:01:00.000Z",
                      "title":"9 things you should know before starting The Callisto Protocol",
                      "feedId":"02v49MGstdBkWY0CqCXY",
                      "tags":[
                         
                      ]
                   }
                ],
                "next":"http://localhost:8080/stream?showAll=false&startAfter=2022-12-02T05%3A01%3A00.000Z"
             }

             this.posts = returnAPI.items;
             this.total = returnAPI.total;
        }
    }

});