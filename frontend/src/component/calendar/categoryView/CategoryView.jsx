import {
  CategoryViewContainer,
  ListContainer,
  CategoryAddBtn,
  ListWrapper,
  TitleContainer,
} from "./CategoryView.styles";
import { PlusCircle } from "react-bootstrap-icons";
import CategoryList from "../categoryList/CategoryList";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
import LabelAddForm from "../labelAdd/LabelAddForm";
import {
  selectlabelIsLoading,
  selectLabelLists,
} from "../../../features/label/label.select";

import Loading from "../../../UI/loading/Loading";

const CategoryView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listsOfLabel, setListsOfLabel] = useState([]);
  const labelLists = useSelector(selectLabelLists);
  const labelIsLoading = useSelector(selectlabelIsLoading);

  useEffect(() => {
    if (labelLists.length > 0) {
      setListsOfLabel([...labelLists]);
    }
  }, [labelLists]);

  const AddLabelHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <LabelAddForm onConfirm={() => setIsModalOpen(!isModalOpen)} />
      )}
      <CategoryViewContainer>
        <TitleContainer>
          <h1>My labels</h1>
          <CategoryAddBtn onClick={AddLabelHandler}>
            <PlusCircle />
          </CategoryAddBtn>
        </TitleContainer>
        <ListWrapper>
          {labelIsLoading ? (
            <Loading />
          ) : (
            <ListContainer>
              {listsOfLabel?.map((lists) => {
                return <CategoryList key={lists._id} lists={lists} />;
              })}
            </ListContainer>
          )}
        </ListWrapper>
      </CategoryViewContainer>
    </>
  );
};

export default CategoryView;
