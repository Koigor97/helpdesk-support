import {RiCustomerService2Fill} from "@remixicon/react";

type LogoProps = {
    showLogoTitle?: boolean;
    className?: string;
};

export default function Logo({className, showLogoTitle = true}: LogoProps) {
  return (
    <div className={`${className} flex items-center gap-2`}>
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm font-montserrat">
                <RiCustomerService2Fill />
            </span>
        </div>
        {showLogoTitle && <span className="text-xl font-bold font-montserrat">WetinHapin</span>}
    </div>
  )
}
