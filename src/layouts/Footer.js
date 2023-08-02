const Footer = () => {
  const today = new Date();

  return (
    <footer>
      <div className='footerText'>
        <p>
          <i>Karma Kofi Coffee House</i> &copy; {today.getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
