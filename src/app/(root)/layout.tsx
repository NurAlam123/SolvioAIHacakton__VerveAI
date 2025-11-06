import Sidebar from "@/components/shared/Sidebar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      {/* Main Content Area */}
      {children}

      {/* Profile, Navigation & Footer */}
      <Sidebar />
    </>
  );
};

export default HomeLayout;
