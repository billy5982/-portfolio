import { useEffect } from 'react';
import * as S from '@/components/Background/Background.style';

const Background = () => {
  return (
    <S.SolarSyst starnum={500} maxarea={1800}>
      <div className="sun" />
      <div className="mercury" />
      <div className="venus" />
      <div className="earth" />
      <div className="jupiter" />
      <div className="saturn" />
      <div className="asteroids-belt" />
    </S.SolarSyst>
  );
};

export default Background;
