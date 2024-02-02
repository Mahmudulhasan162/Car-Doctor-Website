/* eslint-disable react/no-unescaped-entities */
import photo1 from "../../assets/images/team/photo_2021-08-27_09-37-38.jpg";
import photo2 from "../../assets/images/team/pic1.jpg";
const Testimonial = () => {
  return (
    <div>
      <div className="text-center space-y-5">
        <h1 className="text-xl font-bold text-[#FF3811]">Testimonial</h1>
        <h1 className="text-5xl font-bold text-black">What Customer Says</h1>
        <p className="w-2/4 mx-auto text-base font-normal text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className=" md:flex gap-6 mt-10 mb-20">
        <div className="border py-12 pl-12 pr-5 rounded-xl">
          <div className="flex gap-5">
            <img src={photo2} className="w-16 h-16 rounded-full" alt="" />
            <div>
              <h1 className=" text-2xl font-bold text-[#444]">
               Kazi Mahmudul Hasan
              </h1>
              <h1 className=" text-xl font-semibold text-[#737373]">
                Businessman
              </h1>
            </div>
            <div className=" mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
                <path
                  d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#737373] text-base font-normal my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
        <div className="border py-12 pl-12 pr-3 rounded-xl">
          <div className="flex gap-5">
            <img src={photo1} className="w-16 rounded-full" alt="" />
            <div>
              <h1 className=" text-2xl font-bold text-[#444]">
                Mahmudul Hasan Shafi
              </h1>
              <h1 className=" text-xl font-semibold text-[#737373]">
                Businessman
              </h1>
            </div>
            <div className=" mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M32 4V28H47.9999C47.9999 36.8223 40.8222 44 32 44V52.0001C45.2344 52.0001 56 41.2345 56 28V4H32Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
                <path
                  d="M0 28H16C16 36.8223 8.82222 44 0 44V52.0001C13.2344 52.0001 24 41.2345 24 28V4H0V28Z"
                  fill="#FF3811"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#737373] text-base font-normal my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
