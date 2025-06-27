"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {motion} from "framer-motion";
import {RiUploadCloudFill, RiAddLine, RiCloseFill} from "@remixicon/react";

import {Card, CardTitle, CardDescription, CardContent, CardHeader} from "@workspace/ui/components/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@workspace/ui/components/select";
import {Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@workspace/ui/components/form";
import {Input} from "@workspace/ui/components/input";
import {Button} from "@workspace/ui/components/button";
import {Textarea} from "@workspace/ui/components/textarea";

import {useOnboarding} from "@/context/onboarding-context";
import {stepOneSchema, type StepOneData} from "@/utils/zodSchemas";


export function StepOne() {
    const { state, dispatch } = useOnboarding()
    const { stepOne } = state

    const form = useForm<StepOneData>({
        resolver: zodResolver(stepOneSchema),
        defaultValues: stepOne,
    })

    const addDepartment = () => {
        const newDepartment = {
            id: Date.now().toString(),
            name: "",
            description: "",
        }
        dispatch({ type: "ADD_DEPARTMENT", payload: newDepartment })
    }

    const removeDepartment = (id: string) => {
        dispatch({ type: "REMOVE_DEPARTMENT", payload: id })
    }

    const updateDepartment = (id: string, field: string, value: string) => {
        dispatch({ type: "UPDATE_DEPARTMENT", payload: { id, field, value } })
    }

    const timezones = [
        "UTC-12:00 - Baker Island",
        "UTC-11:00 - American Samoa",
        "UTC-10:00 - Hawaii",
        "UTC-09:00 - Alaska",
        "UTC-08:00 - Pacific Time",
        "UTC-07:00 - Mountain Time",
        "UTC-06:00 - Central Time",
        "UTC-05:00 - Eastern Time",
        "UTC-04:00 - Atlantic Time",
        "UTC-03:00 - Argentina",
        "UTC-02:00 - South Georgia",
        "UTC-01:00 - Azores",
        "UTC+00:00 - London",
        "UTC+01:00 - Central Europe",
        "UTC+02:00 - Eastern Europe",
        "UTC+03:00 - Moscow",
        "UTC+04:00 - Dubai",
        "UTC+05:00 - Pakistan",
        "UTC+06:00 - Bangladesh",
        "UTC+07:00 - Thailand",
        "UTC+08:00 - Singapore",
        "UTC+09:00 - Japan",
        "UTC+10:00 - Australia East",
        "UTC+11:00 - Solomon Islands",
        "UTC+12:00 - New Zealand",
    ]

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Set up your workspace</h2>
                <p className="text-gray-600">Configure your organization details and departments</p>
            </div>

            <Form {...form}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Organization Details */}
                    <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Organization Details</CardTitle>
                            <CardDescription>Basic information about your organization</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Organization Name and Slug */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="organizationName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Organization Name *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter organization name"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: "UPDATE_STEP_ONE", payload: { organizationName: e.target.value } })
                                                    }}
                                                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="slug"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Slug *</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="organization-slug"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e)
                                                        dispatch({ type: "UPDATE_STEP_ONE", payload: { slug: e.target.value } })
                                                    }}
                                                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </FormControl>
                                            <FormDescription>This will be used in your workspace URL</FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Timezone and Logo Upload */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="timezone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Timezone *</FormLabel>
                                            <Select
                                                value={field.value}
                                                onValueChange={(value) => {
                                                    field.onChange(value)
                                                    dispatch({ type: "UPDATE_STEP_ONE", payload: { timezone: value } })
                                                }}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                                        <SelectValue placeholder="Select timezone" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {timezones.map((tz) => (
                                                        <SelectItem key={tz} value={tz}>
                                                            {tz}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Logo Upload (optional)</FormLabel>
                                            <FormControl>
                                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                                                    <RiUploadCloudFill className="mx-auto h-6 w-6 text-gray-400 mb-1" />
                                                    <p className="text-xs text-gray-600">Click to upload</p>
                                                    <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Departments */}
                    <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-lg">Departments *</CardTitle>
                            <CardDescription>Add departments for your organization</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {stepOne.departments.map((dept) => (
                                <div key={dept.id} className="p-4 border border-gray-200 rounded-lg bg-white/80 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium">Department</span>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => removeDepartment(dept.id)}
                                            className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                                        >
                                            <RiCloseFill className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <Input
                                        placeholder="Department name *"
                                        value={dept.name}
                                        onChange={(e) => updateDepartment(dept.id, "name", e.target.value)}
                                        className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <Textarea
                                        placeholder="Description (optional)"
                                        value={dept.description}
                                        onChange={(e) => updateDepartment(dept.id, "description", e.target.value)}
                                        className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                                        rows={2}
                                    />
                                </div>
                            ))}

                            <Button
                                type="button"
                                variant="outline"
                                onClick={addDepartment}
                                className="w-full rounded-lg border-dashed border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                            >
                                <RiAddLine className="h-4 w-4 mr-2" />
                                Add Department
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </Form>
        </motion.div>
    )
}
