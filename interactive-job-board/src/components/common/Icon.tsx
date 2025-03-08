import {
  HomeIcon,
  BriefcaseIcon,
  UserIcon,
  BellIcon,
  ChatBubbleLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const icons = {
  home: HomeIcon,
  jobs: BriefcaseIcon,
  profile: UserIcon,
  notifications: BellIcon,
  messages: ChatBubbleLeftIcon,
  postJob: PlusIcon,
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon = ({ name, className = "w-6 h-6 text-gray-700" }: IconProps) => {
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent className={className} /> : null;
};

export default Icon;
