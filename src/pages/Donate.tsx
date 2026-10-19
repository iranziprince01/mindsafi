import { Building, CreditCard, Heart, Phone, Wallet } from "lucide-react";
import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [notice, setNotice] = useState("");

  const predefinedAmounts = ["10", "25", "50", "100", "250", "500"];

  const mtnContacts = [
    { number: "+250 782 485 566", name: "Sango Fati" },
    { number: "+250 787 771 590", name: "Sibomana Patrick Kabahigi" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const chosen = amount || customAmount;
    if (!chosen || Number(chosen) <= 0) {
      setNotice("Choose an amount to continue.");
      return;
    }
    if (paymentMethod !== "mtn") {
      setNotice("MTN Mobile Money is the available option right now.");
      return;
    }
    setNotice(
      `Send $${chosen} to one of the MTN numbers above, then email the transaction reference to info.mindsafi@gmail.com.`
    );
  };

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-[#002e6d] pb-28 pt-36 text-white sm:pb-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Heart className="mx-auto mb-4 h-8 w-8 text-[#ffe600]" />
              <h1 className="text-4xl font-bold mb-4">
                Make a Difference Today
              </h1>
              <p className="text-xl text-gray-200">
                Your donation helps us provide mental health support to those
                who need it most
              </p>
            </div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Amount Selection */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Select Amount</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  {predefinedAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      className={`p-4 rounded-lg border-2 transition-all ${
                        amount === preset
                          ? "border-[#002e6d] bg-[#002e6d]/5"
                          : "border-gray-200 hover:border-[#002e6d]"
                      }`}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount("");
                      }}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("");
                    }}
                    placeholder="Enter amount"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-[#002e6d] focus:ring-2 focus:ring-[#002e6d]/20"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <button
                    type="button"
                    className={`p-6 rounded-lg border-2 transition-all flex flex-col items-center ${
                      paymentMethod === "mtn"
                        ? "border-[#002e6d] bg-[#002e6d]/5"
                        : "border-gray-200 hover:border-[#002e6d]"
                    }`}
                    onClick={() => setPaymentMethod("mtn")}
                  >
                    <Phone className="w-8 h-8 mb-2 text-[#002e6d]" />
                    <span>MTN Mobile Money</span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <CreditCard className="w-8 h-8 mb-2 text-[#002e6d]" />
                    <span>Credit Card</span>
                    <span className="text-xs text-gray-500 mt-1">
                      Coming Soon
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Wallet className="w-8 h-8 mb-2 text-[#002e6d]" />
                    <span>PayPal</span>
                    <span className="text-xs text-gray-500 mt-1">
                      Coming Soon
                    </span>
                  </button>
                  <button
                    type="button"
                    className="p-6 rounded-lg border-2 transition-all flex flex-col items-center border-gray-200 opacity-50 cursor-not-allowed"
                    disabled
                  >
                    <Building className="w-8 h-8 mb-2 text-[#002e6d]" />
                    <span>Bank Transfer</span>
                    <span className="text-xs text-gray-500 mt-1">
                      Coming Soon
                    </span>
                  </button>
                </div>

                {/* MTN Mobile Money Details */}
                {paymentMethod === "mtn" && (
                  <div className="mt-6 rounded-2xl border border-[#002e6d]/15 bg-[#002e6d]/5 p-6">
                    <h3 className="text-xl font-semibold text-[#002e6d] mb-4">
                      MTN Mobile Money Transfer Details
                    </h3>
                    <div className="space-y-4">
                      {mtnContacts.map((contact, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 rounded-lg shadow"
                        >
                          <p className="font-semibold text-gray-900">
                            {contact.name}
                          </p>
                          <p className="text-[#002e6d] font-mono text-lg">
                            {contact.number}
                          </p>
                        </div>
                      ))}
                      <p className="text-sm text-gray-600 mt-4">
                        Please send your donation to either of the numbers above
                        and send your transaction reference to{" "}
                        <b>info.mindsafi@gmail.com</b> for verification.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#ffe600] px-6 py-3 text-sm font-semibold text-[#002e6d] transition-colors hover:bg-[#fff36a]"
              >
                Complete Donation
              </button>
              {notice && (
                <p className="text-sm leading-relaxed text-gray-600">{notice}</p>
              )}
            </form>
          </div>

          {/* Impact Information */}
          <div className="mt-16 mb-28 grid grid-cols-1 gap-8 text-center sm:mb-32 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">$25</h3>
              <p className="text-gray-600">
                Provides one therapy session for a refugee
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">$100</h3>
              <p className="text-gray-600">
                Supports mental health training for a community worker
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[#002e6d] mb-2">$250</h3>
              <p className="text-gray-600">
                Funds a month of group therapy sessions
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Donate;
