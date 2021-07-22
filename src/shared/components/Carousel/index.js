import React from 'react';

import {ScrollView, Dimensions} from 'react-native';

export default function Carousel({children}) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      disableIntervalMomentum={true}
      snapToInterval={Dimensions.get('screen').width - 101}
      decelerationRate="fast">
      {children}
    </ScrollView>
  );
}
