import styles from "./Home.module.css";

import UserProfile from "../data/UserProfile";
import GeneralLayout from "../layouts/General";
import ProfileCard from "../components/ProfileCard";

const profile: UserProfile = {
  firstName: "Alexander",
  lastName: "Terekhov",
  title: "Software Developer",
  avatar:
    "https://www.gravatar.com/avatar/83506d8360b704afd93ad11e97d2804c?s=350",
  profiles: [
    ["https://github.com/alxtrkhv", "assets/images/logos/github.svg"],
    ["https://linkedin.com/in/alxtrkhv", "assets/images/logos/linkedin.svg"],
    ["https://twitter.com/alxtrkhv", "assets/images/logos/twitter.svg"],
    ["https://instagram.com/alxtrkhv", "assets/images/logos/instagram.svg"],
    ["https://soundcloud.com/alxtrkhv", "assets/images/logos/soundcloud.svg"],
  ],
};

export default function Home() {
  return (
    <GeneralLayout>
      <div className={styles.home}>
        <ProfileCard userProfile={profile} />
      </div>
    </GeneralLayout>
  );
}
