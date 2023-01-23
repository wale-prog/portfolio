import { recommendation } from '../helper';
import './Recommendations.css';

const Recommendations = () => (
  <div className="receommendation-main">
    <p className="recommendation-title">What People Say About Me</p>
    <h2>What My Clients Says About Me</h2>
    {recommendation.map((info) => (
      <>
        <p key={info.id} className="recommendation-body">
          {info.body}
        </p>
        <img src={info.image} alt="" />
        <h4>{info.name}</h4>
        <p className="recommendation-footer">{info.title}</p>
      </>
    ))}
  </div>
);

export default Recommendations;
