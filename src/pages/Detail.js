import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from 'react-helmet';
import { increase } from '../redux/actions/viewAction';
import { useLocation } from "react-router-dom";
const Detail = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(0);
  const dispatch = useDispatch()
  const postDetail = useSelector((state) => state.postReducer.postDetail);
  const viewCount = useSelector((state) => state.viewReducer.counter);
  const location = useLocation();
  useEffect(() => {
    let localCount = +localStorage.getItem(location?.state?.item?.id) + 1
    dispatch(increase({
      id: location?.state?.item?.id,
      counter: localCount == NaN ? 0 : localCount
    }))

  }, []);
  useEffect(() => {

    localStorage.setItem(location?.state?.item?.id, view)
  }, [view]);

  useEffect(() => {
    setData(postDetail);
  }, [postDetail]);
  useEffect(() => {
    setView(viewCount)
  }, [viewCount])
  return (
    <Container className="d-flex justify-content-center flex-column w-100">
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <img src="https://picsum.photos/600" style={{ maxWidth: '956px', maxHeight: '500px' }} className="w-100 mx-auto my-2" />

      <div className="w-100 mx-auto my-2" style={{ maxWidth: '956px', maxHeight: '700px' }}>
        <div className="d-flex">
          <p>{view}</p>
          <i className="bi bi-eye-fill mx-1"></i>
          <p className="text"><span className="fw-bold">By:</span> Cora Drew, <span className="fw-bold">at</span> March 20  </p>
        </div>
        <h2 className="h2 text-capitalize">{data?.title}</h2>
        <p className="text-secondary">{data?.body}</p>
        <p className="text-secondary">{data?.body}</p>
        <p className="text-secondary">{data?.body}</p>
      </div>
    </Container>
  )
}

export default Detail