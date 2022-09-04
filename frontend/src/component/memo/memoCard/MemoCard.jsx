import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMemo } from "../../../features/memo/memo.select";
import { setSelectMemo } from "../../../features/memo/memoSlice";
import MemoSmallCard from "../../../UI/memoSmallCard/MemoSmallCard";
import MemoPreView from "../memoPreView/MemoPreView";
import { MemoCardContainer } from "./MemoCard.styles";
import Modal from "../../modal/Modal";
import MemoViewCard from "../../../UI/memoViewCard/MemoViewCard";
import { DayConvertor } from "../../../utill/timeConvertor";

function MemoCard({ memoInfo, home }) {
  const [openMemoView, setOpenMemoView] = useState(false);
  const selectedMemo = useSelector(selectMemo);
  const memoRef = useRef("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (memoInfo.memo) {
      memoRef.current.innerHTML = `${
        memoInfo.memo.length > 100
          ? memoInfo.memo.slice(0, 100) + ` ...`
          : memoInfo.memo
      }`;
    }
  }, [memoInfo]);

  const cardClickHandler = () => {
    dispatch(setSelectMemo(memoInfo._id));
    setOpenMemoView(!openMemoView);
  };
  const homeCardClickHandler = () => {
    dispatch(setSelectMemo(memoInfo._id));
    setOpenMemoView(!openMemoView);
  };

  return (
    <>
      {!home && openMemoView && (
        <MemoPreView onConfirm={() => setOpenMemoView(!openMemoView)} />
      )}
      {home && selectedMemo && openMemoView && (
        <Modal toggleModal={() => setOpenMemoView(!openMemoView)}>
          <MemoViewCard
            title={selectedMemo.title}
            date={DayConvertor(selectedMemo.updatedAt)}
            color={selectedMemo.color}
            major={selectedMemo.major}
            dangerouslySetInnerHTML={{ __html: selectedMemo.memo }}
          />
        </Modal>
      )}
      <MemoCardContainer
        bgcolor={memoInfo.color}
        onClick={home ? homeCardClickHandler : cardClickHandler}
      >
        <MemoSmallCard
          major={memoInfo.major}
          title={memoInfo.title}
          ref={memoRef}
        />
      </MemoCardContainer>
    </>
  );
}

export default MemoCard;
