const ContainerAuth = ({ children }) => {
  return (
    <section className="min-h-screen font-urbanist grid bg-[#0F0817] text-white justify-stretch justify-items-center items-center p-4 bg-[url(/images/register-bg-mobile.png)] bg-no-repeat bg-right sm:grid-cols-[auto_auto] sm:gap-10 sm:justify-center sm:justify-items-center sm:bg-[url(/images/register-bg-desktop.png)] sm:bg-right-bottom">
      {children}
    </section>
  );
};
export default ContainerAuth;
