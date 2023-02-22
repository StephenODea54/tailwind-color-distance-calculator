interface IMain {
  children: React.ReactNode;
};

export const Main = ({ children }: IMain) => {
  return(
    <main className="text-white px-4 sm:px-6 md:max-w-2xl lg:max-w-4xl lg:px-12 mx-auto">
      {children}
    </main>
  );
};
