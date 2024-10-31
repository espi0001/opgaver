import CookieConsentPopup from "@/components/CookieConsentPopup";
import If from "../components/If.jsx";

export default function Home() {
  const cookieIsAccepted = true;
  // Opretter en variabel 'cookieIsAccepted' og sætter den til 'true'.

  return (
    <div>
      <If condition={cookieIsAccepted}>
        <CookieConsentPopup />
      </If>
      {/* Renderer CookieConsentPopup-komponenten kun, hvis 'cookieIsAccepted' er sand */}
    </div>
  );
}
