function getUrl(lat, lng){
  return `http://api.geonames.org/countryCodeJSON?formatted=true&lat=${lat}&lng=${lng}&username=emirKaric&style=full`;
}

export async function getCountryInfo({lat, lng}){
  const result = await fetch(getUrl(lat, lng));
  
  const data = await result.json();

  return data;
} 