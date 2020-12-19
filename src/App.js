import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, "Adopt Me!"),
  //     React.createElement(Pet, {
  //       name: "Lune",
  //       animal: "Dog",
  //       breed: "Labrador",
  //     }),
  //     React.createElement(Pet, {
  //       name: "Pepper",
  //       animal: "Bird",
  //       breed: "Cockatiel",
  //     }),
  //     React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
  //   ]);

  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Lune" animal="Dog" breed="Labrador" />
      <Pet name="Pepper" animal="Bird" breed="Cockateil" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
