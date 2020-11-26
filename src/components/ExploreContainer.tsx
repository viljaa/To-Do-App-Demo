import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonCard>
          <IonCardHeader>
            <IonCardTitle>A Very Simple To-Do App</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Developed by Ville Jaatinen, Arttu Pahkin & Juha Suvanto
      </IonCardContent>
        </IonCard>
  );
};

export default ExploreContainer;
