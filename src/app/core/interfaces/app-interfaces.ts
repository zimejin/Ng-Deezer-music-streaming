// Parent Data Model
export interface API_CHART_DATA_MODEL {
  albums: Albums;
  artists: Artist;
  playlists: Playlist;
  podcasts: Podcast;
  tracks: Tracks;
}

// Album Data Model
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
  explicit_lyrics: boolean;
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

// Artist Data Model
export interface Artist_Data_Model {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  position: number;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface Artist {
  data: Artist_Data_Model[];
  total: number;
}

// Playlist Data Model
export interface Playlist_Data_Model {
  checksum: string;
  creation_date: string;
  id: number;
  link: string;
  nb_tracks: number;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  public: boolean;
  title: string;
  tracklist: string;
  type: string;
  user: {
    id: number;
    name: string;
    tracklist: string;
    type: string;
  };
}

export interface Playlist {
  data: Playlist_Data_Model[];
  total: number;
}

// Podcast Data Model
export interface Podcast_Data_Model {
  available: boolean;
  description: string;
  fans: number;
  id: number;
  link: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  share: string;
  title: string;
  type: string;
}

export interface Podcast {
  data: Podcast_Data_Model[];
  total: number;
}

// Tracks Data Model
export interface Tracks_Data_Model {
  album: Albums;
  artist: Artist;
  duration: number;
  explicit_content_cover: number;
  explicit_content_lyrics: number;
  explicit_lyrics: boolean;
  id: number;
  link: string;
  position: number;
  preview: string;
  rank: number;
  title: string;
  title_short: string;
  title_version: string;
  type: string;
}

export interface Tracks {
  data: Tracks_Data_Model[];
  total: number;
}
