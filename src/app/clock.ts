export class Clock {
  id: number;
  user_id: number;
  in: string;
  out: string;
  
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
