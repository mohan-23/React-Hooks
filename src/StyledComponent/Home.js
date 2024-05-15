import React from "react";
import { Heading, Para, Button, CustomButton } from "../StyledComponent/styles";

const Home = () => {
  return (
    <div>
      <center>
        <Heading color="red">Kandukoori Mohan</Heading>
        <Para>Hyderabad</Para>
        <Button type="button" outline={true}>
          Click
        </Button>
        <br />
        <br />
        <Button type="submit" onClick={() => alert("Clicked")} outline={false}>
          Click
        </Button>
        <br />
        <br />
        <CustomButton>Click</CustomButton>
      </center>
    </div>
  );
};

export default Home;
