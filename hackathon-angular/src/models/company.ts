import { Ods } from "./ods";

export interface Company {
    id: number;
    name: string;
    img: string;
    people: string;
    objetivosOds: Ods[]
  }