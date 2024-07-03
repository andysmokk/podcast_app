import { useRef, useState } from "react";
import { Loader } from "lucide-react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { GenerateThumbnailProps } from "@/types";
import { Input } from "./ui/input";

const GenerateThumbnail = ({
  setImage,
  setImageStorageId,
  image,
  imagePrompt,
  setImagePrompt,
}: GenerateThumbnailProps) => {
  const [isAiThumbnail, setIsAiThumbnail] = useState(false);
  const [isImageLoading, setImageLoadingg] = useState(false);
  const imageRef = useRef<HTMLInputElement>(null);

  const generateImage = () => {};

  return (
    <>
      <div className="generate_thumbnail">
        <Button
          type="button"
          onClick={() => setIsAiThumbnail(true)}
          variant="plain"
          className={cn("", { "bg-black-6": isAiThumbnail })}
        >
          Use AI to generate thumbnail
        </Button>
        <Button
          type="button"
          onClick={() => setIsAiThumbnail(false)}
          variant="plain"
          className={cn("", { "bg-black-6": !isAiThumbnail })}
        >
          Upload custom image
        </Button>
      </div>

      {isAiThumbnail ? (
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-2.5">
            <Label className="text-16 font-bold text-white-1">
              AI Prompt to generate Thumbnail
            </Label>
            <Textarea
              className="input-class font-light focus-visible:ring-offset-orange-1"
              placeholder="Provide text to generate thumbnail"
              rows={5}
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
            />
          </div>

          <div className="w-full max-w-[200px]">
            <Button
              onClick={generateImage}
              type="submit"
              className="text-16 bg-orange-1 py-4 font-bold
                 text-white-1 transition-all duration-500 hover:bg-black-1"
            >
              {isImageLoading ? (
                <>
                  <Loader size={20} className="animate-spin mr-2" />
                  Loading ...
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="image_div"
          onClick={() => {
            imageRef?.current?.click();
          }}
        >
          <Input type="file" className="hidden" ref={imageRef} />
        </div>
      )}
    </>
  );
};

export default GenerateThumbnail;
