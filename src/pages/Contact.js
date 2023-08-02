const Contact = () => {
  return (
    <div className='Contact'>
      <h1> Ask Karma Kofi!</h1>
      <p>
        Do you have questions, feedback, or suggestions? Don't hesitate to leave
        a message below.{" "}
      </p>

      <form action='/action_page.php'>
        <label for='cname'>
          <b>Complete Name</b>
        </label>
        <br />
        <input
          type='text'
          id='cname'
          name='cname'
          placeholder='Juan dela Cruz'
        />
        <br />
        <br />
        <label for='lname'>
          <b>E-mail</b>
        </label>
        <br />

        <input
          type='email'
          id='email'
          name='email'
          placeholder='jdcruz@website.com'
        />
        <br />
        <br />
        <label for='textarea'>
          <b>Message</b>
        </label>
        <textarea>Type Question, Feedback, and/or Suggestions</textarea>
        <br />
        <br />
        <input className='submitBtn' type='submit' value='Submit' />
      </form>
      <br />
    </div>
  );
};

export default Contact;
