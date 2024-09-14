import {View} from 'react-native';
import React, {useState} from 'react';

import {useLocalization} from '../../utils';
import {IcHome, IcPhone, color, size} from '../../theme';
import {Button, Text} from '../../components';
import {InputBox} from '../../components/inputBox';
import * as styles from './styles';

export const DemoScreen = () => {
  const {t} = useLocalization();
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.mainView()}>
      <Text style={{color: color.black}}>{t('demo_screen.screen_title')}</Text>
      <IcHome width={size.moderateScale(20)} height={size.moderateScale(20)} />

      <View style={styles.inputsContainer()}>
        <InputBox
          leftIconPosition="left"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          keyboardType="numeric"
          leftIcon={() => {
            return (
              <IcPhone
                height={size.moderateScale(21)}
                width={size.moderateScale(22)}
                fill={!focused ? color.customBlack(0.3) : color.primary}
              />
            );
          }}
          placeholder="Enter mobile number"
          customStyle={styles.inputBoxStyle(focused)}
        />
      </View>
      <View style={styles.btnContainer()}>
        <Button title={'Login'} />
      </View>
    </View>
  );
};
