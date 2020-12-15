import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";
import { ExampleForm } from "./Form";

import {
  Journey,
  JourneyNav,
  JourneyContent,
  JourneyNavStep,
  JourneyStep
} from "./uikit";

import "./App.css";
import "./app/styles";

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  <MemoryRouter>
    <Journey>
      <JourneyNav>
        <JourneyNavStep step={0} title="Client Details" isActive />
        <JourneyNavStep step={1} title="Application Details" />
        <JourneyNavStep step={2} title="Summary" />
      </JourneyNav>
      <JourneyContent>
        <JourneyStep step={0} isActive>
          <ExampleForm />
        </JourneyStep>
        <JourneyStep step={1}>Step 2</JourneyStep>
        <JourneyStep step={2}>Step 3</JourneyStep>
      </JourneyContent>
    </Journey>
  </MemoryRouter>
);

export default App;
