import React from 'react';

export default function ({ name, animal, breed }) {
  // return React.createElement("div", {}, [
  //     React.createElement("h2", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed),
  // ]);

  return (
    <div>
      <h2>{name}</h2>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
