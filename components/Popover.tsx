import React from "react";
import { Tooltip } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

interface PopoverProps {
  image: StaticImageData ;
  line1:string;
  line2:string;
}

export default function Popover({ image,line1,line2 }: PopoverProps) {
  return (
    <Tooltip className="bg-black text-white" showArrow={true} content={<div>{line1}<br />{line2}</div>}>
      <Image src={image} alt=""/>
    </Tooltip>
  );
}