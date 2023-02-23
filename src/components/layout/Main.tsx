interface IMain {
  children: React.ReactNode;
};

export const Main = ({ children }: IMain) => {
  return(
    <main className="font-proxima-nova-regular text-white min-h-screen lg:pt-24 pb-px sm:pt-40 bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
      {children}
    </main>
  );
};
