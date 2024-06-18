import { Component } from "react";
import Search from "../components/Search";
import Config from "../config/app";
import TestimonialModel from "../models/testimonial";
import firebaseServices from "../services/Firebase";
import NotyServices from "../services/Noty";

export default class Testimoni extends Component {
  state = {
    testimonial: [],
    name: "",
    message: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  getTestimonial = () => {
    TestimonialModel.lists().then((results) => {
      const testimonial = results.docs.map((doc) => doc.data());
      this.setState({ testimonial: testimonial });
    })
  }

  testimonialSave = (e) => {
    e.preventDefault();
    TestimonialModel.save(this.state.name, this.state.message).then(() => {
      this.getTestimonial()
      this.setState({ name: "", message: "" })
      NotyServices.success('Testimonial has been saved')
    }).catch((error) => {
      NotyServices.error(error.message)
    })
  }

  componentDidMount() {
    this.getTestimonial()
  }

  render() {
    return (
      <div className="w-full h-[6500px] mt-20 bg-white1 relative">
        <div className="w-full h-screen overflow-hidden bg-home bg-center lg:bg-cover bg-no-repeat brightness-75">
          <div className="container mx-36 h-full w-8/12 gap-5 flex flex-col items-start justify-center brightness-200">
            <h1 className="text-white text-4xl">
              Find out the best tour testimonial
            </h1>
            <p className="text-white text-xl text-justify w-7/12">
              Are you satisfied with our service? You can share your testimonial here. Find the best tour packages with the best price and the best service only at {Config.app.name}. Book now and get the best deals for your vacation.
            </p>
          </div>
        </div>
        <div className="container w-10/12 h-48 mx-32 mt-[-100px] relative">
          <Search />
        </div>
        <div className="container mx-auto flex flex-col lg:w-full h-40 items-center justify-center gap-3 mt-16">
          <h2 className="font-bold text-2xl text-black">Our Customer Testimonial</h2>
          <p className="text-black font-medium">
            Read our bes customer testimonial
          </p>
        </div>
        <div className="container mx-auto -mt-10 w-full px-40">
          {this.state.testimonial.map((testimoni, index) => {
            return (
              <div className="card min-w-full my-10" key={index}>
                <div className="card-body flex flex-row">
                  <div className="basis-1/8 px-5">
                    <img 
                      src={firebaseServices.fileStorageUri('assets/man.png')}
                      className="h-auto w-20 rounded-full"
                    />
                  </div>
                  <div className="basis-1/2">
                    <h3 className="font-bold text-lg">{testimoni.name}</h3>
                    <p className="text-justify">
                      {testimoni.message}
                    </p>

                    <span className="text-gray-500">
                      <small>
                        {testimoni.date}
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}

          <form onSubmit={this.testimonialSave} className="card min-w-full">
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input onChange={this.handleChange} type="text" name="name" id="name" className="input min-w-full" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea onChange={this.handleChange} name="message" id="message" className="textarea min-w-full"></textarea>
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};
