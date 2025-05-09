<<<<<<< HEAD
import SideNav from "@/app/ui/dashboard/sidenav";

export const experimental_ppr = true;
=======
import SideNav from '@/app/ui/dashboard/sidenav';
 
>>>>>>> 42449fa6a9d05c57e7cd8f273b1e6269dc91e9b8
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 42449fa6a9d05c57e7cd8f273b1e6269dc91e9b8
