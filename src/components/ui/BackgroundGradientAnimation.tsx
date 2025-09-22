const BackgroundGradientAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75 rounded-3xl">
      {children}
    </div>
  );
};

export { BackgroundGradientAnimation };