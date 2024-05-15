import { ReactNode } from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import ShowMoreText from "react-show-more-text";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function ReviewCard({ text }: { text?: ReactNode }) {
  return (
    <Card className="p-4 lg:p-[35px] rounded lg:rounded-[10px] shadow-none lg:shadow-sm">
      <div className="flex gap-2 lg:gap-[18px] items-center">
        <Avatar className="size-[40px] lg:size-[60px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>JE</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex gap-1 lg:gap-[6px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="size-4 lg:size-[24px]"
              color="#90e200"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 1.25c-.561 0-1.018.236-1.434.554-.39.297-.82.727-1.323 1.23l-.035.035c-.515.515-.964.717-1.656.717-.087 0-.196-.003-.32-.006-.317-.01-.727-.02-1.086.01-.525.046-1.18.19-1.679.691-.494.499-.634 1.152-.678 1.673-.03.356-.018.763-.01 1.078.004.124.007.233.007.32 0 .692-.202 1.141-.717 1.656l-.035.035c-.503.503-.933.933-1.23 1.322-.318.417-.554.874-.554 1.435s.236 1.018.554 1.434c.297.39.727.82 1.23 1.323l.035.035c.334.334.491.55.58.754.087.2.137.451.137.902 0 .087-.003.196-.006.32-.01.317-.02.727.01 1.086.046.525.19 1.18.691 1.679.499.494 1.152.634 1.673.678.356.03.763.018 1.078.01.124-.004.233-.007.32-.007.441 0 .69.044.884.125.195.08.404.224.718.538.067.067.156.162.258.271.23.247.529.567.808.812.424.37 1.032.79 1.78.79s1.356-.42 1.78-.79c.28-.245.578-.565.808-.811.102-.11.19-.204.258-.272.314-.314.522-.458.717-.538.196-.08.444-.125.885-.125.087 0 .196.003.32.006.315.01.722.02 1.078-.01.521-.043 1.174-.183 1.673-.677.502-.498.645-1.154.69-1.68.032-.358.02-.768.011-1.085-.003-.124-.006-.233-.006-.32 0-.45.05-.703.137-.902.089-.204.246-.42.58-.754l.035-.035c.503-.503.933-.933 1.23-1.323.318-.416.554-.873.554-1.434 0-.561-.236-1.018-.554-1.434-.297-.39-.727-.82-1.23-1.323l-.035-.035c-.334-.334-.491-.55-.58-.754-.087-.2-.137-.451-.137-.902 0-.087.003-.196.006-.32.01-.317.02-.727-.01-1.086-.046-.525-.19-1.18-.691-1.679-.498-.494-1.152-.634-1.673-.678a10.03 10.03 0 0 0-1.078-.01c-.124.004-.233.007-.32.007-.693 0-1.141-.202-1.656-.717l-.035-.035c-.503-.503-.933-.933-1.323-1.23-.416-.318-.873-.554-1.434-.554zm3.462 9.137a1 1 0 1 0-.924-1.774c-1.428.744-2.593 2.168-3.363 3.29-.216.317-.41.62-.575.894a7.27 7.27 0 0 0-.874-.636l-.247-.146h-.002a1 1 0 1 0-.954 1.757c.144.09.455.291.55.365.334.251.674.567.88.895a1 1 0 0 0 1.749-.1c.05-.102.18-.357.29-.552.196-.35.48-.83.833-1.346.73-1.064 1.665-2.14 2.637-2.647z"
                fill="currentColor"
              />
            </svg>
            <p className="font-bold text-sm lg:text-[17px] leading-none">
              Jonathan A.
            </p>
          </div>
          <p className="text-xs lg:text-sm text-[#53545c] mt-1 lg:mt-[8px] leading-none">
            Accute Firearms LLC
          </p>
        </div>
      </div>
      <div className="py-[30px] text-sm lg:text-[17px] leading-[1.65]">
        <ShowMoreText
          lines={2}
          more="More"
          less="Less"
          anchorClass="underline"
          truncatedEndingComponent={"... "}
        >
          Jeremy has made my company logo and now company mascot. He does
          amazing work at a great price. Best of all quick turn around from
          concept to final product. A win overall. I definitely recommend his .
        </ShowMoreText>
      </div>
      <div className="border-t border-[#f0efed] pt-4 lg:pt-[35px] flex justify-between">
        <StarRating value={5} text={<StarRating.Text>5/5</StarRating.Text>} />
        <div className="relative h-[14px] w-[70px] lg:h-[17px] lg:w-[86px]">
          <Image
            src="/assets/images/facebook.webp"
            fill
            alt="facebook logo"
            className="object-contain"
            quality="100"
          />
        </div>
      </div>
    </Card>
  );
}

export default ReviewCard;
