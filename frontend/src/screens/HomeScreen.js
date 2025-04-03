import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from '../components/Paginate'
import { useLocation} from "react-router-dom";

const HomeScreen = ({history}) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const productList = useSelector(state => state.productList)
  const { error, loading, products, page, pages } = productList

  const params = new URLSearchParams(location.search);
  const keyword = params.get('keyword') || '';
  const currentPage = Number(params.get('page')) || 1;
  
  useEffect(() => {
    dispatch(listProducts(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2><Loader/></h2>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div>
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate page={page} pages={pages} keyword={keyword}/>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
