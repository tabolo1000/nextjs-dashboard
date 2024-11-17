import Image from "next/image";

export function Interactive_Image({
                                              src,
    alt,
    height,
    width,
}: Interactive_Image_Props) {
    return (
        <div className="flex justify-center items-center ">
            <Image
                className={"rounded-lg object-cover object-center"}
                src={(typeof src === "string")? `${src}` : src}
                alt={alt}
                width={width && width }
                height={height && height}
            />
        </div>
    );
}

interface Interactive_Image_Props {
    src: string | any;
    alt: string;
    width?: number;
    height?: number;
}