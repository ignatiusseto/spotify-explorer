/**
 * A model for Artist
 */
import {Album} from './Album';
export class Artist{
  id: number;
  name: string;
  genres: any;
  albums: Album[];
}
