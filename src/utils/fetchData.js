

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com' 
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '7dde0fa835mshde72aa46f3b6d86p1867fdjsn507f1568d657',
    },
  };

  export const fetchVideo = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

  export const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }; 

