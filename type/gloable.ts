export enum Gender {
  GIRL = "Girl",
  BOY = "Boy",
  UNISEX = "Unisex",
}
export enum Popularity {
  UNIQUE = "Unique",
  TRENDY = "Trendy",
}
export enum Length {
  SHORT = "short",
  LONG = "Long",
  ALL = "All",
}
export enum OptionsCategory{
    GENDER = 'gender',
    POPULARITY = 'popularity',
    LENGTH = 'length'
}
export interface Options {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
export interface Name {
  id: number;
  name: string;
  gender: Gender;
  popularity: Popularity;
  length: Length;
}
export interface OptionsCard{
    title:string,
    category:OptionsCategory,
    buttons:Gender[] | Popularity[] | Length[]
}
