import {typographyToken} from '@/styles/tokens/typography';

export const TypographyToken = () => {
  return (
    <div className='flex flex-col gap-4'>
      {typographyToken.map(({label, weight}) => (
        <div key={weight}>
          <p
            style={{
              fontFamily: 'Paperlogy, sans-serif',
              fontWeight: weight,
            }}>
            Paperlogy {label} ({weight})
          </p>
        </div>
      ))}
    </div>
  );
};
