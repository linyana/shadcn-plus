import { Flex, Heading, Paragraph } from 'shadcn-plus';

type IPropsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
};

export const Page = ({ title, description, children }: IPropsType) => {
  return (
    <Flex>
      <div
        style={{
          width: 'calc(100% - 150px)',
        }}
      >
        {title && <Heading level={1}>{title}</Heading>}
        {description && <Paragraph>{description}</Paragraph>}
        <div
          style={{
            marginTop: 32,
          }}
        >
          {children}
        </div>
      </div>
      <div
        style={{
          width: 150,
        }}
      ></div>
    </Flex>
  );
};
