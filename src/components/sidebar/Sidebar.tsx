import InputForm from "./InputForm"

const Sidebar = () => {
  return (
    <div className="bg-half-purple">
      <div className="p-5 border-b border-half-purple text-grey font-semibold">
        Put it here decide later...
      </div>
      <div className="p-5">
        <div className="min-h-[calc(100vh-300px)] max-h-[calc(100vh-500px)] overflow-y-scroll">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id massa nec lectus molestie fermentum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quo iusto reprehenderit ipsum doloremque. Aliquid quod voluptas soluta perspiciatis blanditiis, sint aperiam sapiente incidunt quibusdam corrupti est, laudantium culpa earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore nisi doloremque pariatur tempore, accusantium debitis autem laboriosam in, quos eos asperiores, suscipit ad odit! Rerum doloremque architecto illo voluptatum? <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias pariatur praesentium itaque iste consequuntur sint ipsum non porro ab culpa earum nulla quis recusandae, facere, beatae dignissimos, temporibus incidunt. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias pariatur praesentium itaque iste consequuntur sint ipsum non porro ab culpa earum nulla quis recusandae, facere, beatae dignissimos, temporibus incidunt.</div>
        <InputForm />
      </div>
    </div>
  )
}

export default Sidebar