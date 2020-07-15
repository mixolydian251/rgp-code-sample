import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../style/theme";
import { pxToRem } from "../../style/styleUtils";

const layout = css`
  height: 60px;
  background: ${theme.primary700};
  color: ${theme.white};

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 0 16px;

  .rgp {
    color: ${theme.primary100};
    font-size: ${pxToRem(32)};
    font-weight: bold;
  }

  .riority {
    font-size: ${pxToRem(32)};
  }

  .list {
    font-size: ${pxToRem(24)};
    margin-left: 2px;
  }

  .navigation-links {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    a {
      font-size: ${pxToRem(20)};
      line-height: 60px;
      color: white;
      text-decoration: none;
      padding: 20px;
    }
  }
`;

const Header = ({ className }) => {
  return (
    <nav className={className}>
      <div>
        <span className="rgp">RGP</span>
        <span className="riority">riority</span>
        <span className="list">List</span>
      </div>
      <ul className="navigation-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create </Link>
        </li>
      </ul>
    </nav>
  );
};

export default styled(Header)`
  ${layout}
`;
