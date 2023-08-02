import KarmaBlog from "../components/Images/karmablog.jpg";
import KarmaBlog2 from "../components/Images/karmablog2.jpg";
const Blog = () => {
  return (
    <div className='Blog'>
      <h1> Good Coffee = Good Karma!</h1>
      <p>
        At Karma Kofi, every cup counts. Let's create a ripple of positive
        change together!
      </p>
      <img src={KarmaBlog} alt='karmablog' />
      <h2>Visit Karma Kofi Coffeeshop Today!</h2>
      <p>
        Come experience the Karma Kofi difference for yourself. We're
        conveniently located in the heart of the city, with ample parking and
        cozy indoor and outdoor seating options. Bring your friends, family, or
        colleagues, and together, let's enjoy the perfect blend of taste and
        good karma.
      </p>
      <img src={KarmaBlog2} alt='karmablog2' />
      <h2>Stay Tuned for Karma Events and Workshop!</h2>
      <p>
        We regularly host engaging events and workshops that foster a sense of
        community and learning. From coffee tasting sessions led by our expert
        baristas to talks by inspiring changemakers, there's always something
        exciting happening at Karma Kofi. Keep an eye on our events calendar to
        join in on the fun!
      </p>
    </div>
  );
};

export default Blog;
