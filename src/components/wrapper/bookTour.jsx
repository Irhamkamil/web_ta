import { useParams } from "react-router-dom";
import CreateTour from "../../pages/CreateTour";

const BookTourWrapper = () => {
  const { id } = useParams();
  return <CreateTour id={id} />;
};

export default BookTourWrapper;