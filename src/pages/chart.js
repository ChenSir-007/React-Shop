import ReactEcharts from 'echarts-for-react';
import chart from '../components/chart';
import styles from '../styles/chart.css';

export default function() {
  return (
    <div className={styles.chart}>
      <ReactEcharts
      option={chart}
      style={{width:'100%' , height:'100%'}}
      />
    </div>
  );
}
