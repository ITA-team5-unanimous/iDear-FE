import {StaticImageData} from 'next/image';

export default interface Contest {
  id: number;
  name: string;
  organizer: string;
  d_day: number;
  image?: string | StaticImageData;
}
