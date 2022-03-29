import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
const HomePage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://atouchofcass.files.wordpress.com/2012/05/coffee.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold ">
              Welcome To Poetry Cafe!{" "}
              <FontAwesomeIcon icon={faMugHot} className="py-0.5 pl-2" />
            </h1>
            <p className="py-6">
              A Place Where You Can Kick That Random Kids Head Back While
              Indulging Yourself With Words Of Emotion
            </p>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">
                  Number Of Poems in our database!
                </div>
                <div className="stat-value">31K</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary"></div>
                <div className="stat-title">
                  The Monthly Cost To Read Our Poems
                </div>
                <div className="stat-value">100% FREE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
