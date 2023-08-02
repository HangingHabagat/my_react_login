import karmahome from "../components/Images/karmahome.jpg";
const Home = () => {
  return (
    <div className='Home'>
      <h1> Welcome to Karma Kofi!</h1>
      <p>Discover the Perfect Blend of Taste and Good Karma.</p>
      <img src={karmahome} alt='karmahome' />
      <br />
      <p>
        Step into our warm and inviting café, where the aroma of freshly brewed
        coffee welcomes you with open arms. Our friendly baristas are passionate
        about their craft and are always ready to serve you with a smile.
        Whether you're catching up with friends, having a productive work
        session, or simply seeking a moment of relaxation,{" "}
        <b>Karma Kofi is the perfect place to unwind and connect.</b>
      </p>{" "}
      <br />
    </div>
  );
};

export default Home;
