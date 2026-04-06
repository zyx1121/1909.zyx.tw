"use client"

import { useRef } from "react"
import { addExpense } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ExpenseForm() {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    await addExpense(formData)
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex gap-2">
      <Input name="title" placeholder="項目名稱" required className="flex-1" />
      <Input
        name="amount"
        type="number"
        placeholder="金額"
        min={1}
        required
        className="w-28"
      />
      <Button type="submit">新增</Button>
    </form>
  )
}
