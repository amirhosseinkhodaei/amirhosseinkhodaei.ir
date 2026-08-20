import React, { useState, useEffect } from "react";

import { Char, getCharsMatrix, setCharsMatrix } from "./Char";

let charsMatrix = getCharsMatrix(31, 61);

charsMatrix[15][25] = <Char key={25} value="I" />;
charsMatrix[15][26] = <Char key={26} value="'" />;
charsMatrix[15][27] = <Char key={27} value="M" />;

charsMatrix[22][30] = <Char key={30} value="↓" />;

const values = [
  ["AMIRHOSSEIN"],
  ["A WEB", "DEVELOPER"],
  ["A FRONT-END", "  DEVELOPER"],
  ["A WORDPRESS", "  DESIGNER"],
  ["A FOOD", "  LOVER"],
];

const length = values.length;

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index < length - 1 ? index + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center">
      <div className="flex-col justify-center items-center">
        {setCharsMatrix(charsMatrix, values[index], 16, 18, 25, 50).map(
          (line, row) => (
            <div key={row} className="whitespace-nowrap">
              {line.map((char) => char)}
            </div>
          )
        )}
      </div>
    </div>
  );
};
