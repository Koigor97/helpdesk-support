import Navigation from "@/components/common/navigation";
import TenantHeader from "@/components/dashboard/tenantHeader";

// Mock data
const mockUser = {
    name: "James Cobba",
    email: "jcobba@mocti.gov.sl",
    avatar: "/images/Mocti.webp?height=32&width=32",
    role: "admin",
}


export default function DashboardHeader () {
    return (
        <header className="">
            <Navigation />
            <TenantHeader
                organizationName={"MoCTI"}
                organizationLogo={"/images/Mocti.webp?height=32&width=32"}
                userProfile={mockUser}
            />
        </header>
    )
}