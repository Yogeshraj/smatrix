import InputForm from "./InputForm"

const Sidebar = () => {
  return (
    <div className="bg-half-purple">
      <div className="p-5 border-b border-half-purple text-grey font-semibold">
        Put it here decide later...
      </div>
      <div className="p-5">
        <div className="min-h-[417px] max-h-[calc(100vh-520px)] overflow-y-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id massa nec lectus molestie fermentum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <InputForm />
      </div>
    </div>
  )
}

export default Sidebar