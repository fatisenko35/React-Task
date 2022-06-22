import React, { useEffect } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { setPostDetail } from '../redux/actions/postAction';
import { getPosts } from '../redux/thunk';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
const List = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const postList  = useSelector((state) => state.postReducer.postList);
  const handlePost = (item) => {
    navigate('/details/' + item.id, { state : { item } })
    dispatch(setPostDetail(item))
  };
  useEffect(() => {
    dispatch(getPosts());
   
  }, [dispatch]);
  return (
    <div className="d-flex justify-content-center">
      <Helmet>
        <title>List</title>
      </Helmet>
      <Row className="d-flex justify-content-center">
      {postList?.map((item, index) => 
        (
          <Col lg={6} xs={12} key={index} className=" mb-2 card-body" onClick={() => handlePost(item)}>
          <Card className="m-2 ">
            <Card.Img variant="top" className="post-img" src="https://picsum.photos/300" />
            <Card.Body>
          <Card.Title className="text-capitalize fw-bold">{item.title.slice(0,5)}</Card.Title>
          <Card.Text>
            {item.body.slice(0,10)}
          </Card.Text>
        </Card.Body>
          </Card>
          </Col>
        )
      )
      }
      </Row>
    </div>
  )
}
export default List