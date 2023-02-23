interface ICard {
  children: React.ReactNode;
}

export const Card = ({ children }: ICard) => {
  return(
    <div className="flex-none sm:px-4 lg:mt-0 lg:w-1/2 lg:max-w-[30rem]">
      <div className="-mx-px bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] p-6 ring-1 ring-white/[0.15] sm:mx-0 sm:rounded-2xl sm:p-8 lg:p-10">
        {children}
      </div>
    </div>
  );
};
