export class MenuConfig {
  public config: any = {};

  constructor() {
    this.config = {
      aside: {
        items: [
          { section: "Browse Music" },
          {
            title: "Explore",
            icon: "la la-home",
            page: "/home",
          },

          {
            title: "Music",
            icon: "la la-music",
            page: "/music",
          },
          {
            title: "Artists",
            icon: "la la-microphone",
            page: "/artists",
          },
          { section: "Favourites", icon: "la la-heart-o" },

          {
            title: "Favorite tracks",
            icon: "la la-heart-o",
            page: "/favorites",
          },
        ],
      },
      userMenu: {
        items: [
          {
            title: "Profile",
            icon: "ion-md-contact",
            page: "/profile",
          },
          {
            title: "Your Plan",
            icon: "ion-md-radio-button-off",
            page: "/plan",
          },
          {
            title: "Settings",
            icon: "ion-md-settings",
            page: "/settings",
          },
        ],
      },
    };
  }
}
