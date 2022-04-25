function GetVideosWithFilter(setAllVideos, songs, categories) {
  function CheckError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const url = "https://api.celebrity-journey.com";
  let eventUrl = url + "/api/videos";

  let isSongs = false;
  if (songs.length > 0) {
    isSongs = true;
    eventUrl += "?songs=" + songs;
  }
  if (categories.length > 0) {
    eventUrl += isSongs
      ? "&categories=" + categories
      : "?categories=" + categories;
  }

  fetch(eventUrl, requestOptions)
    .then(CheckError)
    .then((data) => {
      setAllVideos(data.videos);
    })
    .catch((error) => {
      console.log("GetVideosWithFilter data error", error);
    });
}

export default GetVideosWithFilter;
