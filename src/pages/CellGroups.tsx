import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItemGroup,
  IonGrid,
  IonRow,
  IonCol,
  IonFab,
  IonFabButton,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import SideToggle from "../components/SideToggle";
const CellGroups: React.FC = () => {
  const cells = [
    {
      name: "Furaha",
      members: 67,
      leaders: [
        { position: "Chairman", name: "Magubika Athanasi" },
        { position: "Tresurer", name: "Mama Rose" },
        { position: "Secretary", name: "Erick Kahamgwa" },
      ],
    },
    {
      name: "Upendo",
      members: 59,
      leaders: [
        { position: "Chairman", name: "Magubika Athanasi" },
        { position: "Tresurer", name: "Mama Rose" },
        { position: "Secretary", name: "Erick Kahamgwa" },
      ],
    },
  ];
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <SideToggle />
          <IonTitle>Cell Groups</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {cells.map((cell) => (
          <IonCard key={cell.name}>
            <IonCardHeader>
              <IonCardTitle>{cell.name}</IonCardTitle>
              <IonCardSubtitle>{cell.members} members</IonCardSubtitle>
            </IonCardHeader>

            {cell.leaders.length && (
              <IonCardContent>
                <IonItemGroup>
                  <IonLabel>Leaders</IonLabel>
                  <IonGrid>
                    {cell.leaders.map((l) => (
                      <IonRow key={l.name}>
                        <IonCol>{l.name}</IonCol>
                        <IonCol>{l.position}</IonCol>
                      </IonRow>
                    ))}
                  </IonGrid>
                </IonItemGroup>
              </IonCardContent>
            )}
          </IonCard>
        ))}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={addCircle} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </>
  );
};
export default CellGroups;
