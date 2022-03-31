import React,{useState}from 'react'
import scores from "../info/scores";

const Score =(prop)=>{
  let scoreSorted;
  const ascending=(v)=>v.sort((a, b) => a.n.localeCompare(b.n))
  const descending=(v)=>v.sort((a, b) => b.n.localeCompare(a.n))
  prop.order==='ascending'?scoreSorted=ascending(prop.score):scoreSorted=descending(prop.score)
  return scoreSorted.map(({ n, s }, i) => {
    return (
      <tr key={i}>
        <td>{n}</td>
        <td>{s}</td>
      </tr>
    );
  });
}

const HighScoreTable = () => {
  const [order,setOrder]=useState('ascending')

  return (
    <div>
      <button
        onClick={()=>order === 'ascending'
            ? setOrder(()=>'descending')
            : setOrder(()=>'ascending')
        }
      >Change order</button>
      <h1>High score per Country</h1>
      <div>
        {scores
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, scores }, i) => {
            return (
              <div key={i}>
                <h3>{name}</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Score score={scores} order={order} />
                    
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HighScoreTable;
