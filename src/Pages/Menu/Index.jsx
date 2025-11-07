import React from "react";
import MenuBack from "../../Components/MenuBack/Index";
import Pic from "../../assets/Menu.jpg";
import Back from "../../assets/MenuBack.jpg";
import CoffeeMenu from "./CoffeeMenu";
import FMenu from "./FMenu";
import Snacks from "../../Components/Snacks/Index";

const Menu = () => {
  return (
    <>
      <MenuBack
        Pic={Pic}
        Title="DRINK MENU"
        About="Explore our full range of exceptional coffee. From perfectly pulled
          espresso and velvety lattes crafted with quality milk, to refreshing
          cold brews and unique seasonal specials. We have your perfect cup
          ready—hot or iced, every time."
      />
      <CoffeeMenu />
      <MenuBack
        Pic={Back}
        Title="Food Menu"
        About="Complement your coffee with our freshly baked pastries, including flaky croissants and fudgy brownies. We also offer light bites and treats, using high-quality ingredients to make your visit complete and delicious."
      />
      <FMenu />
      <Snacks  />
    </>
  );
};

export default Menu;
