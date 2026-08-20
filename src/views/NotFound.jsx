import React from "react";
import { Link } from "react-router-dom";

import { Char, getCharsMatrix } from "../components/Char";

let charsMatrix = getCharsMatrix(7, 9);

charsMatrix[2][3] = <Char key={3} value="4" />;
charsMatrix[2][4] = <Char key={4} value="0" />;
charsMatrix[2][5] = <Char key={5} value="4" />;

charsMatrix[3][3] = <Char key={3} value="N" />;
charsMatrix[3][4] = <Char key={4} value="O" />;
charsMatrix[3][5] = <Char key={5} value="T" />;

charsMatrix[4][2] = <Char key={2} value="F" />;
charsMatrix[4][3] = <Char key={3} value="O" />;
charsMatrix[4][4] = <Char key={4} value="U" />;
charsMatrix[4][5] = <Char key={5} value="N" />;
charsMatrix[4][6] = <Char key={6} value="D" />;

export const NotFound = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <Link to="/" title="Let's Go Home!">
        <div className="flex-col justify-center items-center">
          {charsMatrix.map((line, row) => (
            <div key={row}>{line.map((char) => char)}</div>
          ))}
        </div>
      </Link>
    </div>
  );
};
