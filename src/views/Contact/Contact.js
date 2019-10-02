import React from "react";
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: ''};
  this.handleSubmit = this.handleSubmit.bind(this);
  this.nameChange = this.nameChange.bind(this);
	this.emailChange = this.emailChange.bind(this);
  this.feedbackChange = this.feedbackChange.bind(this);
  }

  render() {
	return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
  	<form className="test-mailing">
    	<h1>Contact us !</h1>
    	<div>
      <p>Name</p>
      <textarea 
        style={{width: '100%', height: '30px'}}
        placeholder="Put your name here"
        value={this.state.name}
        maxLength='50'
        onChange={this.nameChange}
      />
      <p>Email</p>
      <textarea 
        style={{width: '100%', height: '30px'}}
        placeholder="Your email contact"
        value={this.state.email}
        type="email"
        maxLength='50'
        onChange={this.emailChange}
      /> 
      <p>Text</p>
      <textarea
        id="test-mailing"
        name="test-mailing"
        onChange={this.feedbackChange}
        placeholder="Write something here"
        required
        value={this.state.feedback}
        style={{width: '100%', height: '150px'}}
      	/>
        <input type="button" value="Submit" className="btn btn--submitt" onClick={this.handleSubmit} />
    	</div>
  	</form>
    </div>
	)
  }
  feedbackChange(event) {
    this.setState({feedback: event.target.value})
  }
  nameChange(event) {
    this.setState({name: event.target.value})
  }
  emailChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit (event) {
    const templateId = 'template_afy2pSYu';
  
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
  
    sendFeedback (templateId, variables) {
    window.emailjs.send('gmail', templateId, variables)
      .then(res =>{ alert('Email successfully sent!')
      this.setState({feedback: '', name: '', email: ''})})
      .catch(err =>  alert(`Unfortunately there was a problem with sending an email probably thats the problem: ${err.text}`))
    }
}
export default Contact;