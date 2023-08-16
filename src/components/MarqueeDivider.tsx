import Marquee from 'react-fast-marquee';
import MarqueeContent from './MarqueeContent';

function MarqueeDivider() {
  return (
    <Marquee style={{ background: '#E9F7FC' }}>
      <MarqueeContent word={'Refreshing'} />
      <MarqueeContent word={'Nourishing'} />
      <MarqueeContent word={'Rejuvenating'} />
      <MarqueeContent word={'Natural'} />
      <MarqueeContent word={'Energizing'} />
      <MarqueeContent word={'Nutritious'} />
      <MarqueeContent word={'Hydrating'} />
      <MarqueeContent word={'Flavorful'} />
    </Marquee>
  );
}

export default MarqueeDivider;
