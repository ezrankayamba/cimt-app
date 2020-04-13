import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
} from "@ionic/react";
import SideToggle from "../components/SideToggle";
const Home: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <SideToggle />
          <IonTitle>CIMT</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg className="ion-padding" src="../assets/img/image.jpg" />
      </IonContent>
    </>
  );
};
export default Home;
