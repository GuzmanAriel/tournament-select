import { useEffect, useRef, useState } from "react";

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const PlaceAutocompleteComponent = (props) => {

  const {setFieldValue} = props;
  const inputSearch = useRef(null);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    // ✅ Load Google Maps Places API dynamically
    const loadGoogleMaps = async () => {
      if (window.google && window.google.maps) {
        initializeAutocomplete();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = initializeAutocomplete;
      document.body.appendChild(script);
    };

    // ✅ Initialize PlaceAutocompleteElement
    const initializeAutocomplete = async () => {
      try {
        // @ts-ignore
        await window.google.maps.importLibrary("places");


        const searchBox = new window.google.maps.places.SearchBox(inputSearch.current);

        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          setFieldValue('location', places[0].name);
          if (places.length == 0) {
            return;
          }
        });    
      } catch (error) {
        console.error("Google Maps API failed to load:", error);
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <>
    {/* Container for Google Places input */}
    <input name="location" ref={inputSearch} className="form-control bg-transparent text-white"/>
    </>
      
  );
};

export default PlaceAutocompleteComponent;
