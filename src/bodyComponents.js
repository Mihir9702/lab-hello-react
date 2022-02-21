import imageSRC from "./images";

const { wrench, youtube, gear, div } = imageSRC;

const Wrench = () => {
  return (
    <div className="individual-content-container">
      <img src={wrench} alt="wrench" />
      <h2>Declarative</h2>
      <p>
        React makes it <br /> painless to create <br /> interactive UIs.
      </p>
    </div>
  );
};

const Youtube = () => {
  return (
    <div className="individual-content-container">
      <img src={youtube} alt="youtube" />
      <h2>Components</h2>
      <p>
        Build encapsulated <br /> components that <br /> manage their state.
      </p>
    </div>
  );
};

const Gear = () => {
  return (
    <div className="individual-content-container">
      <img src={gear} alt="gear" />
      <h2>Single-Way</h2>
      <p>
        A set of immutable <br /> values are passed to <br /> the component's.
      </p>
    </div>
  );
};

const JSX = () => {
  return (
    <div className="individual-content-container">
      <img src={div} alt="jsx" />
      <h2>JSX</h2>
      <p>
        Statically-typed. <br /> designed to run on <br /> modern browsers
      </p>
    </div>
  );
};

export { Wrench, Youtube, Gear, JSX };
