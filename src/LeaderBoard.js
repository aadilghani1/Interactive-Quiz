const LeaderBoard = () => {
  // const [progress, setProgress] = useState(0);
  // // setTimeout(() => {
  // //   setProgress(progress + 1);
  // // }, 500);
  const scores = [
    {
      name: "Elon",
      score: 50,
    },
    { name: "Tim Cook", score: 90 },
    { name: "abcd", score: 80 },
    { name: "abcdef", score: 40 },
    { name: "Cook", score: 100 },
    { name: "Tim", score: 30 },
    { name: "GG", score: 80 },
  ];
  const user = "Elon";
  const radius = 50;
  const stroke = 5;
  const progress = 50;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  scores.sort((a, b) => b.score - a.score);
  return (
    <div className="w-screen h-screen bg-whiteSmoke flex justify-center items-center">
      <div className="p-4 border text-whiteSmoke bg-heavyIndigo border-none rounded-xl shadow-lg md:w-1/3 md:h-2/3 flex flex-col space-y-3">
        <div className="flex justify-evenly items-center">
          <h1 className="text-3xl"> Your Score</h1>
          <div>
            <svg
              className="absolute"
              height={radius * 2}
              transform="rotate(-90)"
              width={radius * 2}
            >
              <circle
                stroke="white"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                stroke-width={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <h1 className="text-xl mx-10 my-9 relative">{progress}</h1>
          </div>
        </div>
        <div className="flex flex-col overflow-y-auto space-y-2">
          {scores.map((score) => (
            <div
              className={`flex justify-between p-2 ${
                score.name === user && "bg-indigo-400 bg-opacity-30 rounded-2xl"
              }`}
            >
              <h1 className="text-2xl">{score.name}</h1>
              <h1 className="text-2xl">{score.score}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
