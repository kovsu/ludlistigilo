export interface IPlatform {
  name: string;
  icon: string;
  authorization: boolean;
}

export interface ISong {
  title: string;
  cover: string;
  album: string;
  artist: string;
  status: TStatus;
}

export type TStatus = "pending" | "converting" | "converted" | "uploading" | "uploaded" | "failed"

