import React from 'react';

const LoginLeft = () => {
  return (
    // Hidden on mobile, shown as a flex container on large screens
    <div className="hidden lg:flex lg:w-2/5 bg-[#121212] flex-col justify-between p-12 shrink-0 select-none">
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          <path
            d="M16.6963 0.388916C16.4591 0.388916 16.2503 0.573766 16.2503 0.758616V13.6352H6.56802C6.27465 13.6352 5.99776 13.8114 5.89136 14.0998C5.77635 14.3969 5.84891 14.7272 6.07744 14.9557L25.7574 31.5746C25.9859 31.7761 26.2793 31.7761 26.5078 31.6126C26.745 31.4278 26.8671 31.1993 26.8671 30.9108V17.7748H34.8015C35.0949 17.7748 35.3718 17.5986 35.4782 17.3016C35.5932 17.0045 35.5206 16.6742 35.2921 16.4457L17.0254 0.552466C16.933 0.451516 16.8197 0.388916 16.6963 0.388916ZM20.3106 15.1669C20.5478 15.1669 20.7479 14.9907 20.7479 14.7892V4.76736L32.2225 16.1709H22.2742C22.0457 16.1709 21.8456 16.3471 21.8456 16.5486V26.4961L11.4469 15.1669H20.3106Z"
            transform="translate(-5.5 -0.388916)"
            className="fill-[#A855F7]"
          />
        </svg>
        <span className="text-4xl font-medium text-white">NextHire</span>
      </div>
      <div>
        <h2 className="text-3xl text-white font-medium leading-snug mb-3 tracking-tight">
          Craft the ultimate resume with AI
        </h2>
        <p className="text-zinc-300">
          Analyze your resume against industry standards, optimize for ATS keywords, and generate professional descriptions instantly to land your dream job.
        </p>
        <p className="text-zinc-300 text-sm mt-12">
          Copyright {new Date().getFullYear()} NextHire
        </p>
      </div>
    </div>
  );
};

export default LoginLeft;