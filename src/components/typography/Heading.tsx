interface IHeading {
  children: React.ReactNode;
};

export const Heading = ({ children }: IHeading) => {
  return(
    <div className="mb-6 flex justify-center items-center space-x-4">
      <img
        src="/tailwindLogo.png"
        alt="Tailwind Logo"
        className="w-12 h-12"
      />
      <h1 className="text-white text-4xl leading-[1.2] tracking-tighter text-slate-900 sm:text-[3.5rem] sm:leading-[4.5rem]">
        {children}
      </h1>
    </div>
  );
};
