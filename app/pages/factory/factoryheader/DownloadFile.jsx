"use client";
import TextAnimation from "@/app/components/TextAnimation";

function DownloadFile() {
  return (
    <div className="flex flex-col space-x-3 items-end text-sm xl:text-base mr-3 lg:mr-6">
      <TextAnimation text="download presentation" className="text-white" />
      <div className="flex flex-row *:cursor-pointer hover:*:text-green pl-2">
        <a href="/PresentationGeo.pdf" download>
          <TextAnimation text="GEO" className="mr-2" />
        </a>
        <TextAnimation text="\" className="mr-2" />
        <a href="/PresentationEng.pdf" download>
          <TextAnimation text="ENG" />
        </a>
      </div>
    </div>
  );
}

export default DownloadFile;
