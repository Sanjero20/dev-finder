interface AvatarProps {
  src: string;
}

function Avatar({ src }: AvatarProps) {
  return <img src={src} alt="avatar" className="w-36 rounded-full" />;
}

export default Avatar;
