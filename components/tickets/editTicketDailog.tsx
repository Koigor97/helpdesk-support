"use client"

import React, { useState, useActionState } from "react"

import {editTicketAction} from "@/lib/actions/ticketsAction";
import {EditTicketState} from "@/utils/types";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {RiCloseLine} from "@remixicon/react";


interface EditTicketDialogProps {
    open: boolean
    onOpenChangeAction: (open: boolean) => void
    ticket: {
        id: string
        title: string
        description: string
        status: string
        priority: { id: string; name: string; color: string }
        category: { id: string; name: string; color: string }
        assignedTo?: { id: string; name: string }
        tags: string[]
    }
}

const initialState: EditTicketState = {
    errors: {},
}

export function EditTicketDialog({ open, onOpenChangeAction, ticket }: EditTicketDialogProps) {
    const [tags, setTags] = useState<string[]>(ticket.tags || [])
    const [newTag, setNewTag] = useState("")

    // Server action state
    const [state, formAction, pending] = useActionState(editTicketAction.bind(null, ticket.id), initialState)

    // Mock data - replace with your actual data
    const priorities = [
        { id: "1", name: "Low", color: "#3b82f6" },
        { id: "2", name: "Medium", color: "#f59e0b" },
        { id: "3", name: "High", color: "#ef4444" },
        { id: "4", name: "Critical", color: "#8b5cf6" },
    ]

    const categories = [
        { id: "1", name: "Bug Report" },
        { id: "2", name: "Feature Request" },
        { id: "3", name: "Technical Issue" },
        { id: "4", name: "General Inquiry" },
    ]

    const assignees = [
        { id: "1", name: "Mike Wilson" },
        { id: "2", name: "Sarah Johnson" },
        { id: "3", name: "Alex Chen" },
        { id: "4", name: "Emma Davis" },
    ]

    const handleAddTag = () => {
        if (newTag.trim() && !tags.includes(newTag.trim())) {
            setTags([...tags, newTag.trim()])
            setNewTag("")
        }
    }

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault()
            handleAddTag()
        }
    }

    // Close dialog on success
    if (state.success) {
        onOpenChangeAction(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChangeAction}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Ticket</DialogTitle>
                    <DialogDescription>Make changes to the ticket details below.</DialogDescription>
                </DialogHeader>

                <form action={formAction} className="space-y-4">
                    {/* Title */}
                    <div className="space-y-2">
                        <Label htmlFor="title">
                            Title <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="title"
                            name="title"
                            defaultValue={ticket.title}
                            className={state.errors?.title ? "border-red-500" : ""}
                        />
                        {state.errors?.title && <p className="text-sm text-red-500">{state.errors.title.join(", ")}</p>}
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label htmlFor="description">
                            Description <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            defaultValue={ticket.description}
                            rows={4}
                            className={state.errors?.description ? "border-red-500" : ""}
                        />
                        {state.errors?.description && <p className="text-sm text-red-500">{state.errors.description.join(", ")}</p>}
                    </div>

                    {/* Status, Priority, Category */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select name="status" defaultValue={ticket.status}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="open">Open</SelectItem>
                                    <SelectItem value="in_progress">In Progress</SelectItem>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="resolved">Resolved</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="priority">Priority</Label>
                            <Select name="priority" defaultValue={ticket.priority.id}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {priorities.map((priority) => (
                                        <SelectItem key={priority.id} value={priority.id}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: priority.color }} />
                                                {priority.name}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select name="category" defaultValue={ticket.category.id}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Assigned To */}
                    <div className="space-y-2">
                        <Label htmlFor="assignedTo">Assigned To</Label>
                        <Select name="assignedTo" defaultValue={ticket.assignedTo?.id || "unassigned"}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select assignee" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="unassigned">Unassigned</SelectItem>
                                {assignees.map((assignee) => (
                                    <SelectItem key={assignee.id} value={assignee.id}>
                                        {assignee.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Tags */}
                    <div className="space-y-2">
                        <Label>Tags</Label>
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <Input
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    placeholder="Add a tag..."
                                    className="flex-1"
                                />
                                <Button type="button" onClick={handleAddTag} variant="outline">
                                    Add
                                </Button>
                            </div>
                            {tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                                            {tag}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTag(tag)}
                                                className="ml-1 hover:bg-gray-300 rounded-full p-0.5"
                                            >
                                                <RiCloseLine className="h-3 w-3" />
                                            </button>
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                        {/* Hidden inputs for tags */}
                        {tags.map((tag) => (
                            <input key={tag} type="hidden" name="tags" value={tag} />
                        ))}
                    </div>

                    {state.errors?._form && (
                        <div className="text-sm text-red-500 bg-red-50 p-3 rounded-md">{state.errors._form.join(", ")}</div>
                    )}

                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => onOpenChangeAction(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={pending}>
                            {pending ? "Saving..." : "Save Changes"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
