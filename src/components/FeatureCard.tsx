import { ReactNode } from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => {
  return (
    <div className="relative z-10 w-full rounded-md bg-white px-6 pt-16 pb-8 md:first-of-type:-translate-y-8 md:last-of-type:translate-y-8">
      <div className="absolute -top-10 left-1/2 w-fit origin-center -translate-x-1/2 rounded-full bg-[#3b3054] p-5 xl:left-16">
        <img
          src={icon}
          width={40}
          height={40}
          alt="Feature card icon"
          className="h-10 w-10 object-center"
        />
      </div>
      <h3 className="text-center text-2xl font-bold text-[#35323e] xl:text-left">
        {title}
      </h3>
      <p className="mt-4 text-center font-medium text-[#9e9aa7] xl:text-left">
        {children}
      </p>
    </div>
  );
};

export default FeatureCard;
