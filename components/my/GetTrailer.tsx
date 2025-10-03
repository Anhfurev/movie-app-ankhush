import { getMovieVideo } from "@/utils/getData";
import { Play } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const GetTrailer = ({
  youtubeKey,
  backdrop_path,
}: {
  youtubeKey: string | undefined;
  backdrop_path: string;
}) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="flex items-center sm:bg-background bg-foreground lg:w-[150px] w-[124px]  lg:h-[40px] h-[34px] py-[8px] px-[16px] rounded-[6px] gap-[8px] mt-[20px]">
            <Play
              width={14}
              className="sm:text-foreground text-background"
              strokeWidth={1.5}
            />
            <p className="sm:text-foreground text-background lg:text-[14px] text-[11px] lg:mr-[-2 0px]">
              Watch Trailer
            </p>
          </button>
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-[1080px] w-auto sm:max-h-[600px] h-60% border-0">
          <DialogTitle className="hidden"></DialogTitle>
          {youtubeKey ? (
            <div>
              <iframe
                className="sm:block hidden"
                width={1080}
                height={600}
                src={`https://www.youtube.com/embed/${youtubeKey}`}
                title="YouTube video player"
                allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture;
  web-share"
                allowFullScreen
              ></iframe>
              <iframe
                className="sm:hidden block"
                width={500}
                height={300}
                src={`https://www.youtube.com/embed/${youtubeKey}`}
                title="YouTube video player"
                allow="accelerometer;
  autoplay;
  clipboard-write;
  encrypted-media;
  gyroscope;
  picture-in-picture;
  web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="w-[1080px] h-[600px]"></div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
