import React, { useEffect, memo, FC } from "react";
import { ContainerBlock, ContainerImage } from "../../App.styles";
import { LikeButton } from "../Buttons/LikeButton/LikeButton";
import { fetchData } from "../../Services/api";
import { deleteData, getData, modalToggle, passModalData } from "../../actions";
import { connect, ConnectedProps, useDispatch } from "react-redux";

type Item = {
  id: number,
  temp2m: string,
  name: string,
  username: string,
  email: string;
};

const Application: FC<ApplicationProps> = ({ dataResult }) => {
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const data = await fetchData();
      dispatch(getData(data));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  if (dataResult === undefined) {
    return (
      <div></div>
    );
  }
  return (
    <div>
      {dataResult?.map((item: Item) => (
        <ContainerBlock key={item.id}>
          <div>{item.temp2m}</div>
          <div>{item.name}</div>
          <div>{item.username}</div>
          <div>{item.email}</div>
          <ContainerImage src={`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`} />
          <div>
            <LikeButton />
            <button onClick={() => {
              dispatch(modalToggle(true));
              dispatch(passModalData(item));
            }}>Edit Button</button>
            <button onClick={() => dispatch(deleteData(item.id))} >Delete</button>
          </div>
        </ContainerBlock>
      ))}
    </div >
  );

};

const mapStateToProps = (state: any) => {
  return {
    dataResult: state.reducer.result || []
  };
};

const connector = connect(mapStateToProps);
type ApplicationProps = ConnectedProps<typeof connector>;
export default connector(memo(Application));