import React, { useRef, useEffect } from 'react';
import { Chart, registerables  } from 'chart.js/auto';

/**
 * Chart component
 * @param props 
 * @returns 
 */
export function ThirdPartyLibraries(props: { data: number[] }) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  Chart.register(...registerables);
  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: [...Array(props.data.length).keys()],
          datasets: [
            {
              label: 'Data',
              data: props.data,
              borderColor: 'blue',
            },
          ],
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.data]);

  return <canvas ref={chartRef} />;
}