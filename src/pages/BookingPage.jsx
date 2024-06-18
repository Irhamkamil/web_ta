import { Component } from "react";
import Search from "../components/Search";
import Config from "../config/app";
import NotyServices from "../services/Noty"
import sessionStorageServices from "../services/SessionStorage";
import BookingModels from "../models/booking";
class BookingPage extends Component {
  state = {
    bookings: []
  }

  loadBooking = () => {
    BookingModels.findBy('email', sessionStorageServices.get('user_email')).then((results) => {
      const bookings = results.docs.map((doc) => doc.data());
      this.setState({ bookings: bookings });
    }).catch((error) => {
      console.log(error);
      NotyServices.error("Failed to get booking data")
    })
  }
  
  componentDidMount() {
    this.loadBooking()
  }

  render() {
    return (
      <div className="w-full h-[6500px] mt-20 bg-white1 relative">
        <div className="w-full h-screen overflow-hidden bg-home bg-center lg:bg-cover bg-no-repeat brightness-75">
          <div className="container mx-36 h-full w-8/12 gap-5 flex flex-col items-start justify-center brightness-200">
            <div className="flex">
            <div className="basis-1/4 px-5">
                <img 
                  src={sessionStorageServices.get('user_photo')}
                  className="h-auto w-full mx-auto rounded-full"
                />
              </div>
              <div className="basis-1/2  pl-5">
                <h1 className="font-bold text-2xl">
                  Hi, {sessionStorageServices.get('user_fullname')}
                </h1>
                <p className="text-justify">
                  {sessionStorageServices.get('user_address')}, {sessionStorageServices.get('user_country')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container w-10/12 h-48 mx-32 mt-[-100px] relative">
          <Search />
        </div>
        <div className="container mx-auto flex flex-col lg:w-full h-40 items-center justify-center gap-3">
          <h2 className="font-bold text-2xl text-black">Booking History</h2>
          <p className="text-black font-medium">
            See your booking history here
          </p>
        </div>
        <div className="container mx-auto w-full">
          <table className="table table-compact table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Order Id</th>
                <th>Destination</th>
                <th>Book Date</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.bookings.map((booking, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{booking.order_id}</td>
                      <td>{booking.product_name}</td>
                      <td>{booking.book_date}</td>
                      <td>{booking.date}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      
    )
  }
};

export default BookingPage;
