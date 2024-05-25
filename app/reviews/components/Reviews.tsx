import ReviewsMasonry from "@/app/(shared)/components/ReviewsMasonry";
import { Button } from "@/app/(shared)/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import Image from "next/image";
import StarRating from "@/app/(shared)/components/StarRating";
import ReviewsGraph from "./ReviewsGraph";

function Reviews() {
  return (
    <section className="relative pt-[70px] lg:pt-[140px] pb-[124px] bg-[#f9f8f3]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-12.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="lg:container mx-auto">
        <div className="container lg:px-0 flex justify-between flex-col lg:flex-row gap-[30px]">
          <div>
            <div className="flex gap-[22px] items-end">
              <p className="text-[60px] lg:text-[80px] font-portlin leading-none">
                1,625
              </p>
              <div>
                <StarRating
                  value={5}
                  text={<StarRating.Text>5/5</StarRating.Text>}
                />
                <p className="leading-none pb-1 mt-[10px] lg:mt-[12px] text-xs lg:text-sm font-medium text-muted-foreground">
                  Customer Satisfaction
                </p>
              </div>
            </div>
            <ReviewsGraph />
            <div className="flex items-center gap-[28px] mt-[40px]">
              <div className="relative h-[20px] w-[40px] lg:h-[25px] lg:w-[50px]">
                <Image
                  src="/assets/images/bbb.webp"
                  fill
                  alt="BBB logo"
                  className="object-contain"
                  quality="100"
                />
              </div>
              <div className="relative h-[14px] w-[60px] lg:h-[17px] lg:w-[86px]">
                <Image
                  src="/assets/images/facebook.webp"
                  fill
                  alt="Facebook logo"
                  className="object-contain"
                  quality="100"
                />
              </div>
              <div className="relative h-[21px] w-[48px] lg:h-[21px] lg:w-[63px] self-end">
                <Image
                  src="/assets/images/google.webp"
                  fill
                  alt="Google logo"
                  className="object-contain"
                  quality="100"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:max-w-[486px]">
            <div className="h-0 pb-[75.8%] relative">
              <iframe
                className="w-full h-full rounded lg:rounded-[10px] absolute top-0 left-0"
                src="https://www.youtube.com/embed/NpEaa2P7qZI?si=8Dc3pjtkxOqg4XSZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 flex justify-between flex-col lg:flex-row gap-4 mt-[80px] pt-[48px] border-t border-[#e8e7e6]">
          <h1 className="text-[40px] lg:text-[60px] font-portlin">
            SUCCESS STORIES
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
            <Select>
              <SelectTrigger className="w-full lg:w-[282px]">
                <SelectValue placeholder="All Platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full lg:w-[282px]">
                <SelectValue placeholder="Recent Reviews" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-[46px]">
          <ReviewsMasonry />
        </div>
        <div className="mx-auto max-w-[791px] text-center">
          <Button variant="outline" className="mt-[30px] lg:mt-[40px]">
            SHOW MORE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
