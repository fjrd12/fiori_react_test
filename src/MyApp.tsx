import {
  Avatar,
  Card,
  CardHeader,
  Text,
  ShellBar,
  ShellBarItem,
  List,
  ListItemStandard,
  ListItemCustom,
  ProgressIndicator,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon,
} from '@ui5/webcomponents-react';
import activateIcon from '@ui5/webcomponents-icons/dist/activate.js';
import { BarChart, LineChart } from '@ui5/webcomponents-react-charts';
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';
import { useState } from 'react';
import reactLogo from './assets/reactLogo.png';
import profilePictureExample from './assets/profilePictureExample.png';

export function MyApp() {
  const [toggleCharts, setToggleCharts] = useState('lineChart');
  const [loading, setLoading] = useState(false);
  const contentTitle =
    toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
  const switchToChart =
    toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

  const handleHeaderClick = () => {
    if (toggleCharts === 'lineChart') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('barChart');
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts('lineChart');
      }, 2000);
    }
  };

  const dataset = [
    {
      month: 'January',
      data: 65,
    },
    {
      month: 'February',
      data: 59,
    },
    {
      month: 'March',
      data: 80,
    },
    {
      month: 'April',
      data: 81,
    },
    {
      month: 'May',
      data: 56,
    },
    {
      month: 'June',
      data: 55,
    },
    {
      month: 'July',
      data: 40,
    },
  ];

  return (
    <div>
      <ShellBar
        logo={<img src={reactLogo} alt="Company Logo" />}
        profile={
          <Avatar>
            <img src={profilePictureExample} alt="User Avatar" />
          </Avatar>
        }
        primaryTitle="My App"
      >
        <ShellBarItem icon={activateIcon} text="Activate" />
      </ShellBar>

      <Card
        header={
          <CardHeader
            titleText="Prices over the months"
            subtitleText={`Click here to switch to ${switchToChart}`}
            interactive
            onClick={handleHeaderClick}
            avatar={
              <Icon
                name={
                  toggleCharts === 'lineChart' ? lineChartIcon : barChartIcon
                }
                accessibleName={contentTitle}
              />
            }
          />
        }
        style={{ width: '300px' }}
      >
        <Text style={{ padding: 'var(--sapContent_Space_S)' }}>
          This is the content area of the Card
        </Text>
        {toggleCharts === 'lineChart' ? (
          <LineChart
            dimensions={[{ accessor: 'month' }]}
            measures={[{ accessor: 'data', label: 'Price' }]}
            dataset={dataset}
            loading={loading}
          />
        ) : (
          <BarChart
            dimensions={[{ accessor: 'month' }]}
            measures={[{ accessor: 'data', label: 'Price' }]}
            dataset={dataset}
            loading={loading}
          />
        )}
      </Card>
    </div>
  );
}
