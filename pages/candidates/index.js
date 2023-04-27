import { useState, useEffect } from "react";
import useStore from "../../components/zustandStates/store";
import styles from "./candidates.module.css";
import { useSession } from "next-auth/react";

export default function Candidates() {
  const { data: session } = useSession();

  let candidatesList = [];
  const [vpList, setVPList] = useState([]);
  const [tresList, setTresList] = useState([]);

  const link = useStore((state) => state.link);
  const votedVp = useStore((state) => state.votedVp);
  const votedTreasurer = useStore((state) => state.votedTreasurer);
  const addVotedVp = useStore((state) => state.addVotedVp);
  const addVotedTreasurer = useStore((state) => state.addVotedTreasurer);
  const [switchVar, setSwitchVar] = useState(true);

  const getCandidates = async () => {
    await fetch(`${link}/candidate`)
      .then((res) => res.json())
      .then((res) => {
        candidatesList = res;
        setVPList(res.filter((objVP) => objVP.position === "Vice President"));
        setTresList(res.filter((objVP) => objVP.position === "Treasurer"));

        // console.log(res, "dsfsd", res);
      });
  };

  useEffect(() => {
    (async () => {
      await getCandidates();
    })();
  }, [votedVp, votedTreasurer, switchVar]);

  const onClickHandlerVoteVp = async (id) => {
    if (!votedVp) {
      const postData = await fetch(`${link}/candidate/${id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      // console.log(votedVp);
      setSwitchVar(!switchVar);

      const postData2 = await fetch(`${link}/user/vp/${session.user.id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // id: session.user.id,
        }),
      });

      addVotedVp(true);
      console.log(votedVp, "voted", session.user.id);
    }
  };
  const onClickHandlerVoteT = async (id) => {
    if (!votedTreasurer) {
      const postData = await fetch(`${link}/candidate/${id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      // console.log(votedVp);
      setSwitchVar(!switchVar);

      const postData2 = await fetch(`${link}/user/t/${session.user.id}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // id: session.user.id,
        }),
      });

      console.log(votedTreasurer, "voted", session.user.id);
      addVotedTreasurer(true);
      console.log(votedTreasurer, "voted", session.user.id);
    }
  };

  if (!session) {
    return <div>Please log in to see candidates</div>;
  }

  if (session) {
    return (
      <div className={styles.mainDiv}>
        <div className={styles.mainText}>Candidates</div>
        <div>
          <div className={styles.positionText}>Vice President</div>
          {vpList.map((obj) => (
            <div className={styles.candidateBackground}>
              <div> {obj.Name}</div>
              <div>{obj.votes}</div>
              <button
                className={votedVp ? "displayNone" : styles.button}
                onClick={() => onClickHandlerVoteVp(obj._id)}
              >
                +
              </button>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.mainText}>Treasurer</div>
          {tresList.map((obj) => (
            <div className={styles.candidateBackground}>
              <div> {obj.Name}</div>
              <div>{obj.votes}</div>
              <button
                className={votedTreasurer ? "displayNone" : styles.button}
                onClick={() => onClickHandlerVoteT(obj._id)}
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
