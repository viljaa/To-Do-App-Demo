import React from 'react';
import { IonContent, IonHeader, IonItemDivider, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListContainer from '../components/ListContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ListContainer />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
