import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import { Bump } from "./components";
import * as api from "../../api";

export default function AboutMe() {
  return (
    <div>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Item>
          <h3>
            I&apos;m a software engineer passionate about technology and data
            science.
          </h3>
          <p>
            I have experience in .NET Core (on prem, cloud (Azure)) and
            Javascript (React / Node).
          </p>
          <p>
            My interests are: product development, sustainable software
            architecture, open source, serverless computing, IoT and data
            science.
          </p>
        </Item>
        <Item>
          <h2>Tech Stack</h2>
          <BumpContainer>
            <Bump.CustomBump data={api.fetchTechStack()} />
          </BumpContainer>
        </Item>
      </Stack>
    </div>
  );
};

const Item = ({ children }: { children: any }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  text-align: center;
  color: grey;
`;

const BumpContainer = styled.div`
  width: 40vw;
  height: 40vh;
`;
