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

export const locationTypeCounts = locationTypes.reduce<Record<string, number>>((counts, type) => {
  counts[type] = luoyangLocations.filter((location) => location.type === type).length;
  return counts;
}, {});

export const typeColorClasses: Record<string, string> = {
  寺庙: 'bg-accent ring-accent/25',
  城门: 'bg-slateInk ring-slateInk/25',
  官署: 'bg-[#9f6b3d] ring-[#9f6b3d]/25',
  里坊: 'bg-mutedGold ring-mutedGold/25',
  人物居所: 'bg-[#7b6db2] ring-[#7b6db2]/25',
  风物: 'bg-[#3f83a8] ring-[#3f83a8]/25',
  未分组: 'bg-[#6b665d] ring-[#6b665d]/25'
};

export const getLocationColorClasses = (type: string) => typeColorClasses[type] ?? typeColorClasses['未分组'];
