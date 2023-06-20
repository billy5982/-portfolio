import styled, { css, keyframes } from 'styled-components';

interface SolarSystFunc {
  starnum: number;
  maxarea: number;
  minArea?: number;
  starSize?: number;
}

const $sun = 40,
  $mercuryOrb = 70,
  $mercuryPl = 4,
  $venusOrb = 100,
  $venusPl = 8,
  $earthOrb = 145,
  $earthPl = 6,
  $marsOrb = 190,
  $marsPl = 6,
  $jupiterOrb = 340,
  $jupiterPl = 18,
  $saturnOrb = 440,
  $saturnPl = 12,
  $uranusOrb = 520,
  $uranusPl = 10,
  $neptuneOrb = 630,
  $neptunePl = 10,
  $plutoOrb = 780,
  $plutoPl = 3,
  $asteroidsBeltOrb = 300,
  $asteroidsBeltPl = 210,
  $yearInSecond = 30; // 1 Earth year = 30 sec

function stars(starnum: number, maxarea: number, minArea = 0, starSize = 0) {
  let stars = `${Math.round(minArea + Math.random() * maxarea)}px ${
    minArea + Math.random() * maxarea
  }px 0 ${starSize}px rgba(255, 255, 255, ${Math.random()})`;

  for (let i = 1; i < starnum; i++) {
    stars += `, ${Math.floor(minArea + Math.random() * maxarea)}px ${
      minArea + Math.random() * maxarea
    }px 0 ${starSize}px rgba(255, 255, 255, ${Math.random()})`;
  }

  return stars;
}

function revolution($plYearInDays: number) {
  return ($plYearInDays * $yearInSecond) / 365.2563 + 's'; //Earth reference
}

function convertPx(num: number) {
  return `${num}px`;
}

const orb = keyframes`
  from {
    transform:rotate(0deg)
  }
  to{
    transform:rotate(-360deg)
  }
`;

export const SolarSyst = styled.div<SolarSystFunc>`
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    background-color: white;
    box-shadow: ${({ starnum, maxarea }) => stars(starnum, maxarea)};
  }
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;

  div {
    border-radius: 1000px;
    top: 50%;
    left: 50%;
    position: absolute;
    z-index: 999;
    &:not(.sun) {
      border: 1px solid rgba(102, 166, 229, 0.12);
      &:before {
        left: 50%;
        border-radius: 100px;
        content: '';
        position: absolute;
      }
    }
  }
  .sun {
    ${() => css`
      background: radial-gradient(
        ellipse at center,
        #ffd000 1%,
        #f9b700 39%,
        #f9b700 39%,
        #e06317 100%
      );
      height: ${convertPx($sun)};
      width: ${convertPx($sun)};
      margin-top: ${convertPx(-$sun / 2)};
      margin-left: ${convertPx(-$sun / 2)};
      background-position: -28px -103px;
      background-size: 175%;
      box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4), 0 0 22px 11px rgba(255, 203, 0, 0.13);
    `}
  }
  .mercury {
    ${() => css`
      height: ${convertPx($mercuryOrb)};
      width: ${convertPx($mercuryOrb)};
      margin-top: ${convertPx(-$mercuryOrb / 2)};
      margin-left: ${convertPx(-$mercuryOrb / 2)};
      animation: ${orb} ${revolution(87.5)} linear infinite;
      &:before {
        height: ${convertPx($mercuryPl)};
        width: ${convertPx($mercuryPl)};
        background: #9f5e26;
        margin-top: ${convertPx(-$mercuryPl / 2)};
        margin-left: ${convertPx(-$mercuryPl / 2)};
      }
    `}
  }
  .venus {
    height: ${convertPx($venusOrb)};
    width: ${convertPx($venusOrb)};
    margin-top: ${convertPx(-$venusOrb / 2)};
    margin-left: ${convertPx(-$venusOrb / 2)};
    animation: ${orb} ${revolution(224.7)} linear infinite;
    &:before {
      height: ${convertPx($venusPl)};
      width: ${convertPx($venusPl)};
      background: #beb768;
      margin-top: ${convertPx(-$venusPl / 2)};
      margin-left: ${convertPx(-$venusPl / 2)};
    }
  }

  .earth {
    height: ${convertPx($earthOrb)};
    width: ${convertPx($earthOrb)};
    margin-top: ${convertPx(-$earthOrb / 2)};
    margin-left: ${convertPx(-$earthOrb / 2)};
    animation: ${orb} ${revolution(365.2563)} linear infinite;
    &:before {
      height: ${convertPx($earthPl)};
      width: ${convertPx($earthPl)};
      background: #11abe9;
      margin-top: ${convertPx(-$earthPl / 2)};
      margin-left: ${convertPx(-$earthPl / 2)};
    }
    &:after {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 50%;
      top: 0px;
      margin-left: -9px;
      margin-top: -9px;
      border-radius: 100px;
      box-shadow: 0 -10px 0 -8px grey;
      animation: ${orb} ${revolution(27.3216)} linear infinite;
    }
  }

  .jupiter {
    height: ${convertPx($jupiterOrb)};
    width: ${convertPx($jupiterOrb)};
    margin-top: ${convertPx(-$jupiterOrb / 2)};
    margin-left: ${convertPx(-$jupiterOrb / 2)};
    animation: ${orb} ${revolution(4331)} linear infinite;
    &:before {
      height: ${convertPx($jupiterPl)};
      width: ${convertPx($jupiterPl)};
      background: #c76e2a;
      margin-top: ${convertPx(-$jupiterPl / 2)};
      margin-left: ${convertPx(-$jupiterPl / 2)};
    }
  }
  .saturn {
    height: ${convertPx($saturnOrb)};
    width: ${convertPx($saturnOrb)};
    margin-top: ${convertPx(-$saturnOrb / 2)};
    margin-left: ${convertPx(-$saturnOrb / 2)};
    animation: ${orb} ${revolution(10747)} linear infinite;
    &:before {
      height: ${convertPx($saturnPl)};
      width: ${convertPx($saturnPl)};
      background: #e7c194;
      margin-top: ${convertPx(-$saturnPl / 2)};
      margin-left: ${convertPx(-$saturnPl / 2)};
    }
    &:after {
      position: absolute;
      content: '';
      height: 2.34%;
      width: 4.676%;
      left: 50%;
      top: 0px;
      transform: rotateZ(-52deg);
      margin-left: -2.3%;
      margin-top: -1.2%;
      border-radius: 50% 50% 50% 50%;
      box-shadow: 0 1px 0 1px #987641, 3px 1px 0 #987641, -3px 1px 0 #987641;
      animation: ${orb} ${revolution(10747)} linear infinite;
      animation-direction: reverse; // compensate to reverse main orbit animation
      transform-origin: 52% 60%;
    }
  }
  .asteroids-belt {
    opacity: 0.7;
    border-color: transparent !important;
    height: ${convertPx($asteroidsBeltOrb)};
    width: ${convertPx($asteroidsBeltOrb)};
    margin-top: ${convertPx(-$asteroidsBeltOrb / 2)};
    margin-left: ${convertPx(-$asteroidsBeltOrb / 2)};
    animation: ${orb} ${revolution(2191)} linear infinite;
    overflow: hidden;
    &:before {
      top: 50%;
      height: ${convertPx($asteroidsBeltPl)};
      width: ${convertPx($asteroidsBeltPl)};
      margin-left: ${convertPx(-$asteroidsBeltPl / 2)};
      margin-top: ${convertPx(-$asteroidsBeltPl / 2)};
      background: transparent;
      border-radius: 140px !important;
      box-shadow: ${stars(390, 290, -290 / 2, -104)};
    }
  }
`;
