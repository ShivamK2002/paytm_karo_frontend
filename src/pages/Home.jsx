import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-24 p-5 md:pl-32 md:w-52">
          <img src="../img/paytm_upi.avif" alt="" />
        </div>
        <div className=" p-5 space-y-10 md:flex md:pt-16 md:pl-32 md:pr-32 md:justify-between md:space-x-10">
          <div className=" ">
            <div className="text-6xl font-bold">
              India's Most-loved <br />
              Payments App
            </div>
            <div className="pt-8 text-2xl">
              Recharge & pay bills, book flights & movie tickets, <br />
              open a savings account, invest in stocks & mutual <br /> funds,
              and do a lot more.
            </div>
          </div>

          <div className="md:max-w-[500px]">
            <img src="../img/paytm_home.avif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
