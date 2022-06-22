import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Stack, Form, Button } from 'react-bootstrap';
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setPostDetail } from '../redux/actions/postAction';
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
const Home = () => {
  const [post, setPost] = useState([])
  let navigate = useNavigate();
  const categories = ["entertainment", "business", "adventure", "decorating", "travelling", "shopping"]
  const dispatch = useDispatch();
  const postList  = useSelector((state) => state.postReducer.postList);
  const handlePost = (item) => {
    dispatch(setPostDetail(item))
    navigate('/details/' + item.id, { state : {item}})
  };
  useEffect(() => {
    setPost(postList[0])
  }, [postList]);
 
  return (
    <Container className="pt-3 mt-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Row>
        <Col lg={8}>
          <Stack gap={3}>
            <img src="https://picsum.photos/800/500" className="w-100" />
            <Container className="mx-2">
              <p className="text"><span className="fw-bold">By:</span> Cora Drew, <span className="fw-bold">at</span> March 20  </p>
              <h2 className="h2 text-capitalize">{post?.title}</h2>
              <p className="text-secondary">{post?.body}</p>
              <Container className="d-flex justify-content-between">
                <div>
                  <div className="line"></div>
                  <a><span className="link text-secondary"  onClick={() => handlePost(post)}>Read More</span></a>
                </div>
                <div className="me-3">
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-twitter ms-2"></i>
                </div>
              </Container>
            </Container>
          </Stack>
        </Col>
        <Col lg={4}>
          <Stack gap={3} >
            <Form className="p-4 border">
              <Form.Group controlId="formSearch">
                <Container className="my-2">
                  <h3 className="h3 fw-bolder">Search</h3>
                </Container>
                <Container className="d-flex my-4">
                  <Form.Control
                    type="text"
                    placeholder="Type Here..."
                    style={{
                      borderRadius: "5px 0px 0px 5px",
                    }}
                  />
                  <Button
                    style={{
                      borderRadius: "0px 5px 5px 0px",
                    }}
                  >
                    <BiSearch />
                  </Button>
                </Container>
              </Form.Group>
            </Form>
            <Container className="d-flex flex-column px-5 border">
              <h3 className="h3 fw-bolder my-2 pt-3">Categories</h3>
              <div className="mt-4">
                {categories.map((category, index) => (
                  <p key={index} className="text-capitalize text-secondary">{category}</p>
                ))}
              </div>
            </Container>
            <Container className="img-card px-4 border">
              <i className="bi bi-quote"></i>
              <div className="card-text">
                <p>Lorem ipsum dolor amet loem</p>
                <p>consectetur adipisicing elit</p>
                <p>sed do eiusmod tempor</p>
                <p className="display-6 card-text">Maria Parker</p>
                <div className="d-flex justify-content-center ms-5">
                  <li className="display-6"></li>
                  <li className="display-6" style={{ opacity: '0.6' }}></li>
                </div>
              </div>
            </Container>


          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default Home