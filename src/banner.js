import { HeaderText, HeaderImg } from "./headerComponents";

const Banner = () => {
  return <Header />;
};

const Header = () => {
  return (
    <header className="banner">
      <HeaderImg />
      <HeaderText />
    </header>
  );
};

export default Banner;
