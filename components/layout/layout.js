import NavigationBar from "../NavigationBar/navigationbar";
import { useRouter } from "next/dist/client/router";
// import NotFoundPage from "../../pages/404";
// import Footer from "../Footer/footer";

export default function Layout(props) {
  const router = useRouter();

  // if (router.pathname === "/404") {
  //   console.log(router.pathname);
  //   return <NotFoundPage />;
  // }

  return (
    <div>
      <main>
        <NavigationBar />

        {props.children}
        <div className="MainFooter">{/* <Footer /> */}</div>
      </main>
    </div>
  );
}
