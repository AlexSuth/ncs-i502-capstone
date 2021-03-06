import React from 'react';
import AgeConsentDialog from '../../components/AgeConsentDialog/ageConsentDialog.component'
import ShopAll from '../../components/Views/ShopAll/shopAll.component'
import Help from '../../components/Views/Help/help.component'
import ShopSections from '../../components/Views/ShopSections/shopSections.component';

const HomePage = () => {
  return (
    <>
      <AgeConsentDialog/>
      <ShopAll />
      <ShopSections />
      <Help />      
    </>
  );
}
export default HomePage;