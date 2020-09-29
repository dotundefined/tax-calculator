import { useState, useEffect } from "react";
import { getCountryInfo } from "utils/geoNamesApi";

function setDefaultLocale() {
  return (
    navigator.userLanguage ||
    navigator.language ||
    navigator.browserLanguage ||
    navigator.systemLanguage ||
    "bs"
  );
}

export const useNumberFormat = () => {
  const [position, setPosition] = useState({});
  const [local, setLocal] = useState(setDefaultLocale());

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (_position) => {
          setPosition({
            lat: _position.coords.latitude,
            lng: _position.coords.longitude,
          });
        },
        () => {
          console.log("User don't want to share position ");
        }
      );
    } else {
      console.log("Using an old browser that doesn't support geolocation");
    }
  }, []);

  useEffect(()=>{
    getCountryInfo(position).then(({languages}) => {
      languages && setLocal(languages.split(",")[0]);
    })
  }, [position]);

  console.log(local);
  
  return { formatNumberOutput(number) {
    return new Intl.NumberFormat(local).format(number);
  }};
};