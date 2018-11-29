import React from 'react'
class Contact extends React.Component {
  render() {
    return (
      <section className="section contact">
        <div className="container contact__container">
          <h2 className="contact__heading">Let's Talk</h2>
          <div className="small contact__body" />
          <p>
            You can best reach me through{' '}
            <a href="mailto:adamrasheed91@gmail.com">email</a>
          </p>
        </div>
      </section>
    )
  }
}

export default Contact
