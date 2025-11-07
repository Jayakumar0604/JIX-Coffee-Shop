import Pic from "../../assets/Menu.jpg";

const MenuBack = ({ Pic, Title = "", About = "" }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 md:px-8 text-center "
      style={{ backgroundImage: `url(${Pic})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40  z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl md:py-30 lg:py-50 mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-6xl oswald-Bold uppercase mb-4">
          {Title}
        </h2>
        <p className="text-sm md:text-base text-gray-200">{About}</p>
      </div>
    </section>
  );
};

export default MenuBack;
