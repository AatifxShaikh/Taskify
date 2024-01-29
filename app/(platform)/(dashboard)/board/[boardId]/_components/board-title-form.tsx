"use client"
import { Button } from "@/components/ui/button"
import { ElementRef, useRef, useState } from "react"
import { Board } from "@prisma/client"
import { FormInput } from "@/components/form/form-input"


import { useAction } from "@/hooks/use-action"
import { updateBoard } from "@/actions/update-board/index"
import { toast } from "sonner"

interface BoardTitleFormProps {
    data: Board
}
export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
    const { execute } = useAction(updateBoard, {
        onSuccess: (data) => {
            toast.success(`Board"${data.title}" updated!`)
            setTile(data.title)
            disableEditing()
        },
        onError: (error) => {
            toast.error(error)
        }
    })
    const formRef = useRef<ElementRef<"form">>(null)
    const inputRef = useRef<ElementRef<"input">>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [title, setTile] = useState(data.title)
    const enableEditing = () => {
        setIsEditing(true)
        setTimeout(() => {
            inputRef.current?.focus()
            inputRef.current?.select()
        })
    }
    const disableEditing = () => {
        setIsEditing(false)
    }
    const onSubmit = (formData: FormData) => {
        const title = formData.get("title") as string
        console.log("I am submitted", title);
        execute({
            title,
            id: data.id
        })

    }
    const onBlur = () => {
        formRef.current?.requestSubmit()
    }
    if (isEditing) {
        return (
            <form ref={formRef} action={onSubmit} className="flex items-center
            gap-x-2
            ">
                <FormInput ref={inputRef} id="title"
                    onBlur={onBlur}
                    defaultValue={title}
                    className="text-lg font-bold px-[7px] py- h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-none" />
            </form>
        )
    }
    return (
        <Button
            onClick={enableEditing}
            variant={'transparent'} className="font-bold text-lg h-auto w-auto p-1 px-2">
            {title}
        </Button>
    )
}