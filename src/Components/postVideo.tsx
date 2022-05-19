export default function PostVideo(
  dateEvent: string,
  videoId: string,
  category: string,
  songList: string,
  callback: Function
) {
  class songItem {
    song: string;
    constructor(song: string) {
      this.song = song;
    }
  }
  class AddVideo {
    dateEvent: string;
    videoId: string;
    category: string;
    songs: Array<songItem>;

    constructor(
      dateEvent: string,
      videoId: string,
      category: string,
      songs: Array<songItem>
    ) {
      this.dateEvent = dateEvent;
      this.videoId = videoId;
      this.category = category;
      this.songs = songs;
    }
  }

  const songSplit = songList.split(",");
  const songArray = songSplit.map((_) => new songItem(_));

  const newVideo = new AddVideo(dateEvent, videoId, category, songArray);

  //console.log("PutVideo newVideo", newVideo);

  // function CheckError(response) {
  //   console.log("response", response);
  //   if (response.status >= 200 && response.status <= 299) {
  //     return response;
  //   } else {
  //     console.log("response.text", response.text);
  //     response.text().then((text) => {
  //       throw Error(text);
  //     });
  //   }
  // }

  const url = "https://api.celebrity-journey.com";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newVideo),
  };

  const contactUrl = url + "/api/video";

  fetch(contactUrl, requestOptions)
    .then((response) => {
      response.text().then((text) => {
        //console.log("response.text", text);
        callback(text);
      });
    })
    .catch((error) => {
      //console.log("video add error", error);
      callback(error);
    });
}
