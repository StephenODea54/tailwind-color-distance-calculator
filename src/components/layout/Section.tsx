interface ISection {
  children: React.ReactNode;
};

export const Section = ({ children }: ISection) => {
  return(
    <section className="py-px sm:my-0 sm:py-0 lg:flex lg:justify-center">
      {children}
    </section>
  );
};
