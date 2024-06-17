import { Component } from "react";
import ProductsModels from "../models/products";
import NotyServices from "../services/Noty"
import EncryptionServices from "../services/Encryption";
import Moment from "moment";
import BookingModels from "../models/booking";
import WhatsappServices from "../services/Whatsapp";
import Noty from "noty";
import { Navigate } from "react-router-dom";
import sessionStorageServices from "../services/SessionStorage";
export class CreateTour extends Component {
  state = {
    id: null,
    fullname: sessionStorageServices.get('user_fullname'),
    email: sessionStorageServices.get('user_email'),
    phone: sessionStorageServices.get('user_phone'),
    product: [],
    product_name: null,
    book_date: null,
    date: Moment().format('MMMM DD, YYYY'),
    redirectToHome: false
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  findProduct = () => {
    const { id } = this.props;
    this.setState({ id: id });

    ProductsModels.findBy('name', EncryptionServices.base64Decrypt(id)).then((results) => {
      const product = results.docs.map((doc) => doc.data())[0]
      console.log(product)
      this.setState({ product: product, product_name: product.name });
    }).catch((error) => {
      console.log(error)
      NotyServices.error("Failed to get product data")
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state
    const order_id = '#order-' + Math.floor(Math.random() * 1000000) + 1

    var n = new Noty({
      text: 'Are you sure the data is correct?',
      buttons: [
        Noty.button('YES', 'btn m-1', function () {
          BookingModels.save(order_id, state.product_name, state.fullname, state.email, state.phone, state.book_date, state.date).then((results) => {
            // Save data to the session storage for future booking
            sessionStorageServices.set('user_fullname', state.fullname)
            sessionStorageServices.set('user_phone', state.phone)

            // Show success message
            NotyServices.success('Order created successfuly!')
      
            // Send message to admin
            WhatsappServices.send_to_admin(WhatsappServices.bookTemplate({
              product_name: state.product_name,
              fullname: state.fullname,
              email: state.email,
              phone: state.phone,
              book_date: state.book_date,
              date: state.date,
              product_name_id: state.id,
              order_id: order_id
            }))
      
            // Redirect to home
            window.location.href = '/'
          }).catch((error) => {
            NotyServices.error(error)
          })
        }),
    
        Noty.button('NO', 'btn m-1', function () {
            n.close();
        })
      ]
    });
    n.show();
  }

  componentDidMount() {
    this.findProduct()
  };

  render() {
    if (this.state.redirectToHome) {return <Navigate to="/" />; }
    return (
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6 mt-40 mb-20">
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-3xl font-semibold">Booking Tour</h1>
          </div>
          <div className="form-group">
            
            <div className="form-field">
              <label htmlFor="fullname" className="form-label">
                Product Name
              </label>
              <input
                placeholder="Type here"
                type="text"
                readOnly
                value={this.state.product.name}
                id="product_name"
                onChange={this.handleChange}
                className="input max-w-full"
              />
            </div>

            <div className="form-field">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                placeholder="Type here"
                type="text"
                id="fullname"
                value={this.state.fullname}
                onChange={this.handleChange}
                className="input max-w-full"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                placeholder="Type here"
                type="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
                className="input max-w-full"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                placeholder="Type here"
                type="tel"
                id="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                className="input max-w-full"
              />
            </div>

            <div className="form-field">
              <label htmlFor="book_date" className="form-label">
                Booking Date
              </label>
              <input
                placeholder="Choose date"
                type="date"
                id="book_date"
                value={this.state.book_date}
                onChange={this.handleChange}
                className="input max-w-full"
              />
            </div>
            
            <div className="form-field pt-5">
              <div className="form-control justify-between">
                <button className="btn btn-primary w-full">Booking Now</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTour;
