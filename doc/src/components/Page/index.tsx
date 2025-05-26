import { Heading, Paragraph } from 'shadcn-plus';

type IPropsType = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
};

export const Page = ({
  title,
  description,
  children,
}: IPropsType) => {
  return (
    <>
      <div
        style={{
          width: '100%',
          maxWidth: 800,
        }}
      >
        {title && (
          <Heading level={2}>{title}</Heading>
        )}
        {description && (
          <Paragraph>{description}</Paragraph>
        )}
        <div
          style={{
            marginTop: 32,
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
