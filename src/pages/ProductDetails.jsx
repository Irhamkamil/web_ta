import { useParams } from "react-router-dom";
import BestTourist from "../components/BestTourist";
import TabsDetail from "../components/TabsDetail";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-[3700px] mt-20 bg-white1 relative">
      <div className="w-full h-screen overflow-hidden bg-pds bg-center lg:bg-cover bg-no-repeat">
        <div className="container w-full h-full gap-5 flex flex-col items-center justify-center brightness-200">
          <h1 className="text-white text-5xl">
            Domestic & International Tour Packages - {id}
          </h1>
          <p className="text-white text-base text-center w-6/12">
            Now, holidays are becoming EASY, FAST, and FUN. Labiru Tour provides
            various options for tour packages, domestic and international tours
            to various favorite destinations. Choose your package and experience
            the convenience!
          </p>
        </div>
      </div>
      <div className=" grid mx-36 mt-20">
        <div className="container grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
              alt=""
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-36 mt-20 shadow-xl rounded-2xl ">
        <TabsDetail />
      </div>
      <div className="container flex w-10/12 h-32 mx-32 mt-16 items-center gap-10">
        <div className="flex items-center w-9/12 h-full px-20 shadow-xl bg-white rounded-3xl">
          <div className="flex flex-auto items-center justify-between font-bold text-2xl text-black">
            <div className="flex flex-col gap-2 text-center">
              <h1>Destinasi</h1>
              <p className="text-lg text-slate-500">Tangkuban Perahu</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h1>Durasi</h1>
              <p className="text-secondary">2W4D</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h1>Kategori</h1>
              <p className="text-lg text-slate-500">Familiy Tour</p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h1>Harga</h1>
              <p className="text-secondary">Rp.500K</p>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-auto items-center justify-center h-full shadow-2xl rounded-2xl text-white1 text-center text-2xl font-bold bg-secondary">
          Pesan Paket
          <br />
          Sekarang
        </div> */}
        <button className="btn bg-secondary btn-lg flex flex-auto h-full shadow-2xl rounded-2xl text-white1 text-center text-2xl font-bold">
          Pesan Paket
          <br />
          Sekarang
        </button>
      </div>
      <div className="container flex flex-col w-full h-40 items-center justify-center gap-3 mt-24">
        <h2 className="font-bold text-2xl text-black">
          Best Tourist Destinations
        </h2>
        <p className="text-black font-medium">
          The Best Tour Package Options Ready to Pamper Your Vacation
        </p>
      </div>
      <div className="container w-full -mt-10">
        <BestTourist />
      </div>
    </div>
  );
};

export default ProductDetails;
