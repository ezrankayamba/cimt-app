import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/react";
import SideToggle from "../components/SideToggle";
import { addCircle } from "ionicons/icons";
const Church: React.FC = () => {
  const members = [
    {
      name: "Theodor Zani",
      cell: "Furaha",
    },
    {
      name: "Ezra Nkayamba",
      cell: "Furaha",
    },
    {
      name: "Felis Chengula",
      cell: "Tumaini",
    },
    {
      name: "Mama Mwakanyamale",
      cell: "Upendo",
    },
  ];
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <SideToggle />
          <IonTitle>Church</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSearchbar></IonSearchbar>
        <IonList lines="full">
          {members.map((m) => (
            <IonItem key={m.name} detail>
              <IonLabel>
                <IonText>{m.name}</IonText>
                <p>{m.cell}</p>
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
export default Church;
