interface ICardContainer {
  children: React.ReactNode;
};

export const CardContainer = ({ children }: ICardContainer) => {
  return(
    <div className="flex space-x-8">
      {children}
    </div>
  );
};
