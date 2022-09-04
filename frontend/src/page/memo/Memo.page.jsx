import { MemoContainer } from "./Memo.styles";

import MemoView from "../../component/memo/memoView/MemoView";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMemos } from "../../features/memo/memo.thunk";

function Memo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMemos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MemoContainer>
      <MemoView />
    </MemoContainer>
  );
}

export default Memo;
