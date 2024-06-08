const UserRegistration = () => {
  return (
    <div>
      <div className="h-20 p-4 px-5 flex items-center justify-between">
        <img
          className="w-24 h-full mt-5 object-cover"
          src="https://s.yimg.com/fz/api/res/1.2/zr0Tz6LPY1eTgjLMvNsNOg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/77adf658-87d0-3a81-86fd-491c7a02b23e/t_500x300"
          alt="logo"
        />
        <div className="flex">
          <p>Already have an account?</p>
          <a href="">Sign in</a>
        </div>
      </div>
      <div className="h-5/6 w-full  flex gap-5 mb-10">
        <div className=" h-full w-full max-lg:hidden xl:block">
          <img
            className="h-full rounded-3xl object-contain"
            src="https://ir.ebaystatic.com/cr/v/c01/buyer_dweb_business.jpg"
            alt=""
          />
        </div>
        <div className=" bg-slate-600 h-full w-full p-10">
          <form action="">

          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
