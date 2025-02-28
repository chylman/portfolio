import styled from "styled-components";
import {font} from "../../../../styles/Common";

const AboutCard = styled.div`
    display: grid;
    grid-template-columns: minmax(220px, auto) minmax(100px, 2fr) minmax(160px, auto);
    gap: 12px 24px;

    padding: 0 0 24px;
    border-bottom: 2px solid ${({theme}) => theme.colors.border};

    @media ${({theme}) => theme.media.tablet} {
        grid-template-columns: minmax(220px, auto) minmax(100px, auto);
        gap: 8px 12px;
    }

    @media ${({theme}) => theme.media.mobile} {
        grid-template-columns: minmax(100px, auto) minmax(60px, auto);
    }

`

const Position = styled.div`
    grid-column: 1 / span 2;
    color: ${({theme}) => theme.colors.textSmall};

    ${font({weight: 400, Fmax: 20, Fmin: 16})};
    letter-spacing: 0.05em;

    @media ${({theme}) => theme.media.tablet} {
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
    background-color: ${({theme}) => theme.colors.plateBg};

    color: ${({theme}) => theme.colors.plateText};
    ${font({weight: 600, Fmax: 9, Fmin: 7})};
`

const Company = styled.div`
    display: flex;
    //align-items: center;
    column-gap: 8px;
    color: ${({theme}) => theme.colors.textSecond};
    ${font({weight: 500, Fmax: 12, Fmin: 10})}
    letter-spacing: 0.08em;
`

const Location = styled.div`
    display: flex;
    //align-items: center;
    column-gap: 8px;
    color: ${({theme}) => theme.colors.textSecond};
    ${font({weight: 500, Fmax: 12, Fmin: 10})}
    letter-spacing: 0.08em;

    @media ${({theme}) => theme.media.tablet} {
        grid-row: 3 / 4;
    }
`

const TimePeriod = styled.div`
    justify-self: end;

    display: flex;
    //align-items: center;
    column-gap: 8px;
    color: ${({theme}) => theme.colors.textSecond};
    ${font({weight: 500, Fmax: 12, Fmin: 10})};

    @media ${({theme}) => theme.media.tablet} {
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
