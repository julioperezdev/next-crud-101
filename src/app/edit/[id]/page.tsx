import TaskForm from "@/components/TaskForm"

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Edit page {params.id}</h1>
      <TaskForm
        taskId={params.id} />
    </>
  )
}