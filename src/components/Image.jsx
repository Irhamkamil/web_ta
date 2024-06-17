import firebaseServices from "../services/Firebase";

const Image = ({images}) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full px-10 gap-20 relative">
        {images.map((image, index) => {
            return (
              <div className="m-20" key={index}>
                <img
                  className="h-auto md:w-96 rounded-lg absolute"
                  src={firebaseServices.fileStorageUri(image.image)}
                  alt={image.alt}
                />
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Image;
