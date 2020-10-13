import React, { Component } from "react"

export default class ContactForm extends Component {


  state = {
    name: "",
    email: "",
    message: "",
    phone: "70373737",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = async event => {
    const AWS_GATEWAY_URL = "https://yyivl6op06.execute-api.us-east-1.amazonaws.com/prod";
    const unmaskedData = JSON.stringify({"name":this.state.name,"email":this.state.email,"phone": this.state.phone,"message": this.state.message});
    event.preventDefault()
    alert(unmaskedData)

    try {
      await fetch(AWS_GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: unmaskedData,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      alert("messsage sent")
    } catch (error) {
      alert(error)
    }
  }

  render() {
    return (

      <div>
        <h1> Contact </h1>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="email">
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.address"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor="question">
            <h3>Message</h3>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder="Say something"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </label> <br />
          <button type="submit">Send</button>
        </form>
      </div>


    )
  }
}