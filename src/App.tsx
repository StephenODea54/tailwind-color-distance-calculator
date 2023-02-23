import React, { Fragment, useState } from 'react';

// Components
import { Main } from './components/layout/Main';
import { Section } from './components/layout/Section';
import { Heading } from "./components/typography/Heading";
import { Card } from "./components/card/Card";
import { SubHeading } from './components/typography/SubHeading';
import { Input } from "./components/inputs/Input";
import { ColorBox } from "./components/ColorBox";
import { CardContainer } from './components/card/CardContainer';

// Utils
import { createColorsArray } from "./utils/createColorsArr";
import { calculateSimilariy } from './utils/calculateSimilarity';
import { determineValidHex } from './utils/determineValidHex';

const colorsArr = createColorsArray();

const App = () => {
  const [colorInput, setColorInput] = useState("");
  const [colorsCalcArr, setColorsCalcArr] = useState(colorsArr);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorInput(e.target.value);
    const newColorArr = colorsCalcArr.map(el => Object.assign({ }, el));

    newColorArr.forEach(color => {
      color.distanceCalculation = calculateSimilariy(color.hexValue, e.target.value);
    });

    const arrSorted = newColorArr.sort((a, b) => a.distanceCalculation - b.distanceCalculation);

    setColorsCalcArr(arrSorted);
  };

  return (
    <Main>
      <Heading>
        TailwindCSS Color Similarity
      </Heading>
      <Section>
        <Card>
          <SubHeading>Input</SubHeading>
          <CardContainer>
            <Input
              label="HEX Value"
              onChange={(e => handleChange(e))}
              readOnly={false}
              value={""}
            />
            <ColorBox backgroundColor={determineValidHex(colorInput) ? colorInput : ""} />
          </CardContainer>
        </Card>
        <Card>
          <SubHeading>Color Similarity Ranking</SubHeading>
          {
            !determineValidHex(colorInput) ?

            <Fragment>
              Awaiting 6 character hex input.......
            </Fragment> :

            colorsCalcArr.slice(0, 10).map(color => (
              <CardContainer key={color.color}>
                <Input
                  label={color.color}
                  readOnly={true}
                  value={color.hexValue}
                />
                <ColorBox backgroundColor={color.hexValue} />
              </CardContainer>
            ))}
        </Card>
      </Section>
    </Main>
  );
};

export default App;
