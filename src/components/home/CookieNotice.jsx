import { useState } from "react";
import { X } from "lucide-react";
import { BiSolidMessageAlt } from "react-icons/bi";
import { FaCookieBite } from "react-icons/fa";

const CookieNotice = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {/* Cookie Notice Box (bottom-left) */}
      {visible && (
        <div className="fixed bottom-4 left-4 max-w-sm bg-white border border-gray-200 shadow-xl rounded-lg p-4 z-50">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-2">
              <span className="text-blue-500">
                <FaCookieBite />
              </span>
              <div>
                <h4 className="font-semibold text-sm text-gray-900 mb-1">
                  Cookie Notice
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  We use cookies to enhance your experience on our site. By
                  continuing to browse, you agree to our use of cookies.{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
            >
              <X className="w-6 h-4 " />
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              onClick={() => setVisible(false)}
              className="btn btn-sm bg-blue-400 text-white hover:bg-blue-500 shadow-xl shadow-blue-300 rounded-full "
            >
              Accept
            </button>
          </div>
        </div>
      )}

      {/* Fixed Blue Box (bottom-right) */}
      <div className="fixed bottom-4 right-4 w-16 h-16 bg-blue-500 rounded-full shadow-lg z-50 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition">
        <BiSolidMessageAlt className="text-white text-3xl" />
      </div>
    </>
  );
};

export default CookieNotice;
