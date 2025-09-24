import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#004466] text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Stats Section done */}
        <div>
          <h2 className="mb-4">
            <img src="/eposter1.svg" className="h-15 w-30" />
          </h2>
          <ul className="space-y-2 text-sm">
            {[
              "15324 ePoster Uploaded",
              "1235 ePoster Presenter",
              "56 Upcoming Events",
            ].map((item, i) => (
              <li key={i}>
                <span className="mr-2">•</span>
                <span className="hover:text-orange-400 hover:underline cursor-pointer transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">OUR SERVICES</h3>
          <ul className="space-y-2 text-sm">
            {["ePoster Management", "ePoster Hardware", "ePoster Software"].map(
              (item, i) => (
                <li key={i}>
                  <span className="hover:text-orange-400 cursor-pointer">{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Submissions */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">SUBMISSIONS</h3>
          <ul className="space-y-2 text-sm">
            {["Submit an ePoster", "Submit an Event", "Submit an Enquiry"].map(
              (item, i) => (
                <li key={i}>
                  <span className="hover:text-orange-400 cursor-pointer">{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Login + Social */}
        <div>
          <h3 className="text-lg font-semibold text-orange-400 mb-4">LOGIN</h3>
          <ul className="space-y-2 text-sm mb-4">
            {["Presenter Login", "Reviewer Login"].map((item, i) => (
              <li key={i}>
                <span className="hover:text-orange-400 cursor-pointer">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#004466] hover:bg-orange-400 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-8 pt-4 text-center text-xs text-gray-300">
        <p>
          Anti-spam Policy | Terms of Service | Privacy Policy | Cookie Policy |
          GDPR Compliance | Abuse Policy
        </p>
        <p className="mt-2">© 2023, SaaCraft Studio | All Rights Reserved.</p>
      </div>
    </footer>
  );
}
