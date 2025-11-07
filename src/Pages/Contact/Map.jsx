import React from "react";

const Map = () => {
  return (
    <>
      <div class="relative w-full  h-100">
        <iframe
          src="https://maps.google.com/maps?q=Pudukkottai,%20Tamil%20Nadu,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          allowfullscreen=""
          class="absolute inset-0 w-full h-full border-0 grayscale"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
