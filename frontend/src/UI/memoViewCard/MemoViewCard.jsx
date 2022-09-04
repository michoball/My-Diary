import React from "react";
import { StarFill } from "react-bootstrap-icons";
import {
  MemoViewContainer,
  MemoContainer,
  MemoHeader,
} from "./MemoViewCard.styles";

const MemoViewCard = React.forwardRef(
  ({ title, date, color, major, children, ...otherProps }, ref) => {
    return (
      <MemoViewContainer>
        <MemoHeader major={major}>
          <h1>
            {title}
            <StarFill />
          </h1>

          <span className="date">작성일: {date}</span>
        </MemoHeader>
        <MemoContainer bgcolors={color} ref={ref} {...otherProps} />
        {children}
      </MemoViewContainer>
    );
  }
);

export default MemoViewCard;
