/* eslint-disable react/no-unescaped-entities */
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
    return (
        <div className="hero my-32">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <img src={person} className=" w-[400px] h-[410px] rounded-lg" />
    <img src={parts} className="w-[280px] h-[280px] border-8 border-white absolute right-1/4 top-1/2 rounded-lg" />
    </div>
    <div className="lg:w-1/2">
        <h3 className="text-xl font-bold text-[#FF3811] mb-5">About Us</h3>
      <h1 className="text-5xl font-bold w-2/3 text-[#151515]">We are qualified & of experience in this field</h1>
      <p className="py-6 text-[#737373] text-base w-3/4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <p className="mb-8 text-[#737373] text-base w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      <button className="btn btn-error bg-[#FF3811] rounded-md text-white font-semibold text-lg">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;