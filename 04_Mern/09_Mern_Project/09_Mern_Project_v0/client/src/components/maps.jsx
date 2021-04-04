

import React, { useEffect, useRef } from "react";

export const Map = ({ options, onMount, className }) => {
  const props = { ref: useRef(), className };
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options);
    onMount && onMount(map);
  };

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`);
      script.type = `text/javascript`;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`;
      const headScript = document.getElementsByTagName(`script`)[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  });

  return (
    <div
      {...props}
      style={{ height: `100vh`, margin: `1em 0`, borderRadius: `0.5em` }}
    />
  );
};

Map.defaultProps = {
  options: {
    center: {lat:37.550201, lng:-121.980827},
    zoom: 10
  }
};
