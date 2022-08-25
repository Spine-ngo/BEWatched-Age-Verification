import { Brand } from "./brand.type";
import { Model } from "./model.type";
import { Translations } from "./translations.type";

export class Options {
  public autoStart!: boolean;
  public debug!: boolean;
  public showCloseButton!: boolean;
  public accentColor!: string;
  public accentTextColor!: string;
  public shadowColor!: string;
  public blur!: boolean;
  public models!: Model[];
  public cookieAge!: number;
  public cookieName!: string;
  public showMax!: number;
  public eventPrefix!: string;
  public language!: string;
  public translations!: Translations;
  public brands!: Brand[];
  public showDefaultBrand!: boolean;
}
