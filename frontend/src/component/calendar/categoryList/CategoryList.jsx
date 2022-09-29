import { useState } from "react";
import { BookmarkCheckFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { selectLabel } from "../../../features/label/labelSlice";
import { deleteLabel, getLabels } from "../../../features/label/label.thunk";
import EventInput from "../eventInput/EventInput";
import {
  ListContainer,
  ListColor,
  ListItemContainer,
  DeleteBtn,
  ButtonContainer,
  ListInfoContainer,
  ListWrapper,
} from "./CategoryList.styles";

import { Trash } from "react-bootstrap-icons";

const CategoryList = ({ lists }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const openInputFormHandler = () => {
    dispatch(selectLabel(lists._id));
    setIsOpenModal(!isOpenModal);
  };

  const deleteLabelHandler = (e) => {
    e.stopPropagation();
    if (window.confirm("정말 제거하시겠습니까? ")) {
      dispatch(deleteLabel(lists._id));
    }
  };

  return (
    <>
      {isOpenModal && (
        <EventInput onConfirm={() => setIsOpenModal(!isOpenModal)} />
      )}
      <ListContainer>
        <ListWrapper>
          <ListItemContainer onClick={openInputFormHandler}>
            <ListColor>
              <BookmarkCheckFill color={lists.color} />
            </ListColor>
            <span>{lists.labelTitle}</span>

            <ListInfoContainer>
              <p>
                {lists.allDay && "종일"} {lists.daysOfWeek && "정기"}
              </p>
            </ListInfoContainer>
          </ListItemContainer>

          <DeleteBtn onClick={(e) => deleteLabelHandler(e)}>
            <Trash />
          </DeleteBtn>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default CategoryList;
