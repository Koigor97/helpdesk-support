"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {motion} from "framer-motion";

import {RiAddLine, RiCloseFill} from "@remixicon/react";

import {Card, CardTitle, CardDescription, CardContent, CardHeader} from "@workspace/ui/components/card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@workspace/ui/components/select";
import {Form,FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@workspace/ui/components/form";
import {Input} from "@workspace/ui/components/input";
import {Button} from "@workspace/ui/components/button";
import {Switch} from "@workspace/ui/components/switch";

import {useOnboarding} from "@/context/onboarding-context";
import {stepTwoSchema, type StepTwoData} from "@/utils/zodSchemas";


export function StepTwo() {
    const { state, dispatch } = useOnboarding()
    const { stepTwo } = state

    const form = useForm<StepTwoData>({
        resolver: zodResolver(stepTwoSchema),
        defaultValues: stepTwo,
    })

    const addPriority = () => {
        const newPriority = {
            id: Date.now().toString(),
            name: "",
            level: "1",
            color: "#3B82F6",
        }
        dispatch({ type: "ADD_PRIORITY", payload: newPriority })
    }

    const removePriority = (id: string) => {
        dispatch({ type: "REMOVE_PRIORITY", payload: id })
    }

    const updatePriority = (id: string, field: string, value: string) => {
        dispatch({ type: "UPDATE_PRIORITY", payload: { id, field, value } })
    }

    const addCategory = () => {
        const newCategory = {
            id: Date.now().toString(),
            name: "",
            color: "#10B981",
        }
        dispatch({ type: "ADD_CATEGORY", payload: newCategory })
    }

    const removeCategory = (id: string) => {
        dispatch({ type: "REMOVE_CATEGORY", payload: id })
    }

    const updateCategory = (id: string, field: string, value: string) => {
        dispatch({ type: "UPDATE_CATEGORY", payload: { id, field, value } })
    }

    return (
        <motion.div
            className="w-full max-w-6xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Configure ticket system</h2>
                <p className="text-gray-600">Set up priorities, categories, SLA rules, and features</p>
            </div>

            <Form {...form}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Priorities and Categories */}
                    <div className="space-y-6">
                        {/* Priorities */}
                        <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Ticket Priorities *</CardTitle>
                                <CardDescription>Define priority levels for tickets</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {stepTwo.priorities.map((priority) => (
                                    <div key={priority.id} className="p-4 border border-gray-200 rounded-lg bg-white/80 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">Priority</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removePriority(priority.id)}
                                                className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                                            >
                                                <RiCloseFill className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div className="space-y-2">
                                                <span className="text-xs font-medium">Name *</span>
                                                <Input
                                                    placeholder="Priority name"
                                                    value={priority.name}
                                                    onChange={(e) => updatePriority(priority.id, "name", e.target.value)}
                                                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <span className="text-xs font-medium">Level *</span>
                                                <Select
                                                    value={priority.level}
                                                    onValueChange={(value) => updatePriority(priority.id, "level", value)}
                                                >
                                                    <SelectTrigger className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">1 - Highest</SelectItem>
                                                        <SelectItem value="2">2 - High</SelectItem>
                                                        <SelectItem value="3">3 - Medium</SelectItem>
                                                        <SelectItem value="4">4 - Low</SelectItem>
                                                        <SelectItem value="5">5 - Lowest</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-xs font-medium">Color *</span>
                                            <div className="flex items-center space-x-3">
                                                <input
                                                    type="color"
                                                    value={priority.color}
                                                    onChange={(e) => updatePriority(priority.id, "color", e.target.value)}
                                                    className="w-8 h-8 rounded border border-gray-200 cursor-pointer"
                                                />
                                                <Input
                                                    value={priority.color}
                                                    onChange={(e) => updatePriority(priority.id, "color", e.target.value)}
                                                    className="flex-1 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addPriority}
                                    className="w-full rounded-lg border-dashed border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
                                >
                                    <RiAddLine className="h-4 w-4 mr-2" />
                                    Add Priority
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Categories */}
                        <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Ticket Categories *</CardTitle>
                                <CardDescription>Organize tickets by categories</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {stepTwo.categories.map((category) => (
                                    <div key={category.id} className="p-4 border border-gray-200 rounded-lg bg-white/80 space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">Category</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeCategory(category.id)}
                                                className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                                            >
                                                <RiCloseFill className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-xs font-medium">Name *</span>
                                            <Input
                                                placeholder="Category name"
                                                value={category.name}
                                                onChange={(e) => updateCategory(category.id, "name", e.target.value)}
                                                className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <span className="text-xs font-medium">Color *</span>
                                            <div className="flex items-center space-x-3">
                                                <input
                                                    type="color"
                                                    value={category.color}
                                                    onChange={(e) => updateCategory(category.id, "color", e.target.value)}
                                                    className="w-8 h-8 rounded border border-gray-200 cursor-pointer"
                                                />
                                                <Input
                                                    value={category.color}
                                                    onChange={(e) => updateCategory(category.id, "color", e.target.value)}
                                                    className="flex-1 rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={addCategory}
                                    className="w-full rounded-lg border-dashed border-green-300 text-green-600 hover:bg-green-50 bg-transparent"
                                >
                                    <RiAddLine className="h-4 w-4 mr-2" />
                                    Add Category
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - SLA and Features */}
                    <div className="space-y-6">
                        {/* SLA Configuration */}
                        <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">SLA Configuration</CardTitle>
                                <CardDescription>Set response and resolution time targets</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="slaResponseTime"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Response Time (minutes) *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="60"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            dispatch({ type: "UPDATE_STEP_TWO", payload: { slaResponseTime: e.target.value } })
                                                        }}
                                                        className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                    />
                                                </FormControl>
                                                <FormDescription>Time to first response</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="slaResolutionTime"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Resolution Time (minutes) *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="number"
                                                        placeholder="480"
                                                        {...field}
                                                        onChange={(e) => {
                                                            field.onChange(e)
                                                            dispatch({ type: "UPDATE_STEP_TWO", payload: { slaResolutionTime: e.target.value } })
                                                        }}
                                                        className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                                                    />
                                                </FormControl>
                                                <FormDescription>Time to resolve ticket</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Feature Toggles */}
                        <Card className="shadow-sm border-0 bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-lg">Feature Configuration</CardTitle>
                                <CardDescription>Enable or disable platform features</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="knowledgeBase"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white/80">
                                            <div className="space-y-1">
                                                <FormLabel className="text-sm font-medium">Knowledge Base (optional)</FormLabel>
                                                <FormDescription className="text-xs">
                                                    Allow customers to access self-service articles
                                                </FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => {
                                                        field.onChange(checked)
                                                        dispatch({ type: "UPDATE_STEP_TWO", payload: { knowledgeBase: checked } })
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="internalMessaging"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white/80">
                                            <div className="space-y-1">
                                                <FormLabel className="text-sm font-medium">Internal Messaging (optional)</FormLabel>
                                                <FormDescription className="text-xs">Enable team communication within tickets</FormDescription>
                                            </div>
                                            <FormControl>
                                                <Switch
                                                    checked={field.value}
                                                    onCheckedChange={(checked) => {
                                                        field.onChange(checked)
                                                        dispatch({ type: "UPDATE_STEP_TWO", payload: { internalMessaging: checked } })
                                                    }}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Form>
        </motion.div>
    )
}
