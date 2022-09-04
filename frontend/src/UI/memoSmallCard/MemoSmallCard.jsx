import React from "react";
import { StarFill } from "react-bootstrap-icons";

import { MemoContainer, MemoCardHeader } from "./MemoSmallCard.styles";

const MemoSmallCard = React.forwardRef(
  ({ color, major, title, ...otherProps }, memoRef) => {
    return (
      <>
        <MemoCardHeader major={major} {...otherProps}>
          <span>{title}</span>
          <StarFill />
        </MemoCardHeader>
        <MemoContainer ref={memoRef}></MemoContainer>
      </>
    );
  }
);

export default MemoSmallCard;
