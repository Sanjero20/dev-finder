import { Building, Link, MapPin, Twitter } from "lucide-react";
import Avatar from "./ui/Avatar";
import CountDisplay from "./ui/CountDisplay";
import IconLink from "./ui/IconLink";
import { formatDate } from "../utils/formatDate";

interface ProfileProps {
  data: any;
}

function Profile({ data }: ProfileProps) {
  if (!data) return;

  return (
    <>
      {/* Left - only visible on desktop */}
      <a href={data.html_url} className="hidden h-fit rounded-full lg:block">
        <Avatar src={data.avatar_url} />
      </a>

      {/* Right */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex gap-6">
          {/* Only visible on mobile */}
          <a href={data.html_url} className="rounded-full lg:hidden">
            <Avatar src={data.avatar_url} />
          </a>

          {/* Personal Information */}
          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div>
              <p className="text-xl font-bold">{data.name}</p>
              <a href={data.html_url} className="text-primary hover:underline">
                @{data.login}
              </a>
            </div>

            <p className="mt-2 lg:mt-0">Joined {formatDate(data.created_at)}</p>
          </div>
        </div>

        <p>{data.bio || "This profile has no bio"}</p>

        {/* Github Account Info */}
        <div className="flex h-fit w-full justify-between gap-4 rounded-lg bg-light p-4 dark:bg-dark">
          <CountDisplay title="Repos" count={data.public_repos} />
          <CountDisplay title="Followers" count={data.followers} />
          <CountDisplay title="Following" count={data.following} />
        </div>

        {/* Links */}
        <div className="grid w-full gap-4 text-sm sm:grid-cols-2">
          <IconLink
            className="order-1 sm:order-1"
            icon={<MapPin />}
            text={data.location}
          />

          <IconLink
            className="order-2 sm:order-3"
            icon={<Link />}
            text={data.blog}
            isLink
          />

          <IconLink
            className="order-3 sm:order-2"
            icon={<Twitter />}
            text={data.twitter_username}
          />

          <IconLink
            className="order-4 sm:order-4"
            icon={<Building />}
            text={data.company}
          />
        </div>
      </div>
    </>
  );
}

export default Profile;
