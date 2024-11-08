





export default function Split_line({size, color}:Split_lineProps) {
    return <div
        className={`${(size)? "w-" + size :"w-1/3"} ${(color)? color :"bg-amber-400"} h-1 m-4`}
    >

    </div>
}


interface Split_lineProps {
    size?: string
    color?: string
}