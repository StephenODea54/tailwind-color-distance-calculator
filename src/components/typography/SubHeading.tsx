interface ISubHeading {
  children: React.ReactNode;
};

export const SubHeading = ({ children }: ISubHeading) => {
  return(
    <h3 className="text-lg font-semibold text-white">
      {children}
    </h3>
  );
};
