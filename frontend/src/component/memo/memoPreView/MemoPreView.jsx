import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemo } from "../../../features/memo/memo.select";
import { BtnContainer } from "./MemoPreView.styles";
import { useNavigate } from "react-router-dom";
import { clearSelectMemo } from "../../../features/memo/memoSlice";
import { deleteMemo } from "../../../features/memo/memo.thunk";
import { PencilSquare, Trash3, X } from "react-bootstrap-icons";
import Modal from "../../modal/Modal";
import Button from "../../../UI/button/button";
import MemoViewCard from "../../../UI/memoViewCard/MemoViewCard";
import { DayConvertor } from "../../../utill/timeConvertor";

function MemoPreView({ onConfirm }) {
  const MemoViewRef = useRef();
  const selectedMemo = useSelector(selectMemo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMemo) {
      MemoViewRef.current.innerHTML = `${selectedMemo.memo}`;
    }
  }, [selectedMemo]);

  const deleteHandler = () => {
    if (window.confirm("메모를 지우시겠습니까?")) {
      dispatch(deleteMemo(selectedMemo._id));
      onConfirm();
    }
  };

  const OffModalHandler = () => {
    dispatch(clearSelectMemo());
    onConfirm();
  };

  const goToEditorHandler = () => {
    navigate(`/memo/editor/${selectedMemo._id}`);
  };

  return (
    <>
      <Modal toggleModal={OffModalHandler}>
        <Button buttonType="cancel" type="click" onClick={OffModalHandler}>
          <X />
        </Button>
        <MemoViewCard
          title={selectedMemo?.title}
          major={selectedMemo?.major}
          date={DayConvertor(selectedMemo?.updatedAt)}
          color={selectedMemo?.color}
          ref={MemoViewRef}
        >
          <BtnContainer>
            <Button buttonType="base" type="click" onClick={goToEditorHandler}>
              <PencilSquare />
              Edit
            </Button>
            <Button
              buttonType="base"
              className="delete"
              type="click"
              onClick={deleteHandler}
            >
              <Trash3 />
              Delete
            </Button>
          </BtnContainer>
        </MemoViewCard>
      </Modal>
    </>
  );
}

export default MemoPreView;
