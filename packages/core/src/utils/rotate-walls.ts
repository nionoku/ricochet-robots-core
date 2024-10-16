import { WALL } from '../constants/wall';
import type { MapParts, MapType } from '../models/types/map';

const rotateWalls = (part: MapType, direction: number, { length: size }: MapParts) => {
  return part.map((row) => row.map((cell) => {
    // by direction - clockwise, by (size - direction) - counter-clockwise
    const shift = size - direction;
    const shifted = ((cell << shift) | (cell >> (4 - shift))) & WALL;

    return shifted;
  }));
};

export {
  rotateWalls,
};
