import karmaabout from "../components/Images/karmaabout.jpg";
import StaffImg1 from "../components/Images/Staff1.png";
import StaffImg2 from "../components/Images/Staff2.png";
const About = () => {
  return (
    <div className='About'>
      <h1> About Karma Kofi!</h1>
      <p>
        At Karma Kofi, we believe that every cup of coffee can make a positive
        impact on the world. We are more than just a café; we are a community of
        like-minded individuals who come together to enjoy exceptional coffee
        while contributing to meaningful social causes. From sourcing our beans
        ethically to supporting local farmers and donating a portion of our
        proceeds to charitable initiatives, we strive to embody the spirit of
        good karma in everything we do.
      </p>

      <img src={karmaabout} alt='karmaabout' />
      <h2>Our Coffee.</h2>
      <p>
        Indulge your senses with our carefully curated selection of premium
        coffee blends. Each batch is expertly roasted to perfection, ensuring a
        rich and flavorful experience with every sip. Whether you prefer a
        classic espresso, a velvety cappuccino, or a refreshing cold brew, we
        have something to satisfy every coffee lover's palate. We also offer a
        variety of dairy and non-dairy milk options to cater to different
        dietary preferences.
      </p>
      <h2>Join the Karma Movement.</h2>
      <p>
         Follow us on social media, sign up for our
        newsletter, or become a member of our Karma Krew to stay connected and
        be part of our mission.
      </p>

      <h2>Meet the Staff</h2>

      <div className='Staff1'>
        <div className='imgHolder'>
          <img src={StaffImg1} alt='staff1' />
        </div>
        <div className='nameHolder'>
          <p>
            <b>Juan Dela Cruz</b>
          </p>
          <p>Head Barista</p>
        </div>
      </div>

      <div className='Staff2'>
        <div className='imgHolder'>
          <img src={StaffImg2} alt='staff2' />
        </div>
        <div className='nameHolder'>
          <p>
            <b>Jane Dela Fuente</b>
          </p>
          <p>Assistant Barista</p>
        </div>
      </div>
    </div>
  );
};

export default About;
