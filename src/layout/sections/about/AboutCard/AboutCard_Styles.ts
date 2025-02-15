import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme";

const AboutCard = styled.div`
  display: grid;
  grid-template-columns: minmax(220px, auto) minmax(100px, 2fr) minmax(160px, auto);
  gap: 12px 24px;

  padding: 0 0 24px;
  border-bottom: 2px solid ${theme.colors.border};

  @media ${theme.media.tablet} {
    grid-template-columns: minmax(220px, auto) minmax(100px, auto);
  }

  @media ${theme.media.mobile} {
    grid-template-columns: minmax(100px, auto) minmax(60px, auto);
  }

`

const Position = styled.div`
  grid-column: 1 / span 2;
  ${font({color: theme.colors.textSmall, weight: 400, Fmax: 20, Fmin: 16})}
  letter-spacing: 0.05em;

  @media ${theme.media.tablet} {
    grid-column: 1 / 2;
  }
`

const FormatWork = styled.div`
  justify-self: end;
  align-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  padding: 0 21px 0 22px;
  border-radius: 100px;
  background-color: ${theme.colors.plateBg};
  ${font({color: theme.colors.plateText, weight: 600, Fmax: 9, Fmin: 7})}
`

const Company = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  ${font({color: theme.colors.textSecond, weight: 500, Fmax: 12, Fmin: 10})}
  letter-spacing: 0.08em;
`

const Location = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  ${font({color: theme.colors.textSecond, weight: 500, Fmax: 12, Fmin: 10})}
  letter-spacing: 0.08em;

  @media ${theme.media.tablet} {
    grid-row: 4 / 5;
  }
`

const TimePeriod = styled.div`
  justify-self: end;

  display: flex;
  align-items: center;
  column-gap: 8px;

  ${font({color: theme.colors.textSecond, weight: 500, Fmax: 12, Fmin: 10})};

  @media ${theme.media.tablet} {
    //grid-column: 3 / 4;
  }
`


export const S = {
    AboutCard,
    Position,
    FormatWork,
    Company,
    Location,
    TimePeriod,
}
