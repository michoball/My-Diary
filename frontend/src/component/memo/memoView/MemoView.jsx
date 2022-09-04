import React, { useEffect, useState } from "react";
import {
  MemoListViewContainer,
  MainViewContainer,
  SideBarViewContainer,
  MemosContainer,
  MemosWrapper,
  MemoViewHeader,
} from "./MemoView.styles";
import { useSelector } from "react-redux";
import {
  selectMemoLoading,
  selectRecentOrderMemoLists,
} from "../../../features/memo/memo.select";
import MemoCard from "../memoCard/MemoCard";
import MemoViewSidebar from "../MemoViewSidebar/MemoViewSidebar";
import Loading from "../../../UI/loading/Loading";

function MemoView() {
  const orderedMemoLists = useSelector(selectRecentOrderMemoLists);
  const memoIsLoading = useSelector(selectMemoLoading);
  const [searchWord, setSearchWord] = useState("");
  const [memoCards, setMemoCards] = useState(orderedMemoLists);

  const serachHandler = (e) => {
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const searchTerm = setTimeout(() => {
      const titleTerm = orderedMemoLists.filter((memo) =>
        memo.title.includes(searchWord)
      );
      if (titleTerm) {
        setMemoCards(titleTerm);
      }
    }, 500);

    return () => {
      clearTimeout(searchTerm);
    };
  }, [searchWord, orderedMemoLists]);

  const selectColorHandler = (color) => {
    setMemoCards(orderedMemoLists.filter((memo) => memo.color === color));
  };

  const memoViewResetHandler = () => {
    setMemoCards(orderedMemoLists);
  };
  return (
    <>
      <SideBarViewContainer>
        <MemoViewSidebar
          onMemoView={memoViewResetHandler}
          searchWord={searchWord}
          onSearch={serachHandler}
          onSelectColor={selectColorHandler}
        />
      </SideBarViewContainer>
      <MainViewContainer>
        <MemoListViewContainer>
          <MemoViewHeader>
            <h1>Memo Lists</h1>
          </MemoViewHeader>
          <MemosContainer>
            {memoIsLoading ? (
              <Loading />
            ) : (
              <MemosWrapper>
                {memoCards.map((memoList) => {
                  return <MemoCard key={memoList._id} memoInfo={memoList} />;
                })}
              </MemosWrapper>
            )}
          </MemosContainer>
        </MemoListViewContainer>
      </MainViewContainer>
    </>
  );
}

export default MemoView;
