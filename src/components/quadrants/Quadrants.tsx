import Square from "./Square";

const Quadrants = () => {
  return (
    <div className='grid grid-cols-2 gap-4 py-5'>
      <>
        <Square color='green' title='Do' subtitle='Important & Urgent'>
          <div></div>
        </Square>
        <Square
          color='blue'
          title='Schedule'
          subtitle='Important but not Urgent'>
          <div></div>
        </Square>
        <Square
          color='yellow'
          title='Delegate'
          subtitle='Not Important but Urgent'>
          <div></div>
        </Square>
        <Square
          color='red'
          title='Limit'
          subtitle='Not Important and not Urgent'>
          <div></div>
        </Square>
      </>
    </div>
  );
};

export default Quadrants;
