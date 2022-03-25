import scores from "../info/scores";

const HighScoreTable = () => {
 
  return (
    <div>
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
                    {scores
                      .sort((a, b) => a.n.localeCompare(b.n))
                      .map(({ n, s }, i) => {
                        return (
                          <tr scope="row" key={i}>
                            <td>{n}</td>
                            <td>{s}</td>
                          </tr>
                        );
                      })}
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
