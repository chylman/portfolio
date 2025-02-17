import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Works = styled.section`
  position: relative;
  padding: 100px 0;
  background-color: ${theme.colors.primaryBg};

  .works-menu {
    margin: 0 0 50px 0;

    @media ${theme.media.tablet} {
      margin: 0 0 30px 0;
    }
    @media ${theme.media.mobile} {
      margin: 0 0 15px 0;
    }
  }

  .works-text {
    margin-bottom: 50px;

    @media ${theme.media.tablet} {
      margin-bottom: 30px;
    }
    @media ${theme.media.mobile} {
      margin-bottom: 15px;
    }
  }

  ${FlexWrapper} {
    @media ${theme.media.tablet} {
      gap: 40px 30px;
    }

    @media ${theme.media.mobile} {
      gap: 20px 30px;
    }
  }

  @media ${theme.media.tablet} {
    padding: 50px 0;
  }
  @media ${theme.media.mobile} {
    padding: 20px 0;
  }
`

export const S = {
    Works,
}
