const API_URL = "YOUR_API_URL";
let home_Data;

// Get home page
const homePage = async () => {
  try {
    if (home_Data) return home_Data;
    const res = await fetch(`${API_URL}/home`);
    const data = await res.json();
    home_Data = data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get Genre wise anime
const genre = async (props) => {
  try {
    const res = await fetch(`${API}/genre/${props.name}`);
    const data = await res.json();
    genre_Data = data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get movies
const movie = async (props) => {
  try {
    const res = await fetch(`${API}/movie?page=${props.page}`);
    const data = await res.json();
    movie_Data = data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get anime info
const getAnime = async (props) => {
  try {
    const res = await fetch(`${API_URL}/info?id=${props.id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get Total Anime Episodes
const getEpisode = async (props) => {
  try {
    const res = await fetch(`${API_URL}/episodes/${props.ID}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

// Search Anime
const getSearch = async (props) => {
  try {
    const res = await fetch(`${API_URL}/search?q=${props.query}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get a particular episode
const getLink = async (props) => {
  try {
    const res = await fetch(
      `${API_URL}/episode-srcs?id=${props.ID.episodeId}&server=vidstreaming&category=sub`
    );
    // check weather if the res.status is 500 then return an error message
    if (res.status === 500) {
      return { error: "Server Error" };
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export { homePage, genre, movie, getAnime, getEpisode, getSearch, getLink };
