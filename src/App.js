import React from "react";
import styled, { css } from "styled-components";
import Header from "./components/ui/Header";
import Routes from "./components/routes/Routes";
import AppStateProvider from "./stores/AppState";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyles";

const layout = css``;

function App({ className }) {
  return (
    <AppStateProvider>
      <GlobalStyle />
      <Router>
        <div className={className}>
          <Header />
          <Routes />
        </div>
      </Router>
    </AppStateProvider>
  );
}

export default styled(App)`
  ${layout}
`;
