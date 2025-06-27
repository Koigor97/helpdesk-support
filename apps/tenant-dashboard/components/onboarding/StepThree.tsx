"use client"
import {motion} from "framer-motion";
import {RiCheckboxFill, RiBuildingFill, RiEarthFill, RiGroupFill, RiAlertFill, RiBookmarkFill, RiTimeFill, RiSettings5Fill} from "@remixicon/react";

import {Badge} from "@workspace/ui/components/badge";
import {CardHeader, Card, CardContent, CardTitle} from "@workspace/ui/components/card";

import {useOnboarding} from "@/context/onboarding-context";


export function StepThree() {
    const { state } = useOnboarding()
    const { stepOne, stepTwo } = state

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <RiCheckboxFill className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Review your configuration</h2>
                <p className="text-gray-600">Please review all settings before completing the setup</p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {/* Organization Summary */}
                <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <RiBuildingFill className="h-5 w-5 text-blue-500" />
                            Organization Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">Organization Name:</span>
                                <span className="text-sm font-semibold">{stepOne.organizationName || "Not set"}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-600">Slug:</span>
                                <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{stepOne.slug || "not-set"}</span>
                            </div>
                            <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
                  <RiEarthFill className="h-4 w-4" />
                  Timezone:
                </span>
                                <span className="text-sm">{stepOne.timezone || "Not selected"}</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t">
                            <div className="flex items-center gap-2 mb-3">
                                <RiGroupFill className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium">Departments ({stepOne.departments.length})</span>
                            </div>
                            <div className="space-y-2">
                                {stepOne.departments.length > 0 ? (
                                    stepOne.departments.map((dept) => (
                                        <div key={dept.id} className="p-3 bg-gray-50 rounded-lg">
                                            <div className="font-medium text-sm">{dept.name}</div>
                                            {dept.description && <div className="text-xs text-gray-600 mt-1">{dept.description}</div>}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500 italic">No departments added</p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Ticket System Summary */}
                <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <RiSettings5Fill className="h-5 w-5 text-blue-500" />
                            Ticket System
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Priorities */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <RiAlertFill className="h-4 w-4 text-orange-500" />
                                <span className="text-sm font-medium">Priorities ({stepTwo.priorities.length})</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {stepTwo.priorities.map((priority) => (
                                    <Badge
                                        key={priority.id}
                                        variant="outline"
                                        className="text-xs"
                                        style={{ borderColor: priority.color, color: priority.color }}
                                    >
                                        {priority.name} (Level {priority.level})
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <RiBookmarkFill className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium">Categories ({stepTwo.categories.length})</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {stepTwo.categories.map((category) => (
                                    <Badge
                                        key={category.id}
                                        variant="outline"
                                        className="text-xs"
                                        style={{ borderColor: category.color, color: category.color }}
                                    >
                                        {category.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* SLA */}
                        <div className="pt-4 border-t">
                            <div className="flex items-center gap-2 mb-3">
                                <RiTimeFill className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium">SLA Configuration</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Response Time:</span>
                                    <span className="text-sm font-semibold">{stepTwo.slaResponseTime} minutes</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Resolution Time:</span>
                                    <span className="text-sm font-semibold">{stepTwo.slaResolutionTime} minutes</span>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="pt-4 border-t">
                            <span className="text-sm font-medium mb-3 block">Enabled Features</span>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Knowledge Base:</span>
                                    <Badge variant={stepTwo.knowledgeBase ? "default" : "secondary"} className="text-xs">
                                        {stepTwo.knowledgeBase ? "Enabled" : "Disabled"}
                                    </Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Internal Messaging:</span>
                                    <Badge variant={stepTwo.internalMessaging ? "default" : "secondary"} className="text-xs">
                                        {stepTwo.internalMessaging ? "Enabled" : "Disabled"}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                <Card className="shadow-sm border-0 bg-green-50/50 backdrop-blur-sm border-green-200">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-3">
                            <RiCheckboxFill className="h-6 w-6 text-green-600" />
                            <div>
                                <h3 className="font-semibold text-green-900">Ready to Complete Setup</h3>
                                <p className="text-sm text-green-700">
                                    Your workspace configuration looks good! Click "Complete Setup" to finalize your onboarding.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </motion.div>
    )
}
