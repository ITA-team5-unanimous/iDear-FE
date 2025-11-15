import {cssColors} from '@/styles/tokens/colors';
import {ColorSwatch} from '@/components/design-system/ColorSwatch';
import {getCssVar} from '@/utils/getCssVar';

export const ColorPalette = () => (
  <div className='flex flex-wrap gap-4'>
    {Object.entries(cssColors).map(([group, tokens]) => (
      <div key={group} className='flex flex-col'>
        <h3 className='mb-2 text-xl font-bold text-gray-700'>{group}</h3>
        <div className='flex flex-wrap gap-4'>
          {tokens.map((token) => {
            const displayName = token.replace(/^--color-/, '');

            return (
              <ColorSwatch
                key={token}
                value={getCssVar(token)}
                name={displayName}
              />
            );
          })}
        </div>
      </div>
    ))}
  </div>
);
