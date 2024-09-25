import Hero_car from "@/assets/hero/hero-car.png";
import car1 from "@/assets/hero/car1.png";
import car2 from "@/assets/hero/car2.png";
import car3 from "@/assets/hero/car3.png";
import Image from "next/image";
import hundai from "@/assets/hero/hundai.png";
import renult from "@/assets/hero/renult.png";
import kia from "@/assets/hero/kia.png";
import suzuki from "@/assets/hero/suzuki.png";
import benz from "@/assets/hero/benz.png";
import popular_car from "@/assets/hero/popular-car.png";
import car_off from "@/assets/car_off_road.png";
import text_bg from "@/assets/text-bg.png";
import yellow_car from "@/assets/yellow_car.png";
import "@/sass/index.scss";
import { About, Popular, Rental, Workdata } from "@/app/pages/home/data";

const Home: React.FC = () => {
  return (
    <main className="">
      <section className="container mx-auto flex flex-col xl:flex-row items-center  p-2 mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="space-y-5 w-full container ">
          <h2 className=" text-3xl md:text-6xl  xl:w-[35rem] font-bold text-secondary">
            Easy and fast way to Rent your Car
          </h2>
          <p className="text-success text-lg ">
            Rental is the most used car rental service in the UK, Based ratings
            and reviews from real users renta is the top-ranked car rental
            service company. If you are planning to rent a car you can trust us.
          </p>
          <button className="bg-secondary text-white p-3 px-10 text-lg rounded font-semibold cursor-pointer">
            Book a Car
          </button>
          <p className=" text-secondary font-semibold text-lg">
            Choose The Best Cars:
          </p>
          <ul className="flex xl:justify-center gap-x-7 items-center transition-all duration-100 cursor-pointer">
            <li className="hover:border-2 border-success p-2 px-4 rounded ">
              <Image src={car2} alt="car-1" className="w-28  xl:w-full" />
            </li>
            <li className="hover:border-2 border-success p-2 px-4 rounded">
              <Image src={car3} alt="car-2" className="w-28 xl:w-full" />
            </li>
            <li className="hover:border-2 border-success p-2 px-4 rounded">
              <Image src={car1} alt="car-3" className="w-28 xl:w-full" />
            </li>
          </ul>
        </div>
        <div className=" hidden md:block">
          <Image src={Hero_car} className="" alt="hero-car-image" />
          <div className="bg-[#EFF9FF] w-4/12 h-[768px] absolute  -z-50 top-0 right-0 hidden xl:block">
            <span className="bg-[#295AA6] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute top-52 right-44">
              <Image src={hundai} alt="hundai" className="w-10" />
            </span>

            <span className="bg-[#E14437] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute top-52">
              <Image src={renult} alt="renult" />
            </span>
            <span className="bg-[#5F8CFF] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute top-64 -left-44">
              <Image src={kia} alt="kia" />
            </span>
            <span className="bg-[#026155] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute  bottom-28 -left-40">
              <Image src={hundai} alt="hundai" />
            </span>
            <span className="bg-[#FBC201] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute bottom-14 ">
              <Image src={suzuki} alt="suzuki" />
            </span>
            <span className="bg-[#9555FC] w-[40px] h-[40px] border-2 border-black p-1 grid place-items-center rounded-full absolute bottom-14 right-48">
              <Image src={benz} alt="benz" />
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto  mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="grid place-items-center text-center space-y-5 ">
          <p className="font-Serif italic xl:text-3xl">How it Work</p>
          <span className="w-10 bg-secondary h-1 -translate-y-5"></span>

          <h2 className="text-secondary text-3xl xl:text-5xl font-bold">
            Rent with following 4 working steps
          </h2>
          <p className="text-success text-lg xl:w-7/12">
            Sed volupat sed nunc vel porttitor, Fusce placerat non pretium
            vestibulum ante ipsum primis in faucibus orci luctus ultrices
            posuere.
          </p>
          <ul className="flex flex-wrap xl:flex-nowrap  justify-center  gap-x-5  gap-y-8 items-center">
            {Workdata.map(({ id, Icon, head, lead }) => {
              return (
                <li
                  key={id}
                  className="flex items-center flex-col justify-center gap-y-5 w-72 h-72 cursor-pointer p-2 px-4 hover:bg-white hover:shadow-lg  rounded-lg bg-[#F9F9F9]
]"
                >
                  <Icon className="text-secondary text-5xl font-semibold" />
                  <h2 className="text-secondary font-semibold text-2xl">
                    {head}
                  </h2>
                  <p className="">{lead}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-y-5 xl:flex-row   mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="xl:relative">
          <Image src={popular_car} alt="popular-car" className="xl:w-10/12" />
          <div className="bg-[#FFF1F2] w-full h-[550px] absolute -top-10 -left-96 -z-50 hidden xl:block">
            {" "}
          </div>
        </div>
        <div className="space-y-4 grid md:place-items-center xl:place-items-start md:text-center xl:text-start">
          <h2 className="text-secondary font-extrabold text-3xl">
            Most Popular Cars
          </h2>
          <p className="text-success text-lg ">
            {" "}
            The majority have suffered altertoin in some from, injected humour,
            Randomised words which don{"’"}t look in slightly believable.
          </p>
          <p className="text-lg">Hyundai Rspec-2024</p>
          <ul className="space-y-4">
            {Popular.map(({ id, Icon, lead }) => {
              return (
                <li
                  key={id}
                  className="text-secondary  font-semibold flex gap-x-2 items-center 2xl:text-lg"
                >
                  <Icon className="font-semibold" />
                  {lead}
                </li>
              );
            })}
          </ul>
          <button className="bg-secondary p-3 px-10 text-lg text-white font-semibold rounded-md">
            Find a Car
          </button>
        </div>
      </section>

      <section className="container mx-auto mt-10 mb-10 lg:mt-20 lg:mb-20 ">
        <div className="grid place-items-center text-center space-y-2 ">
          <p className="font-Serif italic xl:text-3xl">Rental Deal</p>
          <span className="w-10 bg-secondary h-1 -translate-y-2"></span>

          <h2 className="text-secondary text-3xl xl:text-5xl font-bold">
            Choose your Vehicles
          </h2>
          <ul className="flex flex-wrap xl:flex-nowrap  justify-center  gap-x-5  gap-y-8 items-center">
            {Rental.map(
              ({
                id,
                Img,
                Icon1,
                Icon2,
                Icon3,
                door,
                seat,
                gear,
                button,
                amount,
                head,
              }) => {
                return (
                  <li className="flex flex-col justify-center items-start  gap-y-5 w-80 h-80 lg:w-96 lg:h-96 cursor-pointer  p-2 px-5  hover:bg-white hover:shadow-lg  rounded-lg bg-[#F9F9F9]">
                    <div className="grid place-items-center">
                      <Image
                        src={Img}
                        alt="Rental-cars"
                        className="w-6/12 lg:w-7/12"
                      />
                    </div>
                    <h2 className="text-2xl text-secondary font-semibold">
                      {head}
                    </h2>
                    <div className="flex gap-x-4 ">
                      <p className="flex items-center lg:gap-x-2 text-success font-medium">
                        {" "}
                        <Icon1 className="text-secondary" /> {door}
                      </p>
                      <p className="flex items-center lg:gap-x-2  text-success font-medium">
                        <Icon2 className="text-secondary" /> {seat}
                      </p>
                      <p className="flex items-center lg:gap-x-2  text-success font-medium">
                        <Icon3 className="text-secondary" /> {gear}
                      </p>
                    </div>
                    <p className="font-semibold">{amount}</p>
                    <button className="cursor-pointer p-2 px-4 lg:p-4 lg:px-4 text-white text-xl bg-secondary w-full rounded-md font-semibold">
                      {button}
                    </button>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </section>

      <section className="container mx-auto mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="grid place-items-center text-center space-y-2 ">
          <h2 className="text-secondary text-3xl xl:text-5xl font-bold">
            We Rent a Powerful Machines
          </h2>

          <p className="text-success text-xl xl:w-6/12">
            The majority have suffered altertoin in some from, by injected
            humour, or randomised words which don{"’"}t look even slightly
            believable.{" "}
          </p>
          <h2
            className="text-center text-5xl xl:text-8xl  font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: `url('${text_bg.src}')`,
              backgroundPosition: "center",
              backgroundSize: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            CAR OFF THE ROAD
          </h2>
          <Image src={car_off} alt="car-off-the-road" />
        </div>
      </section>

      <section className="container mx-auto mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="grid place-items-center text-center ">
          <h2 className="text-secondary text-3xl xl:text-5xl font-bold">
            Know More to About
          </h2>

          <p className="text-success text-xl xl:w-6/12 mt-6">
            Sed volupat sed nunc vel porttitor, Fusce placerat non pretium
            vestibulum ante ipsum primis in faucibus orci luctus ultrices
            posuere.
          </p>

          <ul className="flex  flex-col md:flex-row cursor-pointer flex-wrap lg:flex-nowrap items-center justify-center gap-x-6  gap-y-6 mt-10">
            {About.map(({ id, Img, head, lead }) => {
              return (
                <li
                  key={id}
                  className=" md:h-[18rem] md:w-64 xl:h-[28rem] xl:w-96 hover:bg-white hover:shadow-lg  rounded-lg bg-[#F9F9F9]"
                >
                  <Image
                    src={Img}
                    alt="About-car-image"
                    className="rounded-t-lg"
                  />
                  <div className="text-start p-2 px-4 space-y-3">
                    <h2 className="text-secondary font-semibold  xl:text-2xl">
                      {head}
                    </h2>
                    <p className="text-success md:text-sm xl:text-lg xl:w-64">
                      {lead}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="container mx-auto  mt-10 mb-10 lg:mt-20 lg:mb-20">
        <div className="bg-primary p-2 md:py-28  md:px-16 relative overflow-hidden">
          <h2 className="text-secondary text-3xl text-center font-semibold mb-6 ">Contact Us</h2>
          <div className="flex ">
            <form
              action=""
              className="w-full bg-box_color p-4 rounded-lg flex flex-col gap-y-5  text-white"
            >
              <h2 className="font-bold text-xl">Make Your Ride</h2>
              <p>Rent a car to mave form local hosts in 190+ countries.</p>
              <select className="w-full p-3 bg-transparent appearance-none border-white rounded-lg text-white text-xl font-semibold border px-4">
                <option value="Select your Car type ">Select your Car type </option>
                <option value="car-2">car2</option>
                <option value="car-3">car3</option>
              </select>
              <div className=" w-full flex ">
                <span className="w-5/12 h-14 rounded-l-md bg-[#DCDDFF] text-success grid place-items-center text-xl">
                  Pick-up
                </span>
                <input className="w-10/12 p-2 rounded-r-md focus:outline-none border text-success bg-transparent" />
              </div>
              <div className=" w-full flex ">
                <span className="w-5/12 h-14 rounded-l-md bg-[#DCDDFF] text-success grid place-items-center text-xl">
                  Drop-up
                </span>
                <input className="w-10/12 p-2 rounded-r-md focus:outline-none border text-success bg-transparent" />
              </div>
              <div className="flex flex-col md:flex-row gap-y-4  gap-x-5">
              <div className=" w-full flex ">
                <span className="w-5/12 h-14 rounded-l-md bg-[#DCDDFF] text-success grid place-items-center text-lg">
                  Pick-up
                </span>
                <input type="date"  className="w-10/12 p-2 rounded-r-md focus:outline-none border placeholder:text-white text-success bg-transparent" />
              </div>
               <input type="time" className="xl:w-7/12 p-3 md:p-0 rounded-md bg-transparent border border-white "/>
              </div>
              <div className="flex flex-col gap-y-4 md:flex-row  gap-x-5">
              <div className=" w-full flex  ">
                <span className="w-5/12 h-14 rounded-l-md bg-[#DCDDFF] text-success grid place-items-center text-lg">
                  Pick-up
                </span>
                <input type="date"   className="w-10/12  p-2 rounded-r-md focus:outline-none border placeholder:text-white text-success bg-transparent" />
              </div>
               <input type="time" className="md:w-7/12 p-3 md:p-0  rounded-md bg-transparent border border-white "/>
              </div>
              <button type="submit" className="bg-white w-full p-4 px-4 rounded-md md:text-xl text-secondary  font-semibold">CONTINUE CAR RESERVATION</button>
            </form>

            <Image src={yellow_car} alt="yello-car" className="hidden xl:block w-7/12 object-contain  z-50 -mr-16" />

          </div>
            <div className="bg-[#FFEFB8] w-[800px] h-[850px] hidden xl:block rounded-full absolute top-0  -right-96 ">
            </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
