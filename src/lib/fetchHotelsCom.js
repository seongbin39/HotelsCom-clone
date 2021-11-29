const fetchHotelsCom = async (url) => {
  try{
    return await fetch(url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "hotels-com-provider.p.rapidapi.com",
        "x-rapidapi-key": "6f3b9ff14cmshdb79aa1424d7046p1a1919jsna9f277c9ed2e"
      }
    }).then(res => res.json())
  }catch(e){
    return e
  }
}

export default fetchHotelsCom