import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonThumbnail,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
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
        <IonGrid>
          <IonRow>
            <IonCol sizeLg="8">
              <IonImg src="../assets/img/image.jpg" />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};
export default Home;
