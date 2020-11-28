import { Line } from 'react-chartjs-2';

const ChartSection = (props) => {
  return (
    <div className='line-graph-container' style={{ backgroundColor: 'white' }}>
      <Line data={props.data} options={props.options || null} />
    </div>
  );
};

export default ChartSection;