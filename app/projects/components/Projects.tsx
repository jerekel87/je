import { Button } from "@/app/(shared)/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/(shared)/components/ui/select";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa6";

function Projects() {
  return (
    <section className="relative py-[40px] lg:py-[72px]">
      <div className="absolute w-full h-[27px] lg:h-[37px] -top-[6px]">
        <Image
          src="/assets/images/shape-7-copy-7.svg"
          fill
          alt="Transition"
          className="object-cover"
        />
      </div>
      <div className="container px-4 lg:px-[30px]">
        <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
          <h1 className="font-portlin text-3xl lg:text-[60px]">
            RECENT PROJECTS
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-[30px]">
            <Select>
              <SelectTrigger className="w-full lg:w-[282px]">
                <div className="flex items-center gap-[12px]">
                  <FaBuilding />
                  <SelectValue placeholder="Choose industry" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full lg:w-[282px]">
                <SelectValue placeholder="Most recent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="container px-0 lg:px-[30px]">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-[30px] mt-[30px]">
          <div className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/proj2.svg"
              fill
              alt="Project"
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/proj3.svg"
              fill
              alt="Project"
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/proj4.svg"
              fill
              alt="Project"
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/proj5.svg"
              fill
              alt="Project"
              className="object-contain"
              quality={100}
            />
          </div>
          <div className="relative w-full pb-[85.5%] bg-gray-400 lg:rounded-[8px] overflow-hidden">
            <Image
              src="/assets/images/proj1.svg"
              fill
              alt="Project"
              className="object-contain"
              quality={100}
            />
          </div>
        </div>
        <div className="flex justify-center mt-[40px] lg:mt-[60px]">
          <Button variant="outline" className="mx-auto">
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
