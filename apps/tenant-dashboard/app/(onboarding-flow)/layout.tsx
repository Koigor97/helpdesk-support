import React, {type ReactNode} from "react";
import Logo from "@/components/common/Logo";
import {Theme} from "@/components/Theme";

function OnboardingLayout({children}:{ children: ReactNode }) {
    return (
        <div>
            <Theme>
                <Logo justLogoIcon={true} />
                <>
                    {children}
                </>
            </Theme>
        </div>
    )
}

export default OnboardingLayout
