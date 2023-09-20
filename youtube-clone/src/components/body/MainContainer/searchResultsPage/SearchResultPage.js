import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ShimmerVideoCard from "../videosContainer/ShimmerVideoCard";
import RecommendationVideoCard from "../watchPage/desktopWatchPage/RecommendationVideoCard";
import ChannelCard from "./ChannelCard";
import PlaylistCard from "./PlaylistCard";
import FilterIcon from "../../../../assets/icons/svgs/SvgComponents/FilterIcon";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchResults, setSearchResults] = useState(null);
  const locationCode = useSelector((store) => store.app.locationCode);
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const showSidebar = useSelector((store) => store.app.showSidebar);

  console.log(searchQuery);
  console.log(searchResults);
  useEffect(() => {
    getSearchResults();
    // setTimeout(() => {
    //   setSearchResults([
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "4VOYecwFH5q3u2D7S86GTzkMhpI",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-18T02:47:42Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Namaste 🙏 JavaScript",
    //         description:
    //           "Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-18T02:47:42Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "42XKwxPcpkX1jL0BZut7zC4Kpqw",
    //       id: {
    //         kind: "youtube#channel",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //       },
    //       snippet: {
    //         publishedAt: "2019-01-31T03:06:23Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Akshay Saini",
    //         description:
    //           "I'm Akshay Saini, working as an Engineer at Uber. Apart from that, I create videos on this channel to help people with Interview ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://yt3.ggpht.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s88-c-k-c0xffffffff-no-rj-mo",
    //           },
    //           medium: {
    //             url: "https://yt3.ggpht.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s240-c-k-c0xffffffff-no-rj-mo",
    //           },
    //           high: {
    //             url: "https://yt3.ggpht.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s800-c-k-c0xffffffff-no-rj-mo",
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-01-31T03:06:23Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "-VzWAF5t7BW4aykSwI0RP7NkhLs",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID",
    //       },
    //       snippet: {
    //         publishedAt: "2023-08-21T15:23:51Z",
    //         channelId: "UCn3ibYKeobpI0m8IIfna_RA",
    //         title: "Namaste Javascript(S01+S02)",
    //         description: "Created with YouTube Copier by @labnol.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Shahil Singh",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-08-21T15:23:51Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "QwfeHw3vA0gW34Vb2Hi9PLzcIkk",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PL3vAqatJ039MXa74chXsZl_xFb4cSuchP",
    //       },
    //       snippet: {
    //         publishedAt: "2021-11-04T06:00:35Z",
    //         channelId: "UCyZBwQyCYKw3SpyxLcIJgFQ",
    //         title: "namaste javascript",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "ShashAnk shekhar",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-11-04T06:00:35Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "ZYap-eDWPMXOXl8tD3oFPYchrLo",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "pN6jk0uUrD8",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-18T08:33:52Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini",
    //         description:
    //           "Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-18T08:33:52Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "T36hgXczXE8-OweWwsnhXTDE57g",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "yEKtJGha3yM",
    //       },
    //       snippet: {
    //         publishedAt: "2022-08-18T14:03:06Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Callback Hell | Ep  01 Season 02 - Namaste JavaScript",
    //         description:
    //           "Callback Hell is one of the issues we face while writing Asynchronous code in JavaScript. Another problem that we face is ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/yEKtJGha3yM/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/yEKtJGha3yM/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/yEKtJGha3yM/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-08-18T14:03:06Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Vj8ArvwAfn7xxg80KwtGiBg-8f8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "ap-6PPAuK1Y",
    //       },
    //       snippet: {
    //         publishedAt: "2022-10-08T15:44:08Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Promises | Ep 02  Season 02 - Namaste JavaScript",
    //         description:
    //           "Promises is the new way of handling asynchronous operations in JavaScript. This episode of Namaste JavaScript Season 2 will ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/ap-6PPAuK1Y/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/ap-6PPAuK1Y/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/ap-6PPAuK1Y/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-10-08T15:44:08Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "BYSOz8BnvLygNGh0yjg7FelVNCk",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "ZvbzSrg0afE",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-19T11:52:56Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "How JavaScript Works 🔥&amp; Execution Context | Namaste JavaScript Ep.1",
    //         description:
    //           "Understanding how JavaScript works behind the scenes, inside the JS Engine will make you a better developer. This video covers ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/ZvbzSrg0afE/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/ZvbzSrg0afE/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-19T11:52:56Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "RVWhhfgNqfTQrm-d3LgalMPBt9I",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PL0rxPh2ovQP_JTqkFUtaZzBXzppx-VSWn",
    //       },
    //       snippet: {
    //         publishedAt: "2021-10-14T20:18:02Z",
    //         channelId: "UC-T3YfX5f0CQ7cp2TsRubLA",
    //         title: "JavaScript apna college playlist",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/B7wHpNUUT4Y/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Bhautik Kakadiya",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-10-14T20:18:02Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Dul6ySc2ZM96Gwq2GEYRwLXG5nM",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLlasXeu85E9eLVlWFs-nz5PKXJU4f7Fks",
    //       },
    //       snippet: {
    //         publishedAt: "2019-02-03T10:35:20Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Core Javascript Fundamentals",
    //         description:
    //           "Covering all important concepts of Javascript and understand how JS actually works under the hood. These are really very ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/ke_y6z0xRpk/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/ke_y6z0xRpk/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/ke_y6z0xRpk/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-02-03T10:35:20Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "26E3cyP_omwAWohC5YX91IO1-a0",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "zdp0zrpKzIE",
    //       },
    //       snippet: {
    //         publishedAt: "2021-07-21T04:30:12Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "map, filter &amp; reduce 🙏 Namaste JavaScript Ep. 19 🔥",
    //         description:
    //           "Map, filter & reduce Array functions are the most popular Higher-Order Functions in JavaScript. This episode covers map(), filter() ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/zdp0zrpKzIE/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/zdp0zrpKzIE/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/zdp0zrpKzIE/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-07-21T04:30:12Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "JX5pJ8eATWauMLXDm3Ie9dr3DOE",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "6nv3qy3oNkc",
    //       },
    //       snippet: {
    //         publishedAt: "2023-09-15T05:59:52Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "async await | Namaste JavaScript - Season 02 - Ep 04",
    //         description:
    //           "Wanna dive deep into React JS with me? Checkout Namaste React - https://namastedev.com/namaste-react Running heavy ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/6nv3qy3oNkc/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/6nv3qy3oNkc/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/6nv3qy3oNkc/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-09-15T05:59:52Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Q3uHfOlLn1WkbSA8FcJGtivzA1c",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "UyXHO2J5aig",
    //       },
    //       snippet: {
    //         publishedAt: "2022-06-17T12:53:26Z",
    //         channelId: "UCKyTTBdDH3I635HQMrPvz_A",
    //         title:
    //           "@akshaymarch7 on Projects you should Make ! Namaste Javascript",
    //         description:
    //           "projects #frontenddeveloper #sde #akshaysaini #javascript.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/UyXHO2J5aig/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/UyXHO2J5aig/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/UyXHO2J5aig/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Riddhi Dutta",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-06-17T12:53:26Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "m8nrMriogsQMJ_S7OWb9zekqEv4",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "j8fubBAFq_I",
    //       },
    //       snippet: {
    //         publishedAt: "2021-06-23T15:28:35Z",
    //         channelId: "UCBwmMxybNva6P_5VmxjzwqA",
    //         title:
    //           "Javascript - First Program Namaste World | Lecture 2 | Web Development Course",
    //         description:
    //           "Code of this Lecture - https://github.com/yashrajbothra/web-dev-js/tree/main/lec-2 Java Placement Placement Course ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/j8fubBAFq_I/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/j8fubBAFq_I/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/j8fubBAFq_I/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Apna College",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-06-23T15:28:35Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "7WJ3iBLu7R5i7104IrVa6v4V8WM",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "chx9Rs41W6g",
    //       },
    //       snippet: {
    //         publishedAt: "2021-10-09T03:30:03Z",
    //         channelId: "UCrkQMtWNtuq-1j0q8c2RVeQ",
    //         title:
    //           "JavaScript |  Beginning to Mastery Complete Tutorial (Part 1)",
    //         description:
    //           "Complete modern javascript/es6 tutorial in Hindi (2021) Source code ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/chx9Rs41W6g/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/chx9Rs41W6g/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/chx9Rs41W6g/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Harshit vashisth",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-10-09T03:30:03Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "rI-7NEDNospOUy9Y71Ts8H-XDbw",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "8zKuNo4ay8E",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-27T03:38:05Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "Asynchronous JavaScript &amp; EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15",
    //         description:
    //           "In-depth explanation of Event Loop, Web APIs, MicroTask Callback Queue, and how JavaScript works asynchronously in the web ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/8zKuNo4ay8E/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/8zKuNo4ay8E/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/8zKuNo4ay8E/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-27T03:38:05Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "HeCH1Tc2B-rt8FJoYg1VWyXDjgA",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "Fnlnw8uY6jo",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-21T08:12:18Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "Hoisting in JavaScript 🔥(variables &amp; functions) | Namaste JavaScript Ep. 3",
    //         description:
    //           "Hoisting in JavaScript is the most famous Interview Question. And it is also one of the most misunderstood concepts in JS.",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/Fnlnw8uY6jo/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/Fnlnw8uY6jo/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/Fnlnw8uY6jo/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-21T08:12:18Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "IOGm9suzw3K5jcmo92n3jf2q1_w",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "gSDncyuGw0s",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-22T08:34:13Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "How functions work in JS ❤️ &amp; Variable Environment | Namaste JavaScript Ep. 4",
    //         description:
    //           "Understand how Functions work behind the scenes in JavaScript.What happens when a function is executed/invoked inside the ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/gSDncyuGw0s/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/gSDncyuGw0s/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/gSDncyuGw0s/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-22T08:34:13Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "xpuDUhsCpCDiYC1deWHnXYp76fg",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "qikxEIxsXco",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-01T05:45:14Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "Closures in JS 🔥 | Namaste JavaScript Episode 10",
    //         description:
    //           "Closures in JavaScript is the most important topic for interviews. Even many senior frontend developers don't understand this ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/qikxEIxsXco/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/qikxEIxsXco/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/qikxEIxsXco/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-01T05:45:14Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "lqXbkEHpnz21mxr5D2107FrUc5M",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "KGkiIBTq0y0",
    //       },
    //       snippet: {
    //         publishedAt: "2021-01-12T04:30:03Z",
    //         channelId: "UCwfaAHy4zQUb2APNOGXUCCA",
    //         title: "🔴 Complete JavaScript Tutorial in Hindi in 2023",
    //         description:
    //           "Welcome, to Complete JavaScript Tutorial for Beginners in Hindi in 2023. We will cover Basic to Advanced JavaScript, Modern ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/KGkiIBTq0y0/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/KGkiIBTq0y0/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/KGkiIBTq0y0/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Thapa Technical",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-01-12T04:30:03Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "UV2ZG5CrZfDuqWfLS-eooLkQCj0",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "75W8UPQ5l7k",
    //       },
    //       snippet: {
    //         publishedAt: "2019-02-04T14:48:21Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title: "call, apply and bind method in JavaScript",
    //         description:
    //           "This video explains the famous call, apply and bind methods of Javascript step by step in details. These functions are frequently ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/75W8UPQ5l7k/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/75W8UPQ5l7k/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/75W8UPQ5l7k/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-02-04T14:48:21Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "qP3ouj9yR8R0h0rsNPBsU2htDGc",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "uH-tVP8MUs8",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-27T09:22:43Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "The Scope Chain, 🔥Scope &amp; Lexical Environment | Namaste JavaScript Ep. 7",
    //         description:
    //           "Diving deep into Scope, Lexical Environment, and The Scope Chain in JavaScript with a lot of code examples and visuals. This is ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/uH-tVP8MUs8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/uH-tVP8MUs8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/uH-tVP8MUs8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-27T09:22:43Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "wisy-m3pbQPU7WiGEOu1ij9L6-U",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "iLWTnMzWtj4",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-20T09:11:14Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "How JavaScript Code is executed? ❤️&amp; Call Stack | Namaste JavaScript Ep. 2",
    //         description:
    //           "Understand how the code is executed in JavaScript. How an Execution Context is created and how the Call Stack works. Behind ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/iLWTnMzWtj4/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/iLWTnMzWtj4/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/iLWTnMzWtj4/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-20T09:11:14Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Spvl5fWZ6RjYwD54Voq23XZBPIs",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "lW_erSjyMeM",
    //       },
    //       snippet: {
    //         publishedAt: "2020-11-08T07:44:04Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "BLOCK SCOPE &amp; Shadowing in JS 🔥| Namaste JavaScript 🙏 Ep. 9",
    //         description:
    //           "Let & const Block Scope in-depth tutorial covers what is a Block, Scope, and Block Scope in JavaScript. With live code examples ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/lW_erSjyMeM/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/lW_erSjyMeM/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/lW_erSjyMeM/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-11-08T07:44:04Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "eJ3V7WnVEWKzICR3UHOQ_wIsv9Y",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "QCRpVw2KXf8",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-23T08:03:46Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "SHORTEST JS Program 🔥window &amp; this keyword | Namaste JavaScript Ep. 5",
    //         description:
    //           "Let's check out the Shortest Program in JavaScript and more about the window and this keyword. Understand how the Global ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/QCRpVw2KXf8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/QCRpVw2KXf8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/QCRpVw2KXf8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-23T08:03:46Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "NA7VXbUHXPelaEf8BT0HhUZ7Yv0",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "BNC6slYCj50",
    //       },
    //       snippet: {
    //         publishedAt: "2020-11-05T07:07:04Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "let &amp; const in JS 🔥Temporal Dead Zone | | Namaste JavaScript Ep. 8",
    //         description:
    //           "let & const in JavaScript behave differently when they are Hoisted. Understanding the difference between var, let and const in JS ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/BNC6slYCj50/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/BNC6slYCj50/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/BNC6slYCj50/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-11-05T07:07:04Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "G6EzhyE_c6RFxzgnUn8ZaWjF_MQ",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "t8OC41i0ggY",
    //       },
    //       snippet: {
    //         publishedAt: "2023-07-21T12:30:27Z",
    //         channelId: "UCHIbErciyS3Hs0kjAz-at5Q",
    //         title:
    //           "How I Would Learn JavaScript FAST in 2023 &amp; 2024 🚀 Learn How to Become a JavaScript Developer🔥",
    //         description:
    //           "Do you want to know what you need to know to become a JavaScript Developer in 2023-2024 Then you are on a correct path ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/t8OC41i0ggY/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/t8OC41i0ggY/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/t8OC41i0ggY/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Technical Suneja",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-07-21T12:30:27Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "nwfeOVklLB_PxNYnMj7z96ScIf8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "btj35dh3_U8",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-20T04:25:36Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "Callback Functions in JS ft. Event Listeners 🔥| Namaste JavaScript Ep. 14",
    //         description:
    //           "What are Callback Functions in JavaScript? How does Event Listeners work? What does Blocking the Main thread means?",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/btj35dh3_U8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/btj35dh3_U8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/btj35dh3_U8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-20T04:25:36Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "SBT_fc808rc57CD7yvuiKpAY2uc",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "SHINoHxvTso",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-15T05:37:32Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions | Namaste JavaScript Ep. 13",
    //         description:
    //           "Functions in JS are first-class Citizens, what does that mean? What is the difference between Function Statements and Function ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/SHINoHxvTso/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/SHINoHxvTso/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/SHINoHxvTso/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-15T05:37:32Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "eWOY4PLJoEqQH2AFPm2x_6ZHPio",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "B7iF6G3EyIk",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-24T06:59:10Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "undefined vs not defined in JS 🤔 | Namaste JavaScript Ep. 6",
    //         description:
    //           "undefined is a special keyword in JavaScript and `undefined !== not defined`. JS is a loosely typed language (weakly typed ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/B7iF6G3EyIk/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/B7iF6G3EyIk/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/B7iF6G3EyIk/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-24T06:59:10Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "tr9Ws2MdNhRrtz4KnzHBTU7v9o8",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "t1nFAMws5FI",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-11T05:30:02Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "CRAZY JS INTERVIEW 🤯ft. Closures | Namaste 🙏 JavaScript Ep. 12",
    //         description:
    //           "A JavaScript Interview covering in-depth QnA of closures, Data Hiding, Encapsulation, Function Constructors, Garbage Collector, ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/t1nFAMws5FI/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/t1nFAMws5FI/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/t1nFAMws5FI/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-11T05:30:02Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "cDSH2_tYDKaWKTssGhorWdpUu7c",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "CBKVj19da-I",
    //       },
    //       snippet: {
    //         publishedAt: "2022-12-15T09:15:12Z",
    //         channelId: "UCade9h3MwGMIsW4sF5Cdt3Q",
    //         title: "Akshay Saini Namaste javascript series is a gem",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/CBKVj19da-I/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/CBKVj19da-I/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/CBKVj19da-I/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Coder in Process",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-12-15T09:15:12Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "MBsMWq-9wOXo3pdROqIhjqx9mfQ",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "eBTBG4nda2A",
    //       },
    //       snippet: {
    //         publishedAt: "2020-12-07T14:30:02Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11",
    //         description:
    //           "Check out the most frequently asked (setTimeout + Closures in a loop) hot trending JS Interview question. This question will ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/eBTBG4nda2A/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/eBTBG4nda2A/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/eBTBG4nda2A/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-12-07T14:30:02Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "cz_J3e0roB3FRosVgvItdMkhLHc",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "2WJL19wDH68",
    //       },
    //       snippet: {
    //         publishedAt: "2021-01-10T13:27:01Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "JS Engine EXPOSED 🔥 Google&#39;s V8 Architecture 🚀 | Namaste JavaScript Ep. 16",
    //         description:
    //           "In-depth explanation of JS Engine Architecture, JavaScript Runtime Environment, JIT compilation, Syntax Parsers, Garbage ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/2WJL19wDH68/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/2WJL19wDH68/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/2WJL19wDH68/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-01-10T13:27:01Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "dtcEu90BGx_C2DTn89UxPuVJC6k",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "Y_r-51IzfGk",
    //       },
    //       snippet: {
    //         publishedAt: "2021-08-20T14:17:25Z",
    //         channelId: "UCeVMnSShP_Iviwkknt83cww",
    //         title: "How much JavaScript is needed to learn React?",
    //         description:
    //           "How much Javascript to learn for react. Can you learn react along with Javascript? This video will answer all these questions!",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/Y_r-51IzfGk/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/Y_r-51IzfGk/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/Y_r-51IzfGk/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "CodeWithHarry",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-08-20T14:17:25Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "Ymhi1t8jTDnXzDELY5DSWmiawIs",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "1N6TBcdeKUw",
    //       },
    //       snippet: {
    //         publishedAt: "2023-03-31T07:07:38Z",
    //         channelId: "UCM0wPbc7CKOivMkuHKczRLQ",
    //         title: "Namaste React Course Review",
    //         description:
    //           "In this video I shared my full experience about Namaste React Course. Course instructor is Akshay Saini. This is one of the best ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/1N6TBcdeKUw/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/1N6TBcdeKUw/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/1N6TBcdeKUw/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Geeky Gopal",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-03-31T07:07:38Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "zaG0k6xamvUCOtZp5PVI1Q4P0cs",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "lGmRnu--iU8",
    //       },
    //       snippet: {
    //         publishedAt: "2023-03-30T11:55:03Z",
    //         channelId: "UCmIu_lfYrSnfnNhH6kmcG2Q",
    //         title: "Complete JavaScript Course + Notes for Beginners in Hindi",
    //         description:
    //           "Complete JavaScript Video Course + Notes (Slides) + Exercise for Beginners #javascript Course Page ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/lGmRnu--iU8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/lGmRnu--iU8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/lGmRnu--iU8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Coder Dost",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-03-30T11:55:03Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "6oRjDXnFGoYM09jy8mBI-ls1IQ4",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "3sSGmA1ZjD8",
    //       },
    //       snippet: {
    //         publishedAt: "2022-10-18T05:47:13Z",
    //         channelId: "UCXiFvBv-DKqGdB8Oaz5fJ1A",
    //         title:
    //           "How to get hired as Frontend Developer in 2022 ft. @akshaymarch7 | Learn Web Development| Anshika",
    //         description:
    //           "Hey everyone, In this video I am talking to @akshaymarch7 and we are discussing about resources to become frontend developer ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/3sSGmA1ZjD8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/3sSGmA1ZjD8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/3sSGmA1ZjD8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Anshika Gupta",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-10-18T05:47:13Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "rkCdSDAQXJycRKgivb5bWwTzsdw",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "wstwjQ1yqWQ",
    //       },
    //       snippet: {
    //         publishedAt: "2019-03-30T15:31:00Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "Prototype and Prototypal Inheritance in Javascript | Frontend Interview Question",
    //         description:
    //           "What is Prototype? - What is Prototypal Inheritance? - What is Prototype Chain? - Why we call it __proto__ ? - What is inhertance ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/wstwjQ1yqWQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/wstwjQ1yqWQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/wstwjQ1yqWQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-03-30T15:31:00Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "aMl8zy8au1NsKCyengSKBcCC0rQ",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PL8p2I9GklV47BCAjiCtuV_liN9IwAl8pM",
    //       },
    //       snippet: {
    //         publishedAt: "2020-10-22T17:31:11Z",
    //         channelId: "UCvHX2bCZG2m9ddUhwxudKYA",
    //         title: "React tutorial for beginners in Hindi",
    //         description:
    //           "React tutorial series for beginners in the Hindi language here you will get full Hindi tutorial of reactjs in Hindi, as well as this ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/9Tz2tY-ZEwQ/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/9Tz2tY-ZEwQ/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/9Tz2tY-ZEwQ/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Code Step By Step",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-10-22T17:31:11Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "61V67y3y4sYB17bdqhuCQokyAko",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
    //       },
    //       snippet: {
    //         publishedAt: "2022-07-14T12:51:40Z",
    //         channelId: "UCeVMnSShP_Iviwkknt83cww",
    //         title: "JavaScript Tutorials for Beginners in Hindi",
    //         description:
    //           "JavaScript Course in Hindi: This Javascript tutorial in Hindi course is designed for beginners with an aim to take JavaScript/ES6 ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/ER9SspLe4Hg/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "CodeWithHarry",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-07-14T12:51:40Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "h0Fy1RxnDCXuj8g3zOrWu7Bgey0",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLXQpH_kZIxTWQfh_krE4sI_8etq5rH_z6",
    //       },
    //       snippet: {
    //         publishedAt: "2022-03-20T09:16:51Z",
    //         channelId: "UCo9xTRmg1SqQ5JSsA2fAgJw",
    //         title: "OOP - Javascript",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/FgXFoSr2Db8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/FgXFoSr2Db8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/FgXFoSr2Db8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Coder's Gyan",
    //         liveBroadcastContent: "none",
    //         publishTime: "2022-03-20T09:16:51Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "cAoOqrKUn3b-1VnKd9jaYZwUyjQ",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "9iELB1VzZWA",
    //       },
    //       snippet: {
    //         publishedAt: "2019-03-05T03:30:00Z",
    //         channelId: "UC3N9i_KvKZYP4F84FPIzgPQ",
    //         title:
    //           "How much DS should I study for Web Developer Interviews? | QnA Series",
    //         description:
    //           "How much Data Structures is required for Web Developers? Where should I study Data Structures? Tips for answering Data ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/9iELB1VzZWA/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/9iELB1VzZWA/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/9iELB1VzZWA/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Akshay Saini",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-03-05T03:30:00Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "dZ4sbjkuisDsDYF-t1U3q6xxcFQ",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
    //       },
    //       snippet: {
    //         publishedAt: "2019-12-25T08:11:38Z",
    //         channelId: "UCeVMnSShP_Iviwkknt83cww",
    //         title:
    //           "Web Development Tutorials For Beginners In Hindi: HTML, CSS, JavaScript &amp; More",
    //         description:
    //           "This Website development course will teach you about how to create a website from scratch. This web development course is ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/6mbwJ2xhgzM/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/6mbwJ2xhgzM/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "CodeWithHarry",
    //         liveBroadcastContent: "none",
    //         publishTime: "2019-12-25T08:11:38Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "sULOfajSLbR_qXOnp_TZX2edABI",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "92bkNXvnpmg",
    //       },
    //       snippet: {
    //         publishedAt: "2023-06-25T12:15:00Z",
    //         channelId: "UCWX0cUR2rZcqKei1Vstww-A",
    //         title:
    //           "How Much HTML, CSS, &amp; JavaScript Is Enough In 2023 | Setting Realistic Expectations",
    //         description:
    //           "Remote jobs newsletter - https://indiaremotejobs.substack.com/ In this video, I talk about what should you learn if you're searching ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/92bkNXvnpmg/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/92bkNXvnpmg/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/92bkNXvnpmg/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Harkirat Singh",
    //         liveBroadcastContent: "none",
    //         publishTime: "2023-06-25T12:15:00Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "xp87htFkTUFcSpJbRfvRbgSmTmA",
    //       id: {
    //         kind: "youtube#video",
    //         videoId: "1kUoOLZ0g6g",
    //       },
    //       snippet: {
    //         publishedAt: "2021-05-31T03:30:00Z",
    //         channelId: "UCWCGvAu1NDCldmLasELk62g",
    //         title:
    //           "🎯 Complete JavaScript Tutorial In Hindi for Beginners With Projects [ Part-1 ] | JS Tutorial in 2023",
    //         description:
    //           "Javascript #Tutorial #Hindi Important Tutorial Link --------------------------------------------- JavaScript for Beginners Part-2: ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Tech Gun",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-05-31T03:30:00Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "wLQQVuSGdpGFJmjZBEk2hM01_Hg",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLwGdqUZWnOp3ZgLj8upMGSRSC1ezBfEZs",
    //       },
    //       snippet: {
    //         publishedAt: "2018-02-16T04:13:32Z",
    //         channelId: "UCwfaAHy4zQUb2APNOGXUCCA",
    //         title: "AJAX tutorial for beginners in Hindi",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/44-D08_d-c8/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/44-D08_d-c8/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/44-D08_d-c8/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Thapa Technical",
    //         liveBroadcastContent: "none",
    //         publishTime: "2018-02-16T04:13:32Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "zC7kneNEsSLJTINY_JWOHCXOdug",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PL0b6OzIxLPbzvz4j1N4J8zCY8mu3l29MG",
    //       },
    //       snippet: {
    //         publishedAt: "2021-01-03T08:43:23Z",
    //         channelId: "UCuT0rj__qEq_ZO3kYwun4Qg",
    //         title: "Advance JavaScript Tutorial in Hindi / Urdu",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/IUFJzLlf2cE/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/IUFJzLlf2cE/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/IUFJzLlf2cE/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Yahoo Baba",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-01-03T08:43:23Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "SAvjF8k5J1k2opa6MGmHh5Sx_Qs",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLsyeobzWxl7rrvgG7MLNIMSTzVCDZZcT4",
    //       },
    //       snippet: {
    //         publishedAt: "2021-05-04T16:07:12Z",
    //         channelId: "UC59K-uG2A5ogwIrHw4bmlEg",
    //         title: "JavaScript Tutorial for Beginners",
    //         description: "",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/PlbupGCBV6w/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/PlbupGCBV6w/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/PlbupGCBV6w/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Telusko",
    //         liveBroadcastContent: "none",
    //         publishTime: "2021-05-04T16:07:12Z",
    //       },
    //     },
    //     {
    //       kind: "youtube#searchResult",
    //       etag: "2FaYNilX9H3w1lYrzaBmgmqhTas",
    //       id: {
    //         kind: "youtube#playlist",
    //         playlistId: "PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD",
    //       },
    //       snippet: {
    //         publishedAt: "2020-07-03T11:51:11Z",
    //         channelId: "UCXgGY0wkgOzynnHvSEVmE3A",
    //         title: "Javascript course",
    //         description:
    //           "A NOTE: New youtube studio is having this bug to duplicate scheduled videos. Happened with my last Vue JS series too. I will fix it ...",
    //         thumbnails: {
    //           default: {
    //             url: "https://i.ytimg.com/vi/2md4HQNRqJA/default.jpg",
    //             width: 120,
    //             height: 90,
    //           },
    //           medium: {
    //             url: "https://i.ytimg.com/vi/2md4HQNRqJA/mqdefault.jpg",
    //             width: 320,
    //             height: 180,
    //           },
    //           high: {
    //             url: "https://i.ytimg.com/vi/2md4HQNRqJA/hqdefault.jpg",
    //             width: 480,
    //             height: 360,
    //           },
    //         },
    //         channelTitle: "Hitesh Choudhary",
    //         liveBroadcastContent: "none",
    //         publishTime: "2020-07-03T11:51:11Z",
    //       },
    //     },
    //   ]);
    // }, 500);
  }, [searchQuery]);
  const getSearchResults = async (query) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=&maxResults=50&videoDuration=any&q=${searchQuery}&regionCode=${locationCode}&key=` +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const json = await data.json();
    setSearchResults(json?.items);
    console.log(json);
  };
  return (
    <div
      className={` pt-16 pb-16 w-full ${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      }   ${showSidebar ? "xl:w-[82%]" : ""}  `}
    >
      <div className="w-full md:w-[900px]  lg:w-[1024px] xl:w-[1144px]  m-auto flex flex-col items-center ">
        <div className="filterBtnContai w-full md:w-full  lg:w-[1024px] xl:w-[1096px] ">
          <div
            className={` ${
              darkTheme
                ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                : " hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
            } cursor-pointer rounded-full  p-2   h-9 w-[92px] flex justify-center items-center`}
          >
            <div className="flex items-center justify-center gap-2">
              <FilterIcon color={darkTheme ? "#fff" : "#000"} />
              <span className="text-sm font-medium">Filters</span>
            </div>
          </div>
        </div>
        {!searchResults || searchResults?.error
          ? Array(12)
              .fill("")
              .map((shimmerCard, index) => {
                return <ShimmerVideoCard key={index} />;
              })
          : searchResults?.map((item, index) => {
              if (item?.id?.kind === "youtube#playlist") {
                return <PlaylistCard key={item?.id} item={item} />;
              } else if (item?.id?.kind === "youtube#channel") {
                return <ChannelCard key={item?.id} item={item} />;
              } else if (item?.id?.kind === "youtube#video") {
                return <RecommendationVideoCard key={item?.id} item={item} />;
              }
            })}
      </div>
    </div>
  );
};
export default SearchResultPage;
