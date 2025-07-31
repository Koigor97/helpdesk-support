"use client"

import {type ReactNode, useState} from "react";


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

import {
    RiUser2Line,
    RiMailLine,
    RiPhoneLine,
    RiMapPinRangeLine,
    RiBuilding2Line,
    RiCalendar2Line,
    RiFileTextLine,
} from "@remixicon/react";


export default function AddUserComp({children}: {children: ReactNode}) {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        department: "",
        jobTitle: "",
        location: "",
        timezone: "",
        startDate: "",
        bio: "",
        sendWelcomeEmail: true,
        activateAccount: true,
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Your Supabase logic here
            console.log("Creating user:", formData)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Reset form and close sheet
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                role: "",
                department: "",
                jobTitle: "",
                location: "",
                timezone: "",
                startDate: "",
                bio: "",
                sendWelcomeEmail: true,
                activateAccount: true,
            })
            setOpen(false)
        } catch (error) {
            console.error("Error creating user:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }


    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <RiUser2Line className="h-5 w-5" />
                        Add New User
                    </SheetTitle>
                    <SheetDescription>Create a new user account and assign them to your organization.</SheetDescription>
                </SheetHeader>

                <form onSubmit={handleSubmit} className="space-y-6 py-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <RiUser2Line className="h-4 w-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium">Personal Information</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name *</Label>
                                <Input
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name *</Label>
                                <Input
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <div className="relative">
                                <RiMailLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    placeholder="john.doe@company.com"
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <div className="relative">
                                <RiPhoneLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    placeholder="+1 (555) 123-4567"
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Work Information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <RiBuilding2Line className="h-4 w-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium">Work Information</h3>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role">Role *</Label>
                            <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="admin">
                                        <div className="flex flex-col items-start">
                                            <span>Admin</span>
                                            <span className="text-xs text-muted-foreground">Full system access</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="manager">
                                        <div className="flex flex-col items-start">
                                            <span>Manager</span>
                                            <span className="text-xs text-muted-foreground">Team management access</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="agent">
                                        <div className="flex flex-col items-start">
                                            <span>Agent</span>
                                            <span className="text-xs text-muted-foreground">Ticket handling access</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="supervisor">
                                        <div className="flex flex-col items-start">
                                            <span>Supervisor</span>
                                            <span className="text-xs text-muted-foreground">Department oversight</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="department">Department *</Label>
                                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select department" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="it_support">IT Support</SelectItem>
                                        <SelectItem value="customer_service">Customer Service</SelectItem>
                                        <SelectItem value="technical_support">Technical Support</SelectItem>
                                        <SelectItem value="billing">Billing</SelectItem>
                                        <SelectItem value="sales">Sales</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="jobTitle">Job Title</Label>
                                <Input
                                    id="jobTitle"
                                    value={formData.jobTitle}
                                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                                    placeholder="Support Specialist"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="location">Location</Label>
                                <div className="relative">
                                    <RiMapPinRangeLine className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange("location", e.target.value)}
                                        placeholder="New York, NY"
                                        className="pl-10"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="timezone">Timezone</Label>
                                <Select value={formData.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select timezone" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                                        <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                                        <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                                        <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                                        <SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
                                        <SelectItem value="Europe/Paris">Central European Time (CET)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="startDate">Start Date</Label>
                            <div className="relative">
                                <RiCalendar2Line className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    id="startDate"
                                    type="date"
                                    value={formData.startDate}
                                    onChange={(e) => handleInputChange("startDate", e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Additional Information */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <RiFileTextLine className="h-4 w-4 text-muted-foreground" />
                            <h3 className="text-sm font-medium">Additional Information</h3>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio / Notes</Label>
                            <Textarea
                                id="bio"
                                value={formData.bio}
                                onChange={(e) => handleInputChange("bio", e.target.value)}
                                placeholder="Brief description about the user..."
                                rows={3}
                            />
                        </div>
                    </div>

                    <Separator />

                    {/* Settings */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-medium">Account Settings</h3>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="sendWelcomeEmail">Send Welcome Email</Label>
                                <p className="text-xs text-muted-foreground">Send an email with login instructions to the new user</p>
                            </div>
                            <Switch
                                id="sendWelcomeEmail"
                                checked={formData.sendWelcomeEmail}
                                onCheckedChange={(checked) => handleInputChange("sendWelcomeEmail", checked)}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label htmlFor="activateAccount">Activate Account</Label>
                                <p className="text-xs text-muted-foreground">Allow the user to log in immediately</p>
                            </div>
                            <Switch
                                id="activateAccount"
                                checked={formData.activateAccount}
                                onCheckedChange={(checked) => handleInputChange("activateAccount", checked)}
                            />
                        </div>
                    </div>
                </form>

                <SheetFooter>
                    <Button variant="outline" onClick={() => setOpen(false)} disabled={loading}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} disabled={loading}>
                        {loading ? "Creating..." : "Create User"}
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

