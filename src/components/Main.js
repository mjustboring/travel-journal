import Card from './Card';
import data from '../util/data.js'
import './Main.css'

function Main() {
  return (
    <div className='main'>
      {
        data.map((x,i,d)=>(
            <>
              <Card {...x} />
              {i+1 !== d.length && <hr />}
            </>
          )
        )
      }
    </div>
  );
}

export default Main;
