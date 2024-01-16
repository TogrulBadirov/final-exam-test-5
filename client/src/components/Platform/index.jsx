import CustomButton from "../CustomButton";
import "./index.scss"
const Platform = () => {
  return (
    <section id="Platform">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="img">
            <img
              src="https://preview.colorlib.com/theme/educature/img/about.jpg.webp"
              alt=""
            />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 right-side">
            <h3>Over 2500 Courses from 5 Platform</h3>
            <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station. In the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station.</p>
            <CustomButton title="Explore Courses"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
