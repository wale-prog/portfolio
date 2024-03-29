import Carousel from 'react-bootstrap/Carousel';
import { recommendation } from '../../helper';
import './Recommendations.css';

const Recommendations = () => (
  <div className="receommendation-main">
    <p className="recommendation-title">What People Say About Me</p>
    <h2>What My Clients Says About Me</h2>
    <Carousel variant="dark">
      {recommendation.map((info) => (
        <Carousel.Item key={info.id} interval={10000}>
          <div className="recommendation-content">
            <p className="recommendation-body">
              {info.body}
            </p>
            <div>
              <div className="recommend-image">
                <img src={info.image} alt="" />
              </div>
              <div>
                <h4>{info.name}</h4>
                <p className="recommendation-footer">{info.title}</p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>

);

export default Recommendations;
