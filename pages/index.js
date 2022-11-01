import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SeeCharitiesButton from "../components/Buttons/seeCharities";

export default function Home() {
  return (
    <div className="mainINdexDiv">
      <div className="mainImageHeader">
        <Image
          // src="/netflix.jpg"
          src="/indexImage1.jpg"
          layout="responsive"
          height={40}
          width={70}
          // quality={100}
          priority
        />
        <div className="shade"></div>
        <div className="textOverlay">
          <div>Young Visionaries Youth Club</div>
          <div>
            <SeeCharitiesButton link="/events" />
          </div>
        </div>
      </div>
      <div className="secondSection">
        <div className="secondImage">
          <Image
            // src="/netflix.jpg"
            src="/indexImage2.webp"
            layout="responsive"
            height={40}
            width={70}
            // quality={100}
            priority
          />
        </div>
        <div>
          <div className="secondSectionText">About Club</div>
          <p className="secondSectionTextDes">
            The Young Visionaries Youth Club originated in Hayes, Clarendon and
            was established in February 2022. Once registered as a member, your
            purpose is to help bring unity among the youths in the community of
            Hayes, through activities such as games, group trips and community
            outreach (fundraisers, and giving back to the community) in which
            these events will be planned and discussed through group meetings.​
            ​
          </p>
        </div>
      </div>
    </div>
  );
}
