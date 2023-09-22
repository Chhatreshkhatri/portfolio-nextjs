import * as React from "react";
export const B4a = ({ className, ...rest }) => (
  <svg
    width="32px"
    height="32px"
    viewBox="0 0 20 9"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={`${className} w-full  h-full`}
  >
    <path
      d="M0.924805 8V-2.38419e-07H1.84668V2.95312H1.9248C1.99251 2.84896 2.08626 2.71615 2.20605 2.55469C2.32845 2.39062 2.50293 2.24479 2.72949 2.11719C2.95866 1.98698 3.26855 1.92188 3.65918 1.92188C4.16439 1.92188 4.6097 2.04818 4.99512 2.30078C5.38053 2.55339 5.68132 2.91146 5.89746 3.375C6.11361 3.83854 6.22168 4.38542 6.22168 5.01563C6.22168 5.65104 6.11361 6.20182 5.89746 6.66797C5.68132 7.13151 5.38184 7.49089 4.99902 7.74609C4.61621 7.9987 4.1748 8.125 3.6748 8.125C3.28939 8.125 2.98079 8.0612 2.74902 7.93359C2.51725 7.80339 2.33887 7.65625 2.21387 7.49219C2.08887 7.32552 1.99251 7.1875 1.9248 7.07812H1.81543V8H0.924805ZM1.83105 5C1.83105 5.45312 1.89746 5.85286 2.03027 6.19922C2.16309 6.54297 2.3571 6.8125 2.6123 7.00781C2.86751 7.20052 3.18001 7.29688 3.5498 7.29688C3.93522 7.29688 4.25684 7.19531 4.51465 6.99219C4.77507 6.78646 4.97038 6.51042 5.10059 6.16406C5.2334 5.8151 5.2998 5.42708 5.2998 5C5.2998 4.57812 5.2347 4.19792 5.10449 3.85937C4.97689 3.51823 4.78288 3.2487 4.52246 3.05078C4.26465 2.85026 3.94043 2.75 3.5498 2.75C3.1748 2.75 2.8597 2.84505 2.60449 3.03516C2.34928 3.22266 2.15658 3.48568 2.02637 3.82422C1.89616 4.16016 1.83105 4.55208 1.83105 5ZM7.42871 6.35937V5.5625L10.9443 -2.38419e-07H11.5225V1.23438H11.1318L8.47559 5.4375V5.5H13.21V6.35937H7.42871ZM11.1943 8V6.11719V5.74609V-2.38419e-07H12.1162V8H11.1943ZM16.4551 8.14063C16.0749 8.14063 15.7298 8.06901 15.4199 7.92578C15.11 7.77995 14.8639 7.57031 14.6816 7.29688C14.4993 7.02083 14.4082 6.6875 14.4082 6.29687C14.4082 5.95312 14.4759 5.67448 14.6113 5.46094C14.7467 5.24479 14.9277 5.07552 15.1543 4.95312C15.3809 4.83073 15.6309 4.73958 15.9043 4.67969C16.1803 4.61719 16.4577 4.56771 16.7363 4.53125C17.1009 4.48437 17.3965 4.44922 17.623 4.42578C17.8522 4.39974 18.0189 4.35677 18.123 4.29687C18.2298 4.23698 18.2832 4.13281 18.2832 3.98437V3.95312C18.2832 3.56771 18.1777 3.26823 17.9668 3.05469C17.7585 2.84115 17.4421 2.73437 17.0176 2.73437C16.5775 2.73437 16.2324 2.83073 15.9824 3.02344C15.7324 3.21615 15.5566 3.42187 15.4551 3.64062L14.5801 3.32812C14.7363 2.96354 14.9447 2.67969 15.2051 2.47656C15.4681 2.27083 15.7546 2.1276 16.0645 2.04687C16.377 1.96354 16.6842 1.92188 16.9863 1.92188C17.179 1.92188 17.4004 1.94531 17.6504 1.99219C17.903 2.03646 18.1465 2.12891 18.3809 2.26953C18.6178 2.41016 18.8145 2.6224 18.9707 2.90625C19.127 3.1901 19.2051 3.57031 19.2051 4.04688V8H18.2832V7.1875H18.2363C18.1738 7.31771 18.0697 7.45703 17.9238 7.60547C17.778 7.75391 17.584 7.88021 17.3418 7.98437C17.0996 8.08854 16.804 8.14063 16.4551 8.14063ZM16.5957 7.3125C16.9603 7.3125 17.2676 7.24089 17.5176 7.09766C17.7702 6.95443 17.9603 6.76953 18.0879 6.54297C18.2181 6.31641 18.2832 6.07812 18.2832 5.82812V4.98437C18.2441 5.03125 18.1582 5.07422 18.0254 5.11328C17.8952 5.14974 17.7441 5.18229 17.5723 5.21094C17.403 5.23698 17.2376 5.26042 17.0762 5.28125C16.9173 5.29948 16.7884 5.3151 16.6895 5.32812C16.4499 5.35937 16.2259 5.41016 16.0176 5.48047C15.8118 5.54818 15.6452 5.65104 15.5176 5.78906C15.3926 5.92448 15.3301 6.10937 15.3301 6.34375C15.3301 6.66406 15.4486 6.90625 15.6855 7.07031C15.9251 7.23177 16.2285 7.3125 16.5957 7.3125Z"
      fill=""
    />
  </svg>
);
export const SocialIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...rest}
    className={`w-full h-full ${className}`}
  >
    <path d="M140.892 228.625L151.938 222.108L140.892 215.592V228.625Z" fill="" />
    <path
      d="M145.387 188.19C126.747 188.19 111.641 203.368 111.641 222.095C111.641 240.822 126.747 256 145.387 256C164.026 256 179.133 240.822 179.133 222.095C179.133 203.368 164.026 188.19 145.387 188.19ZM162.26 228.161C162.26 234.002 156.446 234.002 156.446 234.002H134.327C128.514 234.002 128.514 228.161 128.514 228.161V216.043C128.514 210.202 134.327 210.202 134.327 210.202H156.446C162.26 210.202 162.26 216.043 162.26 216.043V228.161Z"
      fill=""
    />
    <path
      d="M256 87.7526C255.998 68.9143 240.891 53.6431 222.254 53.6431C203.617 53.6431 188.508 68.9166 188.508 87.7571C188.508 104.716 200.75 118.784 216.786 121.425L216.979 121.453V97.6165H208.41V87.7526H216.979V80.2409C216.936 79.861 216.914 79.4197 216.914 78.9738C216.914 72.3244 222.247 66.9329 228.825 66.9329C229.142 66.9329 229.457 66.9466 229.77 66.9693L229.73 66.967C232.428 67.0057 235.038 67.2468 237.585 67.6768L237.284 67.6336V76.0279H233.026C232.833 76.0006 232.61 75.9846 232.385 75.9846C229.691 75.9846 227.506 78.1913 227.506 80.9166C227.506 81.0713 227.513 81.2237 227.526 81.3761L227.524 81.3556V87.7526H236.883L235.387 97.6165H227.524V121.453C243.756 118.782 255.998 104.712 256 87.7526Z"
      fill=""
    />
    <path
      d="M76.7552 0C58.1157 0 43.009 15.1777 43.009 33.9048C43.009 52.6319 58.1157 67.8096 76.7552 67.8096C95.3947 67.8096 110.501 52.6319 110.501 33.9048C110.501 15.1777 95.3947 0 76.7552 0ZM67.3168 48.0892H60.739V26.9384H67.3168V48.0892ZM63.8499 24.2896H63.7972C61.4112 24.2896 59.8689 22.6738 59.8689 20.621C59.8689 18.5284 61.464 16.9524 63.8895 16.9524C66.315 16.9524 67.8046 18.5284 67.8573 20.621C67.8705 22.6606 66.3282 24.2896 63.8499 24.2896ZM93.6283 48.0892H86.1672V37.1496C86.1672 34.2889 85.0072 32.3287 82.4367 32.3287C80.4725 32.3287 79.3784 33.6531 78.8775 34.9246C78.693 35.3749 78.7193 36.0106 78.7193 36.6595V48.0892H71.3242C71.3242 48.0892 71.4164 28.6999 71.3242 26.9384H78.7193V30.2627C79.1543 28.8058 81.5139 26.7397 85.284 26.7397C89.9636 26.7397 93.6283 29.7859 93.6283 36.3284V48.0892Z"
      fill=""
    />
    <path
      d="M210.058 131.909C227.273 131.909 241.359 146.061 241.359 163.357V168.271C241.359 185.567 227.273 199.719 210.058 199.719H205.167C187.952 199.719 173.866 185.567 173.866 168.271V163.357C173.866 146.061 187.952 131.909 205.167 131.909H210.058ZM208.228 148.952L207.792 148.952C204.166 148.952 200.54 149.072 200.54 149.072C195.243 149.072 190.949 153.386 190.949 158.708C190.949 158.708 190.839 161.836 190.83 165.194L190.829 165.633C190.829 169.393 190.949 173.281 190.949 173.281C190.949 178.603 195.243 182.917 200.54 182.917C200.54 182.917 203.93 183.037 207.433 183.037C211.175 183.037 215.165 182.917 215.165 182.917C220.462 182.917 224.635 178.723 224.635 173.402C224.635 173.402 224.755 169.557 224.755 165.874L224.753 165.01C224.737 161.705 224.635 158.587 224.635 158.587C224.635 153.266 220.461 149.072 215.165 149.072C215.165 149.072 211.712 148.961 208.228 148.952ZM207.792 152.02C210.766 152.02 214.579 152.118 214.579 152.118C218.922 152.118 221.604 154.813 221.604 159.176C221.604 159.176 221.702 162.941 221.702 165.896C221.702 168.916 221.604 172.813 221.604 172.813C221.604 177.176 218.922 179.871 214.579 179.871C214.579 179.871 211.207 179.954 208.281 179.968L207.497 179.969C204.625 179.969 201.126 179.871 201.126 179.871C196.783 179.871 193.981 177.056 193.981 172.692C193.981 172.692 193.883 168.781 193.883 165.698C193.883 162.813 193.981 159.176 193.981 159.176C193.981 154.813 196.783 152.118 201.126 152.118C201.126 152.118 204.819 152.02 207.792 152.02ZM207.792 157.264C202.993 157.264 199.103 161.173 199.103 165.994C199.103 170.816 202.993 174.725 207.792 174.725C212.591 174.725 216.482 170.816 216.482 165.994C216.482 161.173 212.591 157.264 207.792 157.264ZM207.792 160.314C210.915 160.314 213.447 162.857 213.447 165.994C213.447 169.132 210.915 171.675 207.792 171.675C204.669 171.675 202.138 169.132 202.138 165.994C202.138 162.857 204.669 160.314 207.792 160.314ZM216.897 154.842C215.738 154.842 214.798 155.791 214.798 156.962C214.798 158.132 215.738 159.081 216.897 159.081C218.057 159.081 218.997 158.132 218.997 156.962C218.997 155.791 218.057 154.842 216.897 154.842Z"
      fill=""
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M160.028 0C178.665 0 193.774 15.1797 193.774 33.9048C193.774 52.6299 178.665 67.8096 160.028 67.8096C141.391 67.8096 126.282 52.6299 126.282 33.9048C126.282 15.1797 141.391 0 160.028 0ZM160.011 14.8461C149.533 14.8419 141.046 23.3644 141.046 33.8835C141.046 42.2017 146.355 49.2726 153.749 51.8694C154.744 52.1206 154.592 51.4096 154.592 50.9243V47.6252C148.842 48.302 148.609 44.4792 148.223 43.8407C147.444 42.504 145.601 42.1634 146.152 41.5248C147.461 40.848 148.795 41.6951 150.342 43.9897C151.461 45.6541 153.643 45.3732 154.749 45.0965C154.99 44.0961 155.507 43.2021 156.219 42.5082C150.261 41.4354 147.779 37.7829 147.779 33.4408C147.779 31.3335 148.469 29.3966 149.825 27.8343C148.961 25.2588 149.906 23.0536 150.033 22.7259C152.494 22.5045 155.054 24.4968 155.253 24.6543C156.651 24.2754 158.248 24.0753 160.036 24.0753C161.833 24.0753 163.435 24.2839 164.846 24.6671C165.324 24.3009 167.697 22.5896 169.985 22.7982C170.108 23.126 171.032 25.2801 170.218 27.8215C171.591 29.3881 172.29 31.3421 172.29 33.4535C172.29 37.8042 169.79 41.461 163.816 42.5167C164.812 43.5044 165.43 44.8751 165.43 46.3906V51.1798C165.464 51.5629 165.43 51.9418 166.066 51.9418C173.57 49.4003 178.972 42.2783 178.972 33.8878C178.972 23.3644 170.481 14.8461 160.011 14.8461Z"
      fill=""
    />
    <path
      d="M126.757 99.2599C125.979 99.2159 125.247 98.9521 124.606 98.4245C123.005 97.1493 122.822 94.9069 124.103 93.4119L138.333 76.9233C139.659 75.3843 141.993 75.2084 143.549 76.4396C145.15 77.7147 145.333 79.9572 144.052 81.4522L129.822 97.9408C129.044 98.9081 127.901 99.3478 126.757 99.2599ZM130.554 130.39C129.822 130.654 129.182 131.094 128.724 131.754C127.58 133.38 128.038 135.623 129.731 136.722L148.261 148.638C149.954 149.737 152.288 149.297 153.431 147.671C154.575 146.044 154.118 143.801 152.425 142.702L133.894 130.786C132.888 130.127 131.607 129.995 130.554 130.39ZM138.241 116.276C136.411 116.144 134.901 114.693 134.809 112.891C134.718 110.912 136.319 109.241 138.333 109.153L163.635 108.01C165.694 107.966 167.432 109.461 167.524 111.396C167.615 113.33 166.014 115.045 164.001 115.133L138.699 116.276C138.561 116.276 138.378 116.276 138.241 116.276ZM106.076 78.1544C106.076 78.1544 77.8911 100.711 57.5762 106.427L64.3478 144.417C64.3478 144.417 98.206 145.56 115.364 152.331L106.076 78.1544ZM49.4319 108.669C49.4319 108.669 22.8486 112.099 17.6327 118.695C17.6327 118.695 15.2992 136.986 24.084 148.99C24.084 148.99 30.5811 147.451 37.9933 149.781L36.6207 159.718L46.1833 160.29L46.8697 187.243L66.7728 188.387L49.4319 108.669ZM0.108757 135.579C0.978089 141.647 6.83464 145.912 13.1487 145.076L9.99169 123.048C3.67759 123.883 -0.760575 129.511 0.108757 135.579ZM126.619 112.978C126.208 108.362 121.952 104.932 117.103 105.372L118.658 122.124C123.508 121.684 127.031 117.595 126.619 112.978Z"
      fill=""
    />
  </svg>
);
export const LinkIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    version="1.1"
    {...rest}
    className={`${className} h-full w-full`}
  >
    <path d="M10.406 13.406l2.5-2.531c0.219-0.219 0.469-0.5 0.719-0.813 0.25-0.281 0.531-0.531 0.813-0.75 0.531-0.469 1.156-0.875 1.938-0.875 0.688 0 1.281 0.313 1.719 0.719s0.688 1 0.688 1.688c0 0.281-0.031 0.594-0.125 0.813-0.219 0.438-0.406 0.75-0.594 1-0.094 0.125-0.188 0.25-0.188 0.375 0 0.094 0 0.188 0.063 0.219 0.344 0.844 0.594 1.563 0.75 2.438 0.094 0.344 0.281 0.5 0.594 0.5 0.125 0 0.25-0.031 0.375-0.125 0.25-0.156 0.469-0.406 0.688-0.656 0.125-0.125 0.219-0.25 0.281-0.313 1.125-1.094 1.781-2.656 1.781-4.25 0-1.688-0.688-3.188-1.781-4.281-1.094-1.063-2.625-1.781-4.25-1.781s-3.188 0.656-4.281 1.813l-4.281 4.25c-1.125 1.156-1.75 2.656-1.75 4.25 0 0.469 0.188 1.438 0.5 2.344 0.313 0.875 0.719 1.656 1.25 1.656 0.281 0 0.875-0.469 1.375-1s1-1.125 1-1.344c0-0.156-0.125-0.344-0.25-0.625-0.156-0.281-0.219-0.625-0.219-1.031 0-0.625 0.25-1.25 0.688-1.688zM10.313 25.406l4.281-4.25c1.125-1.094 1.75-2.688 1.75-4.281 0-0.469-0.188-1.406-0.5-2.313-0.281-0.875-0.719-1.688-1.25-1.688-0.219 0-0.875 0.5-1.344 1.031-0.531 0.531-1.031 1.094-1.031 1.313 0 0.156 0.094 0.406 0.25 0.656 0.156 0.281 0.281 0.594 0.281 1-0.031 0.625-0.281 1.25-0.719 1.75l-2.531 2.5c-0.219 0.25-0.469 0.5-0.719 0.781l-0.781 0.781c-0.531 0.5-1.188 0.844-1.969 0.844-1.313 0-2.375-1.031-2.375-2.375 0-0.313 0.063-0.594 0.156-0.813 0.188-0.438 0.375-0.75 0.594-1 0.094-0.125 0.125-0.25 0.125-0.344 0-0.063-0.031-0.125-0.063-0.25-0.375-0.844-0.594-1.563-0.75-2.438-0.063-0.156-0.094-0.281-0.188-0.344-0.094-0.125-0.25-0.156-0.406-0.156-0.125 0-0.219 0.031-0.344 0.125-0.25 0.156-0.5 0.406-0.719 0.656-0.094 0.125-0.219 0.219-0.281 0.281-1.125 1.125-1.781 2.688-1.781 4.281 0 1.656 0.656 3.188 1.781 4.281 1.094 1.094 2.594 1.75 4.25 1.75 1.625 0 3.188-0.625 4.281-1.781z" />
  </svg>
);
export const AlibabaCloudIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-22.98 -3.25 64 64"
    width="32px"
    height="32px"
    fill="currentColor"
    {...rest}
    className={`${className} w-full h-full`}
  >
    <path d="M-14.278 9.1c-2.917.6-6.05 2.93-7.352 5.484s-1.35 3.182-1.35 13.933c0 5.737.096 10.462.24 11.2.856 4.376 4.278 7.798 8.654 8.654 1.326.24 18.585.362 18.585.096 0-.193-1.47-5.978-1.543-6.05-.024-.048-3.086-.723-6.798-1.52-8.654-1.88-8.4-1.808-9.112-2.676l-.627-.747v-17.5l.627-.76c.723-.868.458-.795 9.112-2.676l6.798-1.52C3.03 14.968 4.5 9.182 4.5 9c0-.23-17.62-.12-18.778.12zm27.938.036c.024.434 1.374 5.737 1.52 5.882.048.072 3.35.82 7.304 1.663s7.473 1.7 7.786 1.88c.424.246.78.594 1.037 1.012.386.675.434 1.398.434 9.16s-.048 8.485-.434 9.16a3.17 3.17 0 0 1-1.037 1.012c-.313.17-3.8 1.012-7.786 1.88L15.18 42.46c-.145.145-1.495 5.448-1.52 5.882 0 .265 1.736.313 9.353.24 10.5-.096 10.63-.12 13.306-1.928 1.922-1.323 3.374-3.222 4.146-5.424.554-1.615.554-1.76.554-12.487s0-10.872-.554-12.487a11.01 11.01 0 0 0-4.146-5.424C33.643 9.026 33.523 9 23.013 8.905c-7.617-.072-9.353-.036-9.353.24zM2.9 28.238a1.74 1.74 0 0 0-.048.795c.072.4.506.434 6.17.506l6.075.048V27.9H9.08c-5.038 0-6.075.048-6.17.337z" />
  </svg>
);
export const ResumeIcon = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
      <path d="M1052 4955 c-228 -50 -407 -241 -442 -472 -7 -46 -10 -689 -8 -1968 l3 -1900 27 -74 c63 -173 197 -306 367 -364 l66 -22 1462 -3 c1625 -3 1542 -6 1681 64 130 66 236 192 283 336 l24 73 0 1935 0 1935 -24 73 c-64 196 -229 346 -426 387 -101 21 -2916 21 -3013 0z m2974 -300 c64 -19 127 -73 162 -139 l27 -51 0 -1905 0 -1905 -27 -51 c-35 -66 -98 -120 -162 -139 -75 -22 -2857 -22 -2932 0 -64 19 -127 73 -162 139 l-27 51 0 1905 0 1905 27 51 c34 64 98 120 158 139 70 21 2864 22 2936 0z" />
      <path d="M2394 4216 c-213 -52 -399 -238 -449 -448 -39 -165 0 -350 104 -501 l30 -44 -62 -35 c-237 -136 -412 -350 -492 -598 -37 -117 -40 -221 -6 -269 46 -64 -1 -61 1011 -61 1020 0 966 -4 1014 66 32 47 33 92 6 198 -44 172 -135 344 -249 469 -62 67 -183 160 -262 201 l-55 29 42 63 c71 105 104 216 104 345 0 94 -16 160 -61 258 -72 155 -233 286 -401 326 -75 18 -203 18 -274 1z m259 -329 c67 -28 142 -113 163 -184 57 -195 -85 -387 -286 -387 -257 0 -395 303 -224 494 94 103 219 131 347 77z m92 -907 c190 -60 347 -186 448 -361 15 -25 27 -49 27 -52 0 -4 -310 -7 -690 -7 -379 0 -690 3 -690 7 0 26 97 161 160 223 109 107 228 172 374 206 90 20 281 12 371 -16z" />
      <path d="M1304 1799 c-112 -32 -131 -208 -31 -269 31 -19 60 -20 1287 -20 1227 0 1256 1 1287 20 43 26 65 72 65 133 -1 55 -17 85 -66 121 -27 21 -32 21 -1269 23 -732 1 -1255 -2 -1273 -8z" />
      <path d="M1273 1180 c-43 -26 -65 -72 -65 -133 1 -55 17 -85 66 -121 27 -21 30 -21 1286 -21 1256 0 1259 0 1286 21 49 36 65 66 66 121 0 61 -22 107 -65 133 -31 19 -60 20 -1287 20 -1227 0 -1256 -1 -1287 -20z" />
    </g>
  </svg>
);
export const MailIcon = ({ className, ...rest }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    width="32px"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="currentColor"
      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
    />
  </svg>
);
export const GithubIcon = ({ className, ...rest }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    width="32px"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="currentColor"
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    width="32px"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);
export const TwitterIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 209" {...rest} className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest} className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...rest} className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <path fill="#E74D89" d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z" />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...rest} className={`w-full h-auto ${className}`}>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2" />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
      </circle>
    </mask>
    <circle cx="12" cy="12" r="6" fill="currentColor" mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...rest} className={`w-full h-auto ${className}`}>
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g fill="none" stroke="currentColor" strokeDasharray="2" strokeDashoffset="2" strokeLinecap="round" strokeWidth="2">
      <path d="M0 0">
        <animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1" />
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0" />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0" />
      </path>
      <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" />
      </path>
    </g>
    <g fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" />
      </circle>
    </mask>
    <circle cx="12" cy="12" r="10" fill="currentColor" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0">
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" />
    </circle>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className={`w-full h-auto ${className}`} {...rest}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
