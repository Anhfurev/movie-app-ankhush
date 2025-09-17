"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
type MovieCardProps = {
  title: string;
  image: string;
  score: number;
  id: number;
};
export function MovieCard({ title, image, score, id }: MovieCardProps) {
  return (
    <Link href={`/seeMore/${id}`}>
      <Card className="w-[230px] h-[440px] bg-secondary p-0 overflow-hidden gap-2 shadow-none border-none ">
        <CardContent className="p-0  ">
          <div className="w-[230px] h-[340px]">
            <Image
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${image}`}
              width={230}
              height={340}
              alt=""
              unoptimized
            ></Image>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-start p-2 pt-0">
          <CardDescription className="flex gap-0 items-center mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-foreground ml-[2px] text-14px">{score}</p>
            <p className="text-muted-foreground text-14px">/10</p>
          </CardDescription>
          <CardTitle className="font-normal mt-1 ">{title}</CardTitle>
        </CardFooter>
      </Card>
    </Link>
  );
}
