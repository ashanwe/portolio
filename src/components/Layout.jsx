const Layout = () => {
  return (
    <>
      <div className="hidden md:block fixed pl-10 bg-background z-50 h-screen right-0"></div>
      <div className="fixed w-full flex  pr-10 pl-[10%] h-screen">
        <div className="w-full md:w-1/2 h-screen border-x border-stone-900"></div>
        <div className="w-1/10 hidden xl:block"></div>
        <div className="hidden md:w-1/2 md:block h-screen border-r xl:border-x border-stone-900"></div>
      </div>
      <div className="hidden md:block fixed pr-[10%] bg-background z-50 h-screen left-0"></div>
    </>
  );
};

export default Layout;
