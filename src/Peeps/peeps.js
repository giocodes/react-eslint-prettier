import React from 'react';
let sing = arg => console.log(arg);
let myPeeps = {
  name: 'Gin&Tonic',
};

const myComponent = props => {
  return (
    <div
      data-a={1}
      data-b={1}
      data-c={1}
      data-a1={1}
      data-b1={1}
      data-c1={1}
      data-a2={1}
      data-b2={1}
      data-c2={1}
    >
      Hello! {myPeeps.name}
    </div>
  );
};
