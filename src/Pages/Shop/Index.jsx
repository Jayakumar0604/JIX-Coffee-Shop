import React from "react";
import Back from "../../assets/Shop.jpg";
import SBackground from "../../Components/SBackground/Index";
import BeenSubscription from "./BeenSubscription";
import BrewingGuid from "./BrewingGuid";
import Grind from "../../Components/Grind/Index";
import MenuItems from "../../Components/MenuItems/Index";

const Shop = () => {
  return (
    <>
      <SBackground
        title="Shop"
        text="Take the Jix experience home! Shop our finest coffee beans, brewing gear, and unique merchandise. Everything you need to craft your perfect cup is just a click away!"
        image={Back}
      />
      <MenuItems />
      <BeenSubscription />
      <BrewingGuid />
      <Grind />
    </>
  );
};

export default Shop;
