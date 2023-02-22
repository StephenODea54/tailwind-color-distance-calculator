interface ISection {
  children: React.ReactNode;
};

export const Section = ({ children }: ISection) => {
  return(
    <section className="mt-16 flex justify-between items-start">
      {children}
    </section>
  );  
};
