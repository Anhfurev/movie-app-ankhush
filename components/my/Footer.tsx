import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full bg-indigo-700 mt-[51px] py-10 text-[#FAFAFA] h-[290px ] ">
      <div className="flex justify-between max-w-[1280px] m-auto">
        <div className="gap-[12px]">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.83268 1.66663V18.3333M14.166 1.66663V18.3333M1.66602 9.99996H18.3327M1.66602 5.83329H5.83268M1.66602 14.1666H5.83268M14.166 14.1666H18.3327M14.166 5.83329H18.3327M3.48268 1.66663H16.516C17.5193 1.66663 18.3327 2.47998 18.3327 3.48329V16.5166C18.3327 17.5199 17.5193 18.3333 16.516 18.3333H3.48268C2.47936 18.3333 1.66602 17.5199 1.66602 16.5166V3.48329C1.66602 2.47998 2.47936 1.66663 3.48268 1.66663Z"
                stroke="#FAFAFA"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[#FAFAFA] italic font-extrabold ml-[8px]">
              Movie Z
            </p>
          </div>
          <div>
            <p className="text-[#FAFAFA]">
              © 2024 Movie Z. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex gap-[96px] justify-center">
          <div className="flex flex-col">
            <div>
              <div>
                <p>Contact Information</p>
              </div>
              <div className="flex items-center gap-[12px] mt-[12px]">
                <div>
                  <Mail strokeWidth={1.5} />
                </div>
                <div>
                  <p>Email:</p>
                  <p>support@movieZ.com</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[12px] mt-[12px]">
              <div>
                <Phone strokeWidth={1.5} />
              </div>
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>

          <div>
            <p>Follow us</p>
            <div className="flex gap-[12px]">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
