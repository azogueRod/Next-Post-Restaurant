import { SideMenuCart } from "@/modules/cart";
import { Toaster } from "sonner";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="relative">
        <Toaster
          richColors
          position='top-right'
          closeButton
          style={{ position: "absolute" }}
        />
        <div className="grid grid-cols-12 ">
          {/*PAGINA PRINCIPAL*/}
          <div className="col-span-9 h-screen overflow-y-scroll overflow-hidden">
            {children}

          </div>
          {/* CARRITO*/}
          <SideMenuCart />
        </div>
      </main>
    </>
  );

}