"use client";

const CookieConsentButton = (props) => {
  return (
    <button
      onClick={() => props.action(true)}
      className={` p-3 text-lg text-black rounded-lg h-15 bg-slate-50`}
    >
      I like Cookies
    </button>
  );
};

export default CookieConsentButton;
