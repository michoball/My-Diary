import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectMemo } from "../../../features/memo/memo.select";
import { setSelectMemo } from "../../../features/memo/memoSlice";
import { DayConvertor } from "../../../utill/timeConvertor";

import Modal from "../../modal/Modal";
import MemoViewCard from "../../../UI/memoViewCard/MemoViewCard";

import {
  MyEditor,
  EditorContainer,
  BaseHeaderContainer,
  EditorFormInput,
  EditorFromContainer,
  ToggleMainBtn,
  StarDateContainer,
} from "./EditorForm.styles";
import MemoEditSidebar from "../memoEditorSidebar/MemoEditSidebar";
import { Star, StarFill } from "react-bootstrap-icons";

const defaultMemoInfo = {
  _id: "",
  title: "",
  date: new Date().toISOString(),
  color: "#ffeb3b",
  memo: ``,
  major: false,
};

const EditorForm = () => {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [memoInfo, setMemoInfo] = useState(defaultMemoInfo);

  const [showPreview, setShowPreview] = useState(false);
  const selectedMemo = useSelector(selectMemo);
  const params = useParams();
  const dispatch = useDispatch();

  const { title, date, memo, color, major } = memoInfo;

  useEffect(() => {
    if (params.editmemoId) {
      dispatch(setSelectMemo(params.editmemoId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 처음 시작할 때 메모있으면 editor와 preview에 내용 넣기
  useEffect(() => {
    if (selectedMemo) {
      setMemoInfo((prev) => {
        return { ...prev, ...selectedMemo };
      });
      const blocksFromHtml = htmlToDraft(selectedMemo.memo);
      if (blocksFromHtml) {
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
          contentBlocks,
          entityMap
        );
        // editor 에 넣기
        const editorState = EditorState.createWithContent(contentState);
        setEditorState(editorState);
      }
    }
  }, [selectedMemo]);

  const memoInfoChangeHandler = (e) => {
    //제목 input창 길이조절
    if (e.target.name === "title" && e.target.value.length >= 15) {
      e.target.style.width = ` ${150 + e.target.value.length * 5}px`;
    } else if (e.target.name === "title" && e.target.value.length < 15) {
      e.target.style.width = `150px`;
    }
    // title state 변경
    setMemoInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onEditorStateChange = (editorText) => {
    // editorState에 값 설정
    setEditorState(editorText);

    // 미리보기& 저장용 memo data 만들기 위해 변환
    let markUp = convertToRaw(editorText.getCurrentContent());

    //데이터에 저장
    setMemoInfo((prev) => {
      return { ...prev, memo: draftToHtml(markUp) };
    });
  };

  const toggleMajorHandler = () => {
    setMemoInfo((prev) => {
      return { ...prev, major: !major };
    });
  };

  // 미리보기 뷰 토글
  const showPreviewHandler = () => {
    setShowPreview(!showPreview);
  };

  return (
    <>
      <MemoEditSidebar
        memoInfo={memoInfo}
        onPreview={showPreviewHandler}
        setMemoInfo={setMemoInfo}
      />
      <EditorFromContainer>
        <EditorContainer>
          <BaseHeaderContainer>
            <EditorFormInput
              label="제목"
              type="text"
              value={title}
              name="title"
              onChange={memoInfoChangeHandler}
              placeholder="제목을 작성해주세요"
            />
            <StarDateContainer>
              <ToggleMainBtn major={major} onClick={toggleMajorHandler}>
                {major ? <StarFill /> : <Star />}
              </ToggleMainBtn>
              <span className="date">작성일: {date.split("T")[0]}</span>
            </StarDateContainer>
          </BaseHeaderContainer>

          <MyEditor bgcolors={color}>
            <Editor
              // 에디터와 툴바 모두에 적용되는 클래스
              wrapperClassName="wrapper-class"
              // 에디터 주변에 적용된 클래스
              editorClassName="editor"
              // 툴바 주위에 적용된 클래스
              toolbarClassName="toolbar-class"
              // 툴바 설정
              toolbar={{
                // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
              }}
              placeholder="내용을 작성해주세요....."
              // 한국어 설정
              localization={{
                locale: "ko",
              }}
              // 초기값 설정
              editorState={editorState}
              // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
              onEditorStateChange={onEditorStateChange}
            />
          </MyEditor>
        </EditorContainer>
      </EditorFromContainer>
      {showPreview && (
        <Modal toggleModal={showPreviewHandler}>
          <MemoViewCard
            title={title}
            date={DayConvertor(date)}
            color={color}
            major={major}
            dangerouslySetInnerHTML={{ __html: memo }}
          />
        </Modal>
      )}
    </>
  );
};
export default EditorForm;
