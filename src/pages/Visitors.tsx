import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import SideToggle from "../components/SideToggle";
import { addCircle } from "ionicons/icons";
const Visitors: React.FC = () => {
  const visitors = [
    { name: "Erick Mbita", from: "Tabora" },
    { name: "Esther Albert", from: "Arusha" },
  ];
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <SideToggle />
          <IonTitle>Visitors</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSearchbar></IonSearchbar>
        <IonList lines="full">
          {visitors.map((v) => (
            <IonItem detail>
              <IonLabel>
                <IonText>{v.name}</IonText>
                <p>{v.from}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </>
  );
};
export default Visitors;
