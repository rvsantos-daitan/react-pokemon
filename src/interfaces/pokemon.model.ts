import IGenericInterface from './generic.model';
import IPokemonBase from './pokemonbase.model';

export interface IPokemonFragment {
  id: number;
  name: string;
  forms: Array<IForms>;
  abilities: Array<IAbilittySet>;
  types: Array<IPoketypes>;
  sprites: ISprite;
  weight: number;
  isFavorite: boolean
}

export interface IPokemon {
  abilities: Array<IAbilittySet>;
  base_experience: number;
  forms: Array<IForms>;
  game_indices: Array<IGameIndices>;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<IMoves>;
  name: string;
  order: number;
  past_types: Array<IPastTypes>;
  species: IPokemonBase;
  sprites: ISprite;
  stats: Array<IStats>;
  types: Array<IPoketypes>;
  weight: number;
}

export interface IAbilittySet {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

interface IAbility extends IGenericInterface { }

interface IForms extends IGenericInterface { }

interface IGameIndices {
  game_index: number;
  version: IVersion;
}

interface IVersion extends IGenericInterface { }

export interface IMoves {
  move: IMove;
  version_group_details: Array<IVersionDetails>;
}

interface IMove extends IGenericInterface { }

interface IVersionDetails {
  level_learned_at: number;
  move_learned_method: ILearnMethod;
  version_group: IVersion;
}

interface ILearnMethod extends IGenericInterface { }

interface ISprite {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_shiny: string;
  front_shiny_female: string | null;
  other: any;
}

interface IPastTypes extends IGenericInterface { }

interface IPoketypes {
  slot: number;
  type: IType;
}

export interface IType extends IGenericInterface { }

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IStatDetail;
}

interface IStatDetail extends IGenericInterface { }