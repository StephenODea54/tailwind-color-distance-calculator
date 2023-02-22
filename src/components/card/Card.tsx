interface ICard {
  children: React.ReactNode;
}

export const Card = ({ children }: ICard) => {
  return(
    <div className="border border-gray-600 rounded-lg py-3 px-12 bg-gray-800 mx-6">
      {children}
    </div>
  );
};
