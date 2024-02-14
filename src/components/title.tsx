import { Separator } from "./ui/separator";

interface TitleProps {
  icon?: React.ReactNode;
  title: string;
}

export default function Title({ icon, title }: TitleProps) {
  return (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <Separator orientation="vertical" className="px-[2px] py-4 bg-primary" />
      {icon}
      <h1 className="text-2xl font-bold text-start">{title}</h1>
    </div>
  );
}
