import React from 'react';
import {IonCard, IonCardHeader, IonCardTitle, IonIcon, IonCol, IonGrid, IonRow} from '@ionic/react';
import {trashOutline} from 'ionicons/icons'
import { useState } from 'react';

interface ListingProps {
  id:number,
  task: string;
}

const Listing: React.FC<ListingProps> = ({ task, id }) => {

  const [visibility,setVisibility] = useState(true);

  const deleteTask=()=>{
    setVisibility(false);
  }
  
    return (
      <>
      {visibility && 
        <IonCard>
        <IonCardHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
                <IonCardTitle>{task}</IonCardTitle>
            </IonCol>
            <IonIcon icon={trashOutline} onClick={deleteTask}></IonIcon>
          </IonRow>
        </IonGrid>
        </IonCardHeader>
        </IonCard>
      }
      </>
    );
  };
  
  export default Listing;