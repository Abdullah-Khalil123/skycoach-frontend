import LevelingInput from './LevelingInput';
import PlatformSelection from './PlatformSelection';

const platforms = [
  { name: 'PC', price: 0 },
  { name: 'PlayStation', price: 37.43 },
  { name: 'XBOX', price: 37.43 },
];

export default function BuyCard() {
  return (
    <div>
      <LevelingInput />
      <PlatformSelection platforms={platforms} />
    </div>
  );
}
