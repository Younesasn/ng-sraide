import { Sraide } from './Sraide';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  description: string;
  following: number;
  follower: number;
  subscribeDate: Date;
  sraides: Sraide[];
}
