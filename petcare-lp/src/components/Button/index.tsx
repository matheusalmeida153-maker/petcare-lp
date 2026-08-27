interface ButtonProps{
    title: string
    link: string
    color: string
    border: string
    color_text: string;
}

export default function Button({title, link, color, border, color_text}: ButtonProps){
    return (
        <a
          href={link}
          className={`hidden md:block ${color} ${color_text} font-medium font-display text-sm px-6 py-2.5 rounded ${border}]`}
        >
          {title}
        </a>
    )
}