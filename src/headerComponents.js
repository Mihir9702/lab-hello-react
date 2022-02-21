import imageSRC from "./images";

const HeaderImg = () => {
  const { logo, menu } = imageSRC;
  return (
    <div>
      <img src={logo} alt="logo" className="logoImage" />
      <img src={menu} alt="menu" className="menuImage" />
    </div>
  );
};

const HeaderText = () => {
  return (
    <div className="header">
      <h1>
        Say hello to <br /> ReactJS
      </h1>
      <p>
        You will learn how to use <br /> the most popular frontend library,
        <br /> and become a super Ninja Developer.
      </p>
      <button>Awesome!</button>
    </div>
  );
};

export { HeaderImg, HeaderText };
