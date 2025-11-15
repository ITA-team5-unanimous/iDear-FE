export const ColorSwatch = ({value, name}: {value: string; name: string}) => (
  <div className='w-30'>
    <div
      className='h-15 w-30 rounded-md shadow-sm'
      style={{backgroundColor: value}}
    />
    <div className='px-2'>
      <p className='text-gray text-[12px]'>{name}</p>
      <p className='text-gray text-[10px]'>{value}</p>
    </div>
  </div>
);
