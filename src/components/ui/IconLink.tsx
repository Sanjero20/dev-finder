interface IconLinkProps {
  className: string;
  icon: React.ReactNode;
  text: string | null;
  isLink?: boolean;
}

function IconLink({ className, icon, text, isLink = false }: IconLinkProps) {
  const opacity = text ? "" : "opacity-70"; // Lower opacity if there is no text

  return (
    <div className={`${className} ${opacity} flex items-center gap-4`}>
      {icon}
      {isLink && text ? (
        <a href={"//" + text} className="hover:underline">
          {text}
        </a>
      ) : (
        <p>{text || "Not Available"}</p>
      )}
    </div>
  );
}

export default IconLink;
