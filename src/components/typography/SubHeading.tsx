interface ISubHeading {
  children: React.ReactNode;
};

export const SubHeading = ({ children }: ISubHeading) => {
  return(
    <h2 className="text-2xl text-left text-white leading-10 tracking-tight text-slate-900 mb-4">
      {children}
    </h2>
  );
};
