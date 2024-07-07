import ReferLogo from "../assets/refer-lifecycle.png";
import ProfileLogo from "../assets/profile.png";
import ClipBoardLogo from "../assets/clipboard.png";
import walletLogo from "../assets/wallet.png";
import { useState } from "react";
import Modal from "../pages/Modal";

function Refer() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h3 className="text-2xl font-semibold">
        How Do I <span className="text-blue-700">Refer?</span>
      </h3>
      <img src={ReferLogo} alt="Refer" />
      <div>
        <img
          src={ProfileLogo}
          alt="profile logo"
          className="-translate-x-96 -translate-y-96 pl-5 pb-6 pt-4"
          style={{ height: "66.96", width: "88px" }}
        />
      </div>
      <p className="overflow-y-auto -translate-x-96 -translate-y-96">
        Submit referrals easily via
      </p>
      <p className="overflow-y-auto -translate-x-96 -translate-y-96">
        our website’s referral
      </p>
      <p className="overflow-y-auto -translate-x-96 -translate-y-96">
        section.
      </p>
      <div>
        <img
          src={ClipBoardLogo}
          alt="ClipBoard logo"
          className="-translate-y-[38rem] pr-3 pb-8 pt-4"
          style={{ height: "67.38", width: "65.11px" }}
        />
      </div>
      <p className="overflow-y-auto -translate-y-[39rem] pr-5">
        Earn rewards once your
      </p>
      <p className="overflow-y-auto -translate-y-[39rem] pr-5">
        referral joins an Accredian
      </p>
      <p className="overflow-y-auto -translate-y-[39rem] pr-5">program.</p>
      <div>
        <img
          src={walletLogo}
          alt="Wallet logo"
          className="translate-x-96 -translate-y-[52rem] pb-4 pr-3"
          style={{ height: "67.25", width: "65px" }}
        />
      </div>
      <p className="overflow-y-auto translate-x-96 -translate-y-[52rem] pr-2">
        Both parties receive a
      </p>
      <p className="overflow-y-auto translate-x-96 -translate-y-[52rem] pr-2">
        bonus 30 days after
      </p>
      <p className="overflow-y-auto translate-x-96 -translate-y-[52rem] pr-2">
        program enrollment.
      </p>
      <div>
        <button
          className="bg-blue-600 hover:bg-blue-400 text-white px-10 py-2 rounded -translate-y-[30rem]"
          style={{ width: "236px", height: "64px" }}
          onClick={openModal} // Open modal on button click
        >
          Refer Now
        </button>
        {showModal && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default Refer;
