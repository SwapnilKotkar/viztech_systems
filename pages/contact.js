import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl px-4 mb-20 md:px-8 mx-auto space-y-20">
      <div className="bg-banner py-5 lg:py-10 flex justify-center rounded-xl rounded-bl-[100px] rounded-tr-[100px]">
        <p className="text-white font-bold text-xl lg:text-4xl">Contacts</p>
      </div>
      <div className="max-w-screen-md grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto">
        <div className="flex p-10 space-x-5 rounded-xl shadow-2xl">
          <div>
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.3999 33.3512C39.3999 34.0885 39.9924 34.6678 40.7166 34.6678C42.2176 34.6678 43.4289 35.8923 43.4289 37.3802C43.4289 38.1043 44.0214 38.6968 44.7456 38.6968C45.4697 38.6968 46.0622 38.1043 46.0622 37.3802C46.0622 34.4308 43.6659 32.0345 40.7166 32.0345C39.9924 32.0345 39.3999 32.627 39.3999 33.3512ZM60.8352 38.6968C61.5726 38.6968 62.1519 38.1043 62.1519 37.3802C62.1519 25.5565 52.5402 15.9448 40.7166 15.9448C39.9924 15.9448 39.3999 16.5373 39.3999 17.2615C39.3999 17.9857 39.9924 18.5782 40.7166 18.5782C51.0919 18.5782 59.5186 27.018 59.5186 37.3802C59.5186 38.1043 60.1111 38.6968 60.8352 38.6968Z"
                fill="#6C63FF"
              />
              <path
                d="M51.4737 37.3802C51.4737 38.1043 52.0662 38.6968 52.7904 38.6968C53.5146 38.6968 54.1071 38.1043 54.1071 37.3802C54.1071 29.9937 48.1031 23.9897 40.7166 23.9897C39.9924 23.9897 39.3999 24.5822 39.3999 25.3063C39.3999 26.0437 39.9924 26.623 40.7166 26.623C46.6547 26.623 51.4737 31.4552 51.4737 37.3802ZM40.7166 7.9C39.9924 7.9 39.3999 8.4925 39.3999 9.21666C39.3999 9.94083 39.9924 10.5333 40.7166 10.5333C55.5291 10.5333 67.5766 22.5808 67.5766 37.3802C67.5766 38.1043 68.1559 38.6968 68.8932 38.6968C69.6174 38.6968 70.2099 38.1043 70.2099 37.3802C70.2099 21.1193 56.9774 7.9 40.7166 7.9ZM53.5804 51.2578L51.8556 52.1927C48.9457 53.7858 45.2591 53.246 42.9022 50.8892L28.9982 36.9852C26.6414 34.6283 26.1016 30.9417 27.6947 28.0187L28.6295 26.307C29.6829 24.3583 30.0647 22.1727 29.7487 19.987C29.4502 17.8057 28.4415 15.7836 26.8784 14.2332C24.9561 12.3108 22.4017 11.2575 19.6762 11.2575C16.9507 11.2575 14.3832 12.3108 12.4609 14.2332L11.7894 14.9178C8.23438 18.4728 7.82622 24.5953 10.6307 32.1793C13.2772 39.421 18.6097 47.2683 25.6144 54.273C36.2925 64.9512 48.1821 71.1 56.7141 71.1C60.0847 71.1 62.9419 70.1388 64.9696 68.1112L65.6542 67.4265C66.6024 66.4794 67.3544 65.3546 67.8672 64.1165C68.3801 62.8784 68.6437 61.5513 68.6431 60.2112C68.6246 57.5124 67.552 54.9278 65.6542 53.009C62.4811 49.8358 57.5172 49.1248 53.5804 51.2578Z"
                fill="url(#paint0_linear_7_963)"
                fillOpacity="0.66"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7_963"
                  x1="9"
                  y1="8"
                  x2="70"
                  y2="71"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9A7AF1" />
                  <stop offset="1" stopColor="#2400FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-700  text-xl lg:text-2xl">
              Call us today
            </p>
            <div>
              <p className="text-gray-700 text-base lg:text-lg">
                +91 11111 22222
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                +91 33333 44444
              </p>
            </div>
          </div>
        </div>
        <div className="flex p-10 space-x-5 rounded-xl shadow-2xl">
          <div>
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_972)">
                <path
                  d="M65.8335 13.1667H13.1668C9.52954 13.1667 6.61641 16.1127 6.61641 19.75L6.5835 59.25C6.5835 62.8873 9.52954 65.8333 13.1668 65.8333H65.8335C69.4708 65.8333 72.4168 62.8873 72.4168 59.25V19.75C72.4168 16.1127 69.4708 13.1667 65.8335 13.1667ZM65.8335 26.3333L39.5002 42.7917L13.1668 26.3333V19.75L39.5002 36.2083L65.8335 19.75V26.3333Z"
                  fill="url(#paint0_linear_7_972)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_7_972"
                  x1="7"
                  y1="13"
                  x2="72"
                  y2="66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EE9AE5" />
                  <stop offset="1" stopColor="#6C63FF" />
                </linearGradient>
                <clipPath id="clip0_7_972">
                  <rect width="79" height="79" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-700  text-xl lg:text-2xl">
              Our emails
            </p>
            <div>
              <p className="text-gray-700 text-base lg:text-lg">
                hr@viztech.in
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                viztech2021@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="cols-span-1 lg:col-span-2 flex flex-col justify-center p-10 space-y-3 rounded-xl shadow-2xl">
          <div className="flex justify-center space-x-3">
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.206 20.4018L68.8248 13.1733C68.1873 12.764 67.4942 12.4487 66.7669 12.2371C66.0424 12.0027 65.2883 11.8723 64.5272 11.85H37.525L40.6889 31.6H64.5272C65.175 31.6 65.9847 31.4539 66.7629 31.2129C67.5411 30.972 68.2915 30.6402 68.8209 30.2807L78.2021 23.0443C78.7354 22.6849 79 22.2069 79 21.725C79 21.2431 78.7354 20.7652 78.206 20.4018ZM33.575 3.95001H29.625C29.1012 3.95001 28.5988 4.15809 28.2285 4.52848C27.8581 4.89886 27.65 5.40121 27.65 5.92501V19.75H14.4728C13.8171 19.75 13.0113 19.8962 12.2331 20.1411C11.451 20.3781 10.7045 20.7059 10.1752 21.0733L0.79395 28.3018C0.2607 28.6612 0 29.1431 0 29.625C0 30.103 0.2607 30.5809 0.79395 30.9483L10.1752 38.1847C10.7045 38.5441 11.451 38.8759 12.2331 39.1129C13.0113 39.3539 13.8171 39.5 14.4728 39.5H27.65V73.075C27.65 73.5988 27.8581 74.1012 28.2285 74.4715C28.5988 74.8419 29.1012 75.05 29.625 75.05H33.575C34.0988 75.05 34.6012 74.8419 34.9715 74.4715C35.3419 74.1012 35.55 73.5988 35.55 73.075V5.92501C35.55 5.40121 35.3419 4.89886 34.9715 4.52848C34.6012 4.15809 34.0988 3.95001 33.575 3.95001Z"
                fill="url(#paint0_linear_7_979)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7_979"
                  x1="-1.86895e-06"
                  y1="10.5"
                  x2="79"
                  y2="75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#EE9AE5" />
                  <stop offset="1" stopColor="#6C63FF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="flex items-center font-bold text-gray-700 text-xl lg:text-2xl">
              Call us today
            </p>
          </div>
          <div className="flex justify-center space-x-5 lg:space-x-10">
            <div>
              <p className="text-gray-700 font-semibold text-lg lg:text-xl">
                UK office
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                #33 Cleverland road, London UK DA16 3JP
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold text-lg lg:text-xl">
                India office
              </p>
              <p className="text-gray-700 text-base lg:text-lg">
                #27 Opp to IBM Office Bannergatta road, Banglore 27
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row space-x-2">
        <div className="flex-none lg:flex-1 ">
          <p className="text-gray-700 font-bold text-3xl">Where are We</p>
          <iframe
          className="w-full h-[300px] lg:h-[480px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d802.7710846863996!2d77.60192182169848!3d12.924749226757324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a989010079%3A0x9af577c65b378712!2sSubramanya%20Arcade%20Tower-B%2C%20Bannerghatta%20Main%20Rd%2C%20OLd%20Gurappanapalya%2C%201st%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560029!5e1!3m2!1sen!2sin!4v1667325815492!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-none lg:flex-1 my-5 lg:my-0">
          <p className="text-[#9A7AF1] font-bold text-3xl">Send us a message</p>
          <div className="px-4 py-6 bg-white rounded-md">
            <form className="space-y-8">
              <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  className="p-4 bg-[#E6E6E6] flex-none lg:flex-1 rounded-md"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-4 bg-[#E6E6E6] w-full rounded-md"
              />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full h-40 bg-[#E6E6E6] text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 p-4"
                ></textarea>
              <div>
                <button className="px-7 lg:px-10 py-3 lg:py-4 text-sm lg:text-base font-semibold text-white bg-[#6B54F5] hover:bg-[#4e38cc] rounded-md">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
