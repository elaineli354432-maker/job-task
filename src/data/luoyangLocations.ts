import rawLocations from '../../public/beiwei_luoyang_locations.json';

export type LuoyangLocation = {
  id: string;
  name: string;
  type: string;
  type_code: string;
  group_path: string;
  x: number;
  y: number;
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
  label_direction: string;
  importance: string;
  visible: boolean;
  duplicate_index: number;
  duplicate_total: number;
  layer_index: number;
  source: string;
  note: string;
};

type LocationDataset = {
  meta: {
    source_file: string;
    canvas_width: number;
    canvas_height: number;
    coordinate_system: string;
    count: number;
    note: string;
  };
  locations: LuoyangLocation[];
};

const dataset = rawLocations as LocationDataset;

export const luoyangMapMeta = dataset.meta;
export const luoyangLocations = dataset.locations.filter((location) => location.visible);

export const locationTypes = Array.from(new Set(luoyangLocations.map((location) => location.type))).sort((a, b) =>
  a.localeCompare(b, 'zh-Hans-CN')
);
