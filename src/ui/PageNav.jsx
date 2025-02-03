import React from "react";
import HeadphoneCard from "../features/headphones/HeadphoneCard";
import SpeakerCard from "../features/speakers/SpeakerCard";
import EarphoneCard from "../features/earphones/EarphoneCard";

function PageNav() {
  return (
    <ul className="flex flex-col gap-16 sm:flex-row sm:gap-4">
      <HeadphoneCard />
      <SpeakerCard />
      <EarphoneCard />
    </ul>
  );
}

export default PageNav;
