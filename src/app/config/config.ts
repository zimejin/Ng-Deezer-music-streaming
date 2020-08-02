export class Config {
  static CURRENT_USER = "currentUser";
  static STAR = "la-star";
  static HALF_STAR = "la-star-half-empty";
  static THEME_CLASSES = [
    "primary",
    "danger",
    "success",
    "warning",
    "info",
    "brand",
    "dark",
  ];
  static THEME_SKIN = "themeSkin";

  static classes = {
    show: "show",
    openSearch: "open-search",
    openSidebar: "open-sidebar",
    iconicSidebar: "iconic-sidebar",
  };

  public config: any = {};

  constructor() {
    this.config = {
      // Brand config
      brand: {
        logo:
          "https://cdns-files.dzcdn.net/cache/slash/images/common/logos/deezer_light.a087061697d2a623bb90b30241da46d0.png",
        name: "Ng-Deezer",
      },

      // Theme skin config
      themeSkin: {
        theme: "dark",
        header: 0,
        sidebar: 0,
        player: 0,
      },
    };
  }
}
