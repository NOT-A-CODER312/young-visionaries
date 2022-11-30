import NavigationBar from "../NavigationBar/navigationbar";
import { useRouter } from "next/dist/client/router";
import { useSession } from "next-auth/react";
import useStore from "../zustandStates/store";
import { useEffect } from "react";

export default function Layout(props) {
  const router = useRouter();

  // if (router.pathname === "/404") {
  //   console.log(router.pathname);
  //   return <NotFoundPage />;
  // }

  const { data: session } = useSession();

  const addAdmin = useStore((state) => state.addAdmin);
  const addVotedVp = useStore((state) => state.addVotedVp);
  const addVotedTreasurer = useStore((state) => state.addVotedTreasurer);
  const link = useStore((state) => state.link);

  const getUserData = async () => {
    await fetch(`${link}/user/${session.user.id}`);
    await fetch(`${link}/user/userInfo/${session.user.id}`)
      .then((res) => res.json())
      .then((res) => {
        addAdmin(res.admin);
        addVotedVp(res.votedVP);
        addVotedTreasurer(res.votedTreasurer);
      });
  };

  useEffect(() => {
    (async () => {
      if (session) {
        await getUserData();
      }
    })();
    // console.log("Working in layout");
  }, [link, session]);

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
