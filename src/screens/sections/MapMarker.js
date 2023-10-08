import React from 'react';
import { Section } from '../../Styles/global';

const MapMarker = () => {
    return (
      <Section id='map' accent>
        <div>
          <iframe
            title='mapMarker'
            src='https://maps.google.com/maps?q=Botshabelo&t=&z=13&ie=UTF8&iwloc=&output=embed'
            width='100%'
            height='450'
            frameBorder='0'
            style={{ border: 0, marginBottom: '-7px' }}
            allowFullScreen
          />
        </div>
      </Section>
    );
  };
  
  export default MapMarker;