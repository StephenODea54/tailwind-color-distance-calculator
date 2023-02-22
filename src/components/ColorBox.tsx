interface IColorBox {
  backgroundColor: string;
};

export const ColorBox = ({ backgroundColor }: IColorBox) => {
  return(
    <div
      style={{ backgroundColor: backgroundColor}}
      className="self-end border border-gray-600 rounded-lg w-10 h-10"
    />
  );
};
