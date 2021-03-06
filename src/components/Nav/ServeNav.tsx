/** @jsxImportSource @emotion/react */

import { css, Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function ServeNav() {
  const { name } = useParams();
  const navigate = useNavigate();
  function onClickRestaurant() {
    if (name) {
      navigate(`/detail/${name}`);
    }
    navigate(-1);
  }
  return (
    <div css={nav}>
      <ul>
        <li css={button} onClick={onClickRestaurant}>
          Restaurant
        </li>
        <Link to="/faq">
          <li css={button}>FAQ</li>
        </Link>
        <Link to="/">
          <li css={button}>Home</li>
        </Link>
      </ul>
    </div>
  );
}

export default ServeNav;

const nav = (theme: Theme) => css`
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 20px 30px 20px;
`;

const button = (theme: Theme) => css`
  margin-right: 30px;
  ${theme.mediaQuery.mobile} {
    font-size: 0.95rem;
  }
`;
