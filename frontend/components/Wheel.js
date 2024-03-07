// import React from 'react'


// export default function Wheel(props) {
//   return (
//     <div id="wrapper">
//       <div id="wheel">
//         <div className="cog active" style={{ "--i": 0 }}>B</div>
//         <div className="cog" style={{ "--i": 1 }}></div>
//         <div className="cog" style={{ "--i": 2 }}></div>
//         <div className="cog" style={{ "--i": 3 }}></div>
//         <div className="cog" style={{ "--i": 4 }}></div>
//         <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
//       </div>
//       <div id="keypad">
//         <button id="counterClockwiseBtn" >Counter clockwise</button>
//         <button id="clockwiseBtn">Clockwise</button>
//       </div>
//     </div>
//   )
// }

import React from 'react';

export default function Wheel(props) {
  const numberOfCogs = 6; // Define the number of cogs you want

  // Create an array of numbers from 0 to numberOfCogs - 1
  const cogs = Array.from({ length: numberOfCogs }, (_, index) => index);

  return (
    <div id="wrapper">
      <div id="wheel">
        {cogs.map((index) => (
          <div key={index} className={`cog${index === 0 ? ' active' : ''}`} style={{ '--i': index }}>
            B
          </div>
        ))}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn">Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  );
}

