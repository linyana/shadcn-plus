import { Heading } from 'shadcn-plus';
import { BadgeProps } from './API';
import { BasicBadgeExample, UsageBadgeExample } from './Examples';
import { Page } from '@/components';
import { PropTable } from '../components';
import { BadgeTheme } from './Theme';

export const BadgePage = () => {
  return (
    <Page title="Badge" description="Displays a callout for user attention.">
      <Heading level={2}>Examples</Heading>
      <BasicBadgeExample />
      <UsageBadgeExample />
      <BadgeTheme />
      <Heading level={2}>API</Heading>
      <PropTable title="AlertProps" data={BadgeProps} />
    </Page>
  );
};
