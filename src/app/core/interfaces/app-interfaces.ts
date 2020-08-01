export interface API_CHART_DATA_MODEL {
  albums: any;
  artists: any;
  playlists: any;
  podcasts: any;
  tracks: any;
}

export interface Album_Data_Model {
  artist: {
    id: number;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string;
  };
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  explicit_lyrics: true;
  id: number;
  link: string;
  position: number;
  record_type: string;
  title: string;
  tracklist: string;
  type: string;
}

export interface Albums {
  data: Album_Data_Model[];
  total: number;
}

export interface Artist_Data_Model {
  id: 10583405;
  link: "https://www.deezer.com/artist/10583405";
  name: "Bad Bunny";
  picture: "https://api.deezer.com/artist/10583405/image";
  picture_big: "https://e-cdns-images.dzcdn.net/images/artist/e8d37bdf545b869db5dcb9b6b06e71c0/500x500-000000-80-0-0.jpg";
  picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/e8d37bdf545b869db5dcb9b6b06e71c0/250x250-000000-80-0-0.jpg";
  picture_small: "https://e-cdns-images.dzcdn.net/images/artist/e8d37bdf545b869db5dcb9b6b06e71c0/56x56-000000-80-0-0.jpg";
  picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/e8d37bdf545b869db5dcb9b6b06e71c0/1000x1000-000000-80-0-0.jpg";
  position: 1;
  radio: true;
  tracklist: "https://api.deezer.com/artist/10583405/top?limit=50";
  type: "artist";
}

export interface Artist {
  data: Artist_Data_Model[];
  total: number;
}

export interface Playlist_Data_Model {
  checksum: "6fa03ab318278a7505f457eb7b8661e9";
  creation_date: "2016-07-05 10:34:42";
  id: 1996494362;
  link: "https://www.deezer.com/playlist/1996494362";
  nb_tracks: 50;
  picture: "https://api.deezer.com/playlist/1996494362/image";
  picture_big: "https://e-cdns-images.dzcdn.net/images/playlist/61878d1bd602f613f63e080170f1b398/500x500-000000-80-0-0.jpg";
  picture_medium: "https://e-cdns-images.dzcdn.net/images/playlist/61878d1bd602f613f63e080170f1b398/250x250-000000-80-0-0.jpg";
  picture_small: "https://e-cdns-images.dzcdn.net/images/playlist/61878d1bd602f613f63e080170f1b398/56x56-000000-80-0-0.jpg";
  picture_xl: "https://e-cdns-images.dzcdn.net/images/playlist/61878d1bd602f613f63e080170f1b398/1000x1000-000000-80-0-0.jpg";
  public: true;
  title: "Rap Bangers";
  tracklist: "https://api.deezer.com/playlist/1996494362/tracks";
  type: "playlist";
  user: {
    id: 917475151;
    name: "Narjes - Deezer Rap Editor";
    tracklist: "https://api.deezer.com/user/917475151/flow";
    type: "user";
  };
}

export interface playlist {
  data: Album_Data_Model[];
  total: number;
}

export interface Podcast_Data_Model {
  available: boolean;
  description: "Current and classic episodes, featuring compelling true-crime mysteries, powerful documentaries and in-depth investigations.  ";
  fans: number;
  id: number;
  link: "https://www.deezer.com/show/585702";
  picture: "https://e-cdns-images.dzcdn.net/images/talk/d75b2982f2221236850c026255cd796f/180x180-000000-80-0-0.jpg";
  picture_big: "https://e-cdns-images.dzcdn.net/images/talk/d75b2982f2221236850c026255cd796f/500x500-000000-80-0-0.jpg";
  picture_medium: "https://e-cdns-images.dzcdn.net/images/talk/d75b2982f2221236850c026255cd796f/250x250-000000-80-0-0.jpg";
  picture_small: "https://e-cdns-images.dzcdn.net/images/talk/d75b2982f2221236850c026255cd796f/56x56-000000-80-0-0.jpg";
  picture_xl: "https://e-cdns-images.dzcdn.net/images/talk/d75b2982f2221236850c026255cd796f/1000x1000-000000-80-0-0.jpg";
  share: "https://www.deezer.com/show/585702?utm_source=deezer&utm_content=show-585702&utm_term=0_1596318942&utm_medium=web";
  title: "Dateline NBC";
  type: "podcast";
}

export interface Podcast {
  data: Podcast_Data_Model[];
  total: number;
}

export interface Tracks_Data_Model {
  album: any;
  artist: any;
  duration: 181;
  explicit_content_cover: 0;
  explicit_content_lyrics: 0;
  explicit_lyrics: true;
  id: 932661672;
  link: "https://www.deezer.com/track/932661672";
  position: 1;
  preview: "https://cdns-preview-1.dzcdn.net/stream/c-1afe80e99f64107a65a730966f301ed1-6.mp3";
  rank: 971835;
  title: "ROCKSTAR";
  title_short: "ROCKSTAR";
  title_version: "";
  type: "track";
}

export interface Tracks {
  data: Tracks_Data_Model[];
  total: number;
}
