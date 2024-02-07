import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import successPopup from "../components/SuccessPopup";
import SuccessPopup from "../components/SuccessPopup";
import ErrorPopup from "../components/ErrorPopup";
import { useNavigate } from "react-router-dom";
import BASEURL from "../../utils/helper";
export default function SendMoney() {
  const [amount, setAmount] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [search] = useSearchParams();
  const username = search.get("username");
  const name = search.get("name");
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
          <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col space-y-1.5 p-2">
              <h2 className="text-3xl font-bold text-center">Send Money</h2>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-2xl text-white">A</span>
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Amount (in Rs)
                  </label>
                  <input
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    value={amount}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    id="amount"
                    placeholder="Enter amount"
                  />
                </div>
                <button
                  onClick={async () => {
                    try {
                      await axios.post(
                        BASEURL + "/account/transfer",
                        {
                          to: username,
                          amount: Number(amount),
                        },
                        {
                          headers: {
                            authorization:
                              "Bearer " + localStorage.getItem("token"),
                          },
                        }
                      );
                      setSuccess(true);
                      setTimeout(() => navigate("/dashboard"), 2000);
                    } catch (error) {
                      if (error.response.data.message) {
                        setErrorMessage(error.response.data.message);
                      } else setErrorMessage("It's not you but us...");
                    } finally {
                      setTimeout(() => {
                        setAmount(0);
                        setErrorMessage("");
                      }, 3000);
                    }
                  }}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                >
                  Initiate Transfer
                </button>
                {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
                {success && <SuccessPopup successMessage={"Done"} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
