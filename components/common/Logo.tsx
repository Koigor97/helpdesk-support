import {RiCustomerService2Fill} from "@remixicon/react";

type LogoProps = {
    className?: string;
};

export default function Logo({className}: LogoProps) {
  return (
    <div className={`${className} flex items-center gap-2`}>
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-montserrat">
                <RiCustomerService2Fill />
            </span>
        </div>
        <span className="text-xl font-bold font-montserrat">HelpDesk</span>
    </div>
  )
}
