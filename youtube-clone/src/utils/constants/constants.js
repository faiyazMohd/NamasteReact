export const YOUTUBE_API_POPULAR_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

  export const YOUTUBE_API_CHANNEL_DETAILS = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CtopicDetails%2Cstatus%2CcontentDetails%2Clocalizations%2Cstatistics%2CtopicDetails%2CbrandingSettings%2CcontentOwnerDetails&id=UCnJjcn5FrgrOEp5_N45ZLEQ&key="+process.env.REACT_APP_GOOGLE_API_KEY;

  // export const YOUTUBE_API_SUGGESTIONS  ="https://corsproxy.io/http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="
  // export const YOUTUBE_API_SUGGESTIONS  ="https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q="
  export const YOUTUBE_API_SUGGESTIONS  ="https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&gl=IN&q="