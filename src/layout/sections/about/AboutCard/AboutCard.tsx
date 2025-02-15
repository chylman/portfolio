import React from "react";
import {S} from "./AboutCard_Styles";
import IconLocation from "../../../../assets/image/icons/location.svg";
import IconOffice from "../../../../assets/image/icons/office-building.svg";
import IconCalendar from "../../../../assets/image/icons/calendar.svg";

type AboutCardPropsType = {
    position: string
    formatWork: string
    company: string
    location: string
    timePeriod: string
}

export const AboutCard: React.FC<AboutCardPropsType> = (props: AboutCardPropsType) => {
    const {position, formatWork, company, location, timePeriod} = props;
    return (
        <S.AboutCard>
            <S.Position>{position}</S.Position>
            <S.FormatWork>{formatWork}</S.FormatWork>
            <S.Company>
                <IconOffice/>
                <span>{company}</span>
            </S.Company>
            <S.Location>
                <IconLocation/>
                <span>{location}</span>
            </S.Location>
            <S.TimePeriod>
                <IconCalendar/>
                <span>{timePeriod}</span>
            </S.TimePeriod>
        </S.AboutCard>
    );
};
