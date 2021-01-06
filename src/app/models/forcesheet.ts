export class ForceSheet {
  id: string;
  characterName: string;
  playerName: string;
  species: string;
  career: string;
  specializationTrees: SpecializationTrees[];
  soakValue: number;
  wounds: Amount;
  strain: Amount;
  defense: DefenseStats;
  characteristics: Characteristics;
  skills: Skills[];
  weapons: Weapons[];
  totalXP: number;
  availableXP: number;
  motivations: Motivation;
  morality: Morality;
  characterDescription: CharacterDescription;
  equipment: Equipment;
  criticalInjuries: CriticalInjuries[];
  talents: Talents[];
  forceRating: number;
  version: number;
}

export class SpecializationTrees {
  treeName: string;
  completed: boolean;
}

export class Amount {
  threshold: number;
  current: number;
}

export class DefenseStats {
  ranged: number;
  melee: number;
}

export class Characteristics {
  brawn: number;
  agility: number;
  intellect: number;
  cunning: number;
  willpower: number;
  presence: number;
}

export class Skills {
  name: string;
  characteristic: string;
  career: boolean;
  level: number;
  description: string;
}

export class Weapons {
  name: string;
  skill: string;
  damage: string;
  crit: number;
  range: string;
  special: string;
}

export class Motivation {
  type: string;
  description: string;
}

export class Morality {
  emotionalStrength: string;
  emotionalWeakness: string;
  conflict: number;
  morality: number;
}

export class CharacterDescription {
  gender: string;
  age: number;
  height: number;
  build: string;
  hair: string;
  eyes: string;
  notableFeatures: string
}

export class Equipment {
  credits: number;
  armor: Gear[];
  personalGear: Gear[];
}

export class CriticalInjuries {
  severity: number;
  result: boolean;
}

export class Talents {
  name: string;
  page: number;
  description: string;
  forcePower: ForcePower[];
}

export class Gear {
  gear: string;
}

export class ForcePower {
  name: string;
  description: string;
  completed: boolean;
}
