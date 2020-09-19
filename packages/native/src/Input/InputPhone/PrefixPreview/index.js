import React, {useEffect, useState} from 'react';
import {H3} from '../../../Text';
import {useTheme} from 'emotion-theming';
import {
  PrefixWrapper,
  PrefixFlag,
  PrefixCaret,
  PrefixNumber,
} from './PrefixPreview.style';
import Caret from './Caret';

export default function UserDetailsForm({country, openPrefixModal}) {
  const theme = useTheme();
  const [countryData, setCountryData] = useState({});


  useEffect(() => {
    setCountryData(country);
  }, [country]);

  return (
    <PrefixWrapper onPress={() => openPrefixModal()}>
      <PrefixFlag source={{uri: countryData.flag }} />
      <PrefixCaret>
        <Caret color={theme.color6} />
      </PrefixCaret>
      <PrefixNumber>
        <H3>{countryData.Iso}</H3>
      </PrefixNumber>
    </PrefixWrapper>
  );
}
