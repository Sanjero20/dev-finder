import { Building, Link, MapPin, Twitter } from "lucide-react";

// From https://api.github.com/
const data = {
  login: "Sanjero20",
  id: 94424813,
  node_id: "U_kgDOBaDO7Q",
  avatar_url: "https://avatars.githubusercontent.com/u/94424813?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sanjero20",
  html_url: "https://github.com/Sanjero20",
  followers_url: "https://api.github.com/users/Sanjero20/followers",
  following_url:
    "https://api.github.com/users/Sanjero20/following{/other_user}",
  gists_url: "https://api.github.com/users/Sanjero20/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Sanjero20/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Sanjero20/subscriptions",
  organizations_url: "https://api.github.com/users/Sanjero20/orgs",
  repos_url: "https://api.github.com/users/Sanjero20/repos",
  events_url: "https://api.github.com/users/Sanjero20/events{/privacy}",
  received_events_url: "https://api.github.com/users/Sanjero20/received_events",
  type: "User",
  site_admin: false,
  name: "Angelo Santos",
  company: null,
  blog: "sanjero20.github.io",
  location: "Batangas City, Philippines",
  email: null,
  hireable: null,
  bio: "Better things take a little longer...",
  twitter_username: null,
  public_repos: 32,
  public_gists: 0,
  followers: 24,
  following: 28,
  created_at: "2021-11-16T03:40:15Z",
  updated_at: "2024-05-03T04:54:37Z",
};

function Profile() {
  return (
    <section className="flex h-full min-h-96 w-full gap-8 rounded-lg bg-container p-8 drop-shadow-lg dark:bg-container-dark">
      {/* Left */}
      <div className="hidden w-36 lg:block">
        <img src={data.avatar_url} alt="avatar" className="rounded-full" />
      </div>

      {/* Right */}
      <div className="flex w-full flex-col gap-6">
        <div className="flex gap-6">
          <img
            src={data.avatar_url}
            alt="avatar"
            className="w-24 rounded-full lg:hidden"
          />

          <div className="flex w-full flex-col lg:flex-row lg:justify-between">
            <div>
              <p className="text-xl font-bold">{data.name}</p>
              <a href={data.html_url} className="text-primary">
                @{data.login}
              </a>
            </div>

            <p className="mt-2 lg:mt-0">Joined {"DD MMM YYYY"}</p>
          </div>
        </div>

        <p>{data.bio || "This profile has no bio"}</p>

        {/* Account repos */}
        <div className="flex h-fit w-full justify-between gap-4 rounded-lg bg-light p-4 text-center dark:bg-dark sm:text-left ">
          <div>
            <p>Repos</p>
            <p className="text-lg font-bold">{data.public_repos}</p>
          </div>

          <div>
            <p>Followers</p>
            <p className="text-lg font-bold">{data.followers}</p>
          </div>

          <div>
            <p>Following</p>
            <p className="text-lg font-bold">{data.following}</p>
          </div>
        </div>

        {/* Links */}
        <div className="grid w-full gap-4 text-sm sm:grid-cols-2">
          <div className="order-1 flex items-center gap-4">
            <MapPin />
            {data.location}
          </div>

          <div className="order-2 flex items-center gap-4 sm:order-3">
            <Link />
            {data.blog}
          </div>

          <div className="order-3 flex items-center gap-4 sm:order-2">
            <Twitter fill="white" />
            {data.twitter_username || "Not Available"}
          </div>

          <div className="order-4 flex items-center gap-4">
            <Building />
            {data.company || "Not Available"}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
