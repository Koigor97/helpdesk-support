"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface ConfirmationDialogProps {
    open: boolean
    onOpenChangeAction: (open: boolean) => void
    title: string
    description: string
    confirmText?: string
    cancelText?: string
    onConfirmAction: () => void
    variant?: "default" | "destructive"
}

export function ConfirmationDialog({
                                       open,
                                       onOpenChangeAction,
                                       title,
                                       description,
                                       confirmText = "Continue",
                                       cancelText = "Cancel",
                                       onConfirmAction,
                                       variant = "default",
                                   }: ConfirmationDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChangeAction}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>{description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirmAction}
                        className={
                            variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""
                        }
                    >
                        {confirmText}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}